import { HTTPException } from "hono/http-exception";
import forge from "node-forge";

export class JioSaavnAPI {
	private async request<T>({
		url,
	}: {
		url: string;
	}): Promise<{ data: T; ok: boolean }> {
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
				const data = (await response.json()) as T;
				return { data, ok: response.ok };
			} catch (error) {
				console.error("JSON parsing error:", error);
				throw new HTTPException(500, {
					message: "Invalid JSON response from JioSaavn API",
				});
			}
		} else {
			const text = await response.text();
			try {
				const data = JSON.parse(text) as T;
				return { data, ok: response.ok };
			} catch {
				throw new HTTPException(500, {
					message: "Failed to parse response from JioSaavn API",
				});
			}
		}
	}

	async search(query: string): Promise<any> {
		const { data } = await this.request<any>({
			url: `https://www.jiosaavn.com/api.php?__call=search.getResults&api_version=4&_format=json&_marker=0&cc=in&ctx=web6dot0&includeMetaTags=1&q=${encodeURIComponent(
				query,
			)}`,
		});

		if (!data) {
			throw new HTTPException(404, {
				message: `No results found for ${query}`,
			});
		}

		const rawResults = data.results ?? [];
		const results = rawResults.map((track: any) => this.formatTrack(track));
		return {
			results,
		};
	}

	async getTrackById(id: string): Promise<any> {
		// 1. Try fetching by song PID (song.getDetails)
		try {
			const { data } = await this.request<any>({
				url: `https://www.jiosaavn.com/api.php?__call=song.getDetails&api_version=4&_format=json&_marker=0&ctx=web6dot0&pids=${encodeURIComponent(
					id,
				)}`,
			});
			if (data?.songs && Array.isArray(data.songs) && data.songs.length > 0) {
				const track = this.formatTrack(data.songs[0]);
				return { track };
			}
		} catch {
			// Fallback to token lookup below
		}

		// 2. Fallback: try fetching by token (webapi.get)
		return this.getTrack(id);
	}

	async getTrack(id: string): Promise<any> {
		// 1. Try fetching by perma token (webapi.get)
		try {
			const { data } = await this.request<any>({
				url: `https://www.jiosaavn.com/api.php?__call=webapi.get&api_version=4&_format=json&_marker=0&ctx=web6dot0&token=${encodeURIComponent(
					id,
				)}&type=song`,
			});
			if (data?.songs && Array.isArray(data.songs) && data.songs.length > 0) {
				const track = this.formatTrack(data.songs[0]);
				return { track };
			}
		} catch {
			// Fallback to PID lookup below
		}

		// 2. Fallback: try fetching by PID (song.getDetails)
		try {
			const { data } = await this.request<any>({
				url: `https://www.jiosaavn.com/api.php?__call=song.getDetails&api_version=4&_format=json&_marker=0&ctx=web6dot0&pids=${encodeURIComponent(
					id,
				)}`,
			});
			if (data?.songs && Array.isArray(data.songs) && data.songs.length > 0) {
				const track = this.formatTrack(data.songs[0]);
				return { track };
			}
		} catch {
			// Throw 404 below
		}

		throw new HTTPException(404, { message: "Track not found" });
	}

	async getAlbum(id: string): Promise<any> {
		// 1. Try fetching by token (webapi.get)
		try {
			const { data } = await this.request<any>({
				url: `https://www.jiosaavn.com/api.php?__call=webapi.get&api_version=4&_format=json&_marker=0&ctx=web6dot0&token=${encodeURIComponent(
					id,
				)}&type=album`,
			});
			if (data && (data.id || data.title) && data.list) {
				const album = this.formatAlbum(data);
				return { album };
			}
		} catch {
			// Fallback below
		}

		// 2. Fallback: try fetching by album ID (content.getAlbumDetails)
		try {
			const { data } = await this.request<any>({
				url: `https://www.jiosaavn.com/api.php?__call=content.getAlbumDetails&api_version=4&_format=json&_marker=0&ctx=web6dot0&albumid=${encodeURIComponent(
					id,
				)}`,
			});
			if (data && (data.id || data.title)) {
				const album = this.formatAlbum(data);
				return { album };
			}
		} catch {
			// Throw 404 below
		}

		throw new HTTPException(404, { message: "Album not found" });
	}

	async getArtist(id: string): Promise<any> {
		// 1. Try fetching by token (webapi.get)
		try {
			const { data } = await this.request<any>({
				url: `https://www.jiosaavn.com/api.php?__call=webapi.get&api_version=4&_format=json&_marker=0&ctx=web6dot0&token=${encodeURIComponent(
					id,
				)}&type=artist&n_song=50`,
			});
			if (data && (data.artistId || data.name)) {
				const artist = this.formatArtist(data);
				return { artist };
			}
		} catch {
			// Fallback below
		}

		// 2. Fallback: try fetching by artist ID (artist.getArtistPageDetails)
		try {
			const { data } = await this.request<any>({
				url: `https://www.jiosaavn.com/api.php?__call=artist.getArtistPageDetails&api_version=4&_format=json&_marker=0&ctx=web6dot0&artistId=${encodeURIComponent(
					id,
				)}&n_song=50`,
			});
			if (data && (data.artistId || data.name)) {
				const artist = this.formatArtist(data);
				return { artist };
			}
		} catch {
			// Throw 404 below
		}

		throw new HTTPException(404, { message: "Artist not found" });
	}

	async getPlaylist(id: string, limit = 100): Promise<any> {
		// 1. Try fetching by token (webapi.get)
		try {
			const { data } = await this.request<any>({
				url: `https://www.jiosaavn.com/api.php?__call=webapi.get&api_version=4&_format=json&_marker=0&ctx=web6dot0&token=${encodeURIComponent(
					id,
				)}&type=playlist&n=${limit}`,
			});
			if (data && (data.id || data.title || data.list)) {
				const playlist = this.formatPlaylist(data);
				return { playlist };
			}
		} catch {
			// Fallback below
		}

		// 2. Fallback: try fetching by playlist ID (playlist.getDetails)
		try {
			const { data } = await this.request<any>({
				url: `https://www.jiosaavn.com/api.php?__call=playlist.getDetails&api_version=4&_format=json&_marker=0&ctx=web6dot0&listid=${encodeURIComponent(
					id,
				)}&n=${limit}`,
			});
			if (data && (data.id || data.title || data.list)) {
				const playlist = this.formatPlaylist(data);
				return { playlist };
			}
		} catch {
			// Throw 404 below
		}

		throw new HTTPException(404, { message: "Playlist not found" });
	}

	async getRecommendations(id: string, limit = 10): Promise<any> {
		const stationId = await this.getStation(id);
		if (!stationId) return null;
		const { data, ok } = await this.request<any>({
			url: `https://www.jiosaavn.com/api.php?__call=webradio.getSong&api_version=4&_format=json&_marker=0&ctx=android&stationid=${encodeURIComponent(
				stationId,
			)}&k=${limit}`,
		});
		if (!data || !ok) {
			throw new HTTPException(404, {
				message: "No suggestions found for the given song",
			});
		}

		const tracks: any[] = [];
		for (const key in data) {
			if (Object.prototype.hasOwnProperty.call(data, key) && data[key]?.song) {
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
			url: `https://www.jiosaavn.com/api.php?__call=webradio.createEntityStation&api_version=4&_format=json&_marker=0&ctx=android&entity_id=${encodeURIComponent(
				encodedSongId,
			)}&entity_type=queue`,
		});
		if (!data || !ok || !data.stationid) return null;
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
				forge.util.createBuffer(key),
			);
			decipher.start({ iv: forge.util.createBuffer(iv) });
			decipher.update(forge.util.createBuffer(encrypted));
			decipher.finish();

			const decryptedLink = decipher.output.getBytes();

			// Replace _96 with _320 for 320kbps quality
			return decryptedLink.replace("_96", "_320");
		} catch (e: any) {
			console.error(`Error decrypting media URL: ${e?.message}`);
			return null;
		}
	}

	private formatTrack(track: any) {
		if (!track) return null;

		const data: any = {
			identifier: track.id,
			title: track.title,
			length: track.more_info?.duration
				? Number(track.more_info.duration) * 1000
				: null,
			uri: track.perma_url ?? null,
			artworkUrl: track.image
				? track.image.replace("150x150", "500x500")
				: null,
			author: null,
			encryptedMediaUrl: track.more_info?.encrypted_media_url ?? null,
			albumUrl: track.more_info?.album_url ?? null,
			artistUrl: null,
			albumName: track.more_info?.album ?? null,
			artistArtworkUrl: null,
			previewUrl:
				track.more_info?.media_preview_url ?? track.more_info?.vlink ?? null,
		};

		const artists =
			track.more_info?.artistMap?.primary_artists ??
			track.more_info?.artistMap?.artists ??
			[];

		if (Array.isArray(artists) && artists.length > 0) {
			const uniqueArtists = [
				...new Map(artists.map((a: any) => [a.id, a])).values(),
			];
			data.author = uniqueArtists
				.map((a: any) => a.name)
				.filter(Boolean)
				.join(", ");
		}

		const primaryArtist = track.more_info?.artistMap?.primary_artists?.[0];
		if (primaryArtist) {
			if (primaryArtist.perma_url) {
				data.artistUrl = primaryArtist.perma_url;
			}
			if (primaryArtist.image) {
				data.artistArtworkUrl = primaryArtist.image.replace(
					"150x150",
					"500x500",
				);
			}
		}

		return data;
	}

	private formatAlbum(album: any) {
		return {
			id: album.id,
			name: album.title,
			uri: album.perma_url,
			artworkUrl: album.image
				? album.image.replace("150x150", "500x500")
				: null,
			author: album.subtitle,
			tracks: Array.isArray(album.list)
				? album.list.map((song: any) => this.formatTrack(song))
				: [],
			totalSongs: album.list_count ?? album.list?.length ?? 0,
		};
	}

	private formatArtist(artist: any): any {
		return {
			name: artist.name,
			uri: artist.urls?.overview ?? null,
			artworkUrl: artist.image
				? artist.image.replace("150x150", "500x500")
				: null,
			tracks: Array.isArray(artist.topSongs)
				? artist.topSongs.map((song: any) => this.formatTrack(song))
				: [],
		};
	}

	private formatPlaylist(playlist: any): any {
		return {
			title: playlist.title,
			uri: playlist.perma_url,
			artworkUrl: playlist.image
				? playlist.image.replace("150x150", "500x500")
				: null,
			tracks: Array.isArray(playlist.list)
				? playlist.list.map((song: any) => this.formatTrack(song))
				: [],
			totalSongs: playlist.list_count ?? playlist.list?.length ?? 0,
		};
	}

	extract = {
		track: (url: string) => {
			// Handle /song/ pattern: /song/[title]/[id]
			let match = url.match(
				/(?:jiosaavn\.com|saavn\.com)\/song\/[^/]+\/([^/?&#]+)/,
			);
			if (match?.[1]) {
				return match[1];
			}

			// Handle /s/song/ pattern: /s/song/[lang]/[album]/[title]/[id]
			match = url.match(
				/(?:jiosaavn\.com|saavn\.com)\/s\/song\/[^/]+\/[^/]+\/[^/]+\/([^/?&#]+)/,
			);
			if (match?.[1]) {
				return match[1];
			}

			return null;
		},
		album: (url: string) => {
			// Handle /album/ pattern: /album/[title]/[id]
			let match = url.match(
				/(?:jiosaavn\.com|saavn\.com)\/album\/[^/]+\/([^/?&#]+)/,
			);
			if (match?.[1]) {
				return match[1];
			}

			// Handle /p/album/ pattern: /p/album/[lang]/[title]/[id]
			match = url.match(
				/(?:jiosaavn\.com|saavn\.com)\/p\/album\/[^/]+\/[^/]+\/([^/?&#]+)/,
			);
			if (match?.[1]) {
				return match[1];
			}

			return null;
		},
		artist: (url: string) => {
			// Handle /artist/ pattern: /artist/[name]/[id]
			let match = url.match(
				/(?:jiosaavn\.com|saavn\.com)\/artist\/[^/]+\/([^/?&#]+)/,
			);
			if (match?.[1]) {
				return match[1];
			}

			// Handle /s/artist/ pattern: /s/artist/[name]/[id]
			match = url.match(
				/(?:jiosaavn\.com|saavn\.com)\/s\/artist\/[^/]+\/([^/?&#]+)/,
			);
			if (match?.[1]) {
				return match[1];
			}

			return null;
		},
		playlist: (url: string) => {
			// Handle /featured/ pattern: /featured/[title]/[id]
			let match = url.match(
				/(?:jiosaavn\.com|saavn\.com)\/featured\/[^/]+\/([^/?&#]+)/,
			);
			if (match?.[1]) {
				return match[1];
			}

			// Handle /s/featured/ pattern: /s/featured/[lang]/[title]/[id]
			match = url.match(
				/(?:jiosaavn\.com|saavn\.com)\/s\/featured\/[^/]+\/[^/]+\/([^/?&#]+)/,
			);
			if (match?.[1]) {
				return match[1];
			}

			// Handle /s/playlist/ pattern: /s/playlist/[id1]/[lang]/[id2] - extract the final ID
			match = url.match(
				/(?:jiosaavn\.com|saavn\.com)\/s\/playlist\/[^/]+\/[^/]+\/([^/?&#]+)/,
			);
			if (match?.[1]) {
				return match[1];
			}

			return null;
		},
	};
}
