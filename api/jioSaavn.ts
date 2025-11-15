import { HTTPException } from "hono/http-exception";
import forge from "node-forge";

export class JioSaavnAPI {
  private async request<T>({
    url,
  }: {
    url: string;
  }): Promise<{ data: T | string; ok: boolean }> {
    const response = await fetch(url, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36",
        Accept: "application/json, text/plain, */*",
      },
    });

    const contentType = response.headers.get("content-type") || "";

    if (contentType.includes("application/json")) {
      try {
        const data = await response.json();
        return { data: data as T, ok: response.ok };
      } catch (error) {
        console.error("JSON parsing error:", error);
        throw new HTTPException(500, {
          message: "Invalid JSON response from JioSaavn API",
        });
      }
    } else {
      const text = await response.text();
      const data = JSON.parse(text);
      return { data: data, ok: response.ok };
    }
  }

  async search(query: string): Promise<any> {
    const { data } = await this.request<any>({
      url: `https://www.jiosaavn.com/api.php?__call=search.getResults&api_version=4&_format=json&_marker=0&cc=in&ctx=web6dot0&includeMetaTags=1&q=${query}`,
    });
    if (!data)
      throw new HTTPException(404, {
        message: `no results found for ${query}`,
      });
    if (!data.results?.length)
      return new HTTPException(404, { message: "No results found" });
    const results = data.results.map((track: any) => this.formatTrack(track));
    return {
      results,
    };
  }

  async getTrackById(id: string): Promise<any> {
    const { data } = await this.request<any>({
      url: `https://www.jiosaavn.com/api.php?__call=song.getDetails&api_version=4&_format=json&_marker=0&ctx=web6dot0&pids=${id}`,
    });
    if (!data) throw new HTTPException(404, { message: "Track not found" });
    const track = this.formatTrack(data.songs[0]);
    return {
      track,
    };
  }

  async getTrack(id: string): Promise<any> {
    const { data } = await this.request<any>({
      url: `https://www.jiosaavn.com/api.php?__call=webapi.get&api_version=4&_format=json&_marker=0&ctx=web6dot0&token=${id}&type=song`,
    });
    if (!data.songs?.length)
      throw new HTTPException(404, { message: "Track not found" });
    const track = this.formatTrack(data.songs[0]);
    return {
      track: track,
    };
  }

  async getAlbum(id: string): Promise<any> {
    const { data } = await this.request<any>({
      url: `https://www.jiosaavn.com/api.php?__call=webapi.get&api_version=4&_format=json&_marker=0&ctx=web6dot0&token=${id}&type=album`,
    });
    if (!data) throw new HTTPException(404, { message: "Album not found" });
    const album = this.formatAlbum(data);
    return {
      album,
    };
  }

  async getArtist(id: string): Promise<any> {
    const { data } = await this.request<any>({
      url: `https://www.jiosaavn.com/api.php?__call=webapi.get&api_version=4&_format=json&_marker=0&ctx=web6dot0&token=${id}&type=artist&n_song=50`,
    });
    if (!data) throw new HTTPException(404, { message: "Artist not found" });
    const artist = this.formatArtist(data);
    return {
      artist,
    };
  }

  async getPlaylist(id: string, limit = 100): Promise<any> {
    const { data } = await this.request<any>({
      url: `https://www.jiosaavn.com/api.php?__call=webapi.get&api_version=4&_format=json&_marker=0&ctx=web6dot0&token=${id}&type=playlist&n=${limit}`,
    });
    if (!data) throw new HTTPException(404, { message: "Playlist not found" });
    const playlist = this.formatPlaylist(data);
    return {
      playlist,
    };
  }

  async getRecommendations(id: string, limit = 10): Promise<any> {
    const stationId = await this.getStation(id);
    if (!stationId) return null;
    const { data, ok } = await this.request<any>({
      url: `https://www.jiosaavn.com/api.php?__call=webradio.getSong&api_version=4&_format=json&_marker=0&ctx=android&stationid=${stationId}&k=${limit}`,
    });
    if (!data || !ok) {
      throw new HTTPException(404, {
        message: "no suggestions found for the given song",
      });
    }

    const tracks: any[] = [];
    for (const key in data) {
      // biome-ignore lint/suspicious/noPrototypeBuiltins: <explanation>
      if (data.hasOwnProperty(key) && data[key].song) {
        tracks.push(this.formatTrack(data[key].song));
      }
    }
    return {
      tracks,
    };
  }

  private async getStation(identifier: string): Promise<any> {
    const encodedSongId = JSON.stringify([encodeURIComponent(identifier)]);
    const { data, ok } = await this.request<any>({
      url: `https://www.jiosaavn.com/api.php?__call=webradio.createEntityStation&api_version=4&_format=json&_marker=0&ctx=android&entity_id=${encodedSongId}&entity_type=queue`,
    });
    if (!data || !ok || !data.stationid) return new Error("Invalid station id");
    return data.stationid;
  }

  public decryptMediaUrl(encryptedMediaUrl: string) {
    if (!encryptedMediaUrl) return null;

    try {
      const key = "38346591";
      const iv = "00000000";

      const encrypted = forge.util.decode64(encryptedMediaUrl);
      const decipher = forge.cipher.createDecipher(
        "DES-ECB",
        forge.util.createBuffer(key)
      );
      decipher.start({ iv: forge.util.createBuffer(iv) });
      decipher.update(forge.util.createBuffer(encrypted));
      decipher.finish();

      const decryptedLink = decipher.output.getBytes();

      // Replace _96 with _320 for 320kbps quality
      return decryptedLink.replace("_96", "_320");
    } catch (e: any) {
      console.error(`Error decrypting media URL: ${e.message}`);
      return null;
    }
  }

  private formatTrack(track: any) {
    const data = {
      identifier: track.id,
      title: track.title,
      length: Number(track.more_info.duration) * 1000,
      uri: null,
      artworkUrl: track.image.replace("150x150", "500x500"),
      author: null,
      encryptedMediaUrl: null,
      albumUrl: null,
      artistUrl: null,
      albumName: null,
      artistArtworkUrl: null,
      previewUrl: null,
    };

    if (track?.perma_url) {
      data.uri = track.perma_url;
    }

    if (track?.more_info.artistMap?.primary_artists?.length) {
      data.author = track.more_info.artistMap.primary_artists[0].name;
    }

    if (track?.more_info.encrypted_media_url) {
      data.encryptedMediaUrl = track.more_info.encrypted_media_url;
    }

    if (track.more_info.album_url) {
      data.albumUrl = track.more_info.album_url;
    }

    if (track.more_info.artistMap.primary_artists[0].perma_url) {
      data.artistUrl = track.more_info.artistMap.primary_artists[0].perma_url;
    }
    if (track.more_info) {
      data.previewUrl = track.more_info.media_preview_url
        ? track.more_info.media_preview_url
        : track.more_info.vlink;
    }

    if (track.more_info.artistMap.primary_artists[0].image) {
      data.artistArtworkUrl =
        track.more_info.artistMap.primary_artists[0].image.replace(
          "150x150",
          "500x500"
        );
    }

    if (track.more_info.album) {
      data.albumName = track.more_info.album;
    }

    return data;
  }

  private formatAlbum(album: any) {
    return {
      id: album.id,
      name: album.title,
      uri: album.perma_url,
      artworkUrl: album.image.replace("150x150", "500x500"),
      author: album.subtitle,
      tracks: album.list.map((song: any) => this.formatTrack(song)),
      totalSongs: album.list_count,
    };
  }

  private formatArtist(artist: any): any {
    return {
      name: artist.name,
      uri: artist.urls.overview,
      artworkUrl: artist.image.replace("150x150", "500x500"),
      tracks: artist.topSongs.map((song: any) => this.formatTrack(song)),
    };
  }

  private formatPlaylist(playlist: any): any {
    return {
      title: playlist.title,
      uri: playlist.perma_url,
      artworkUrl: playlist.image.replace("150x150", "500x500"),
      tracks: playlist.list.map((song: any) => this.formatTrack(song)),
      totalSongs: playlist.list_count,
    };
  }

  extract = {
    track: (url: string) => {
      // Handle /song/ pattern: /song/[title]/[id]
      let match = url.match(
        /(?:jiosaavn\.com|saavn\.com)\/song\/[^/]+\/([^/?&#]+)/
      );
      if (match?.[1]) {
        return match[1];
      }

      // Handle /s/song/ pattern: /s/song/[lang]/[album]/[title]/[id]
      match = url.match(
        /(?:jiosaavn\.com|saavn\.com)\/s\/song\/[^/]+\/[^/]+\/[^/]+\/([^/?&#]+)/
      );
      if (match?.[1]) {
        return match[1];
      }
    },
    album: (url: string) => {
      // Handle /album/ pattern: /album/[title]/[id]
      let match = url.match(
        /(?:jiosaavn\.com|saavn\.com)\/album\/[^/]+\/([^/?&#]+)/
      );
      if (match?.[1]) {
        return match[1];
      }

      // Handle /p/album/ pattern: /p/album/[lang]/[title]/[id]
      match = url.match(
        /(?:jiosaavn\.com|saavn\.com)\/p\/album\/[^/]+\/[^/]+\/([^/?&#]+)/
      );
      if (match?.[1]) {
        return match[1];
      }

      return null;
    },
    artist: (url: string) => {
      // Handle /artist/ pattern: /artist/[name]/[id]
      let match = url.match(
        /(?:jiosaavn\.com|saavn\.com)\/artist\/[^/]+\/([^/?&#]+)/
      );
      if (match?.[1]) {
        return match[1];
      }

      // Handle /s/artist/ pattern: /s/artist/[name]/[id]
      match = url.match(
        /(?:jiosaavn\.com|saavn\.com)\/s\/artist\/[^/]+\/([^/?&#]+)/
      );
      if (match?.[1]) {
        return match[1];
      }
    },
    playlist: (url: string) => {
      // Handle /featured/ pattern: /featured/[title]/[id]
      let match = url.match(
        /(?:jiosaavn\.com|saavn\.com)\/featured\/[^/]+\/([^/?&#]+)/
      );
      if (match?.[1]) {
        return match[1];
      }

      // Handle /s/featured/ pattern: /s/featured/[lang]/[title]/[id]
      match = url.match(
        /(?:jiosaavn\.com|saavn\.com)\/s\/featured\/[^/]+\/[^/]+\/([^/?&#]+)/
      );
      if (match?.[1]) {
        return match[1];
      }

      // Handle /s/playlist/ pattern: /s/playlist/[id1]/[lang]/[id2] - extract the final ID
      match = url.match(
        /(?:jiosaavn\.com|saavn\.com)\/s\/playlist\/[^/]+\/[^/]+\/([^/?&#]+)/
      );
      if (match?.[1]) {
        return match[1];
      }
    },
  };
}
