import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { logger } from 'hono/logger'
import { prettyJSON } from 'hono/pretty-json'
import { HTTPException } from 'hono/http-exception'



const app = new Hono()

app.use('*', cors())
app.use('*', logger())
app.use('*', prettyJSON())

app.get('/', (c) => {
  return c.text('Hello Hono!')
})
const api = new JioSaavnAPI()

app.get('/search', async (c) => {
  const query = c.req.query('q')
  if (!query) return c.json({ error: 'Missing query' })
  const results = await api.search(encodeURIComponent(query))
  return c.json(results)
})

app.get('/track', async (c) => {
  const url = c.req.query('url')
  const trackID = c.req.query('id')
  if (trackID) {
    const track = await api.getTrackById(trackID)
    return c.json(track)
  }
  if (!url) return c.json({ error: 'Missing URL' })
  const id = api.extract.track(url)
  if (!id) return c.json({ error: 'Invalid URL' })
  const track = await api.getTrack(id)
  return c.json(track)
})

app.get('/album', async (c) => {
  const url = c.req.query('url')
  if (!url) return c.json({ error: 'Missing URL' })
  const id = api.extract.album(url)
  if (!id) return c.json({ error: 'Invalid URL' })
  const album = await api.getAlbum(id)
  return c.json(album)
})

app.get('/artist', async (c) => {
  const url = c.req.query('url')
  if (!url) return c.json({ error: 'Missing URL' })
  const id = api.extract.artist(url)
  if (!id) return c.json({ error: 'Invalid URL' })
  const artist = await api.getArtist(id)
  return c.json(artist)
})

app.get('/playlist', async (c) => {
  const url = c.req.query('url')
  const limit = Number(c.req.query('limit')) || 100
  if (!url) return c.json({ error: 'Missing URL' })
  const id = api.extract.playlist(url)
  if (!id) return c.json({ error: 'Invalid URL' })
  const playlist = await api.getPlaylist(id, limit)
  return c.json(playlist)
})

app.get('/recommendations', async (c) => {
  const id = c.req.query('id')
  const limit = Number(c.req.query('limit')) || 10
  if (!id) return c.json({ error: 'Missing ' })
  const recommendations = await api.getRecommendations(id, limit)
  return c.json(recommendations)
})

class JioSaavnAPI {

  private async request<T>({
    url,
  }: {
    url: string;
  }): Promise<{ data: T; ok: Response['ok'] }> {
    const response = await fetch(url)
    const data = await response.json()

    return { data: data as T, ok: response.ok }
  }

  async search(query: string): Promise<any> {
    const { data } = await this.request<any>({
      url: `https://www.jiosaavn.com/api.php?__call=search.getResults&api_version=4&_format=json&_marker=0&cc=in&ctx=web6dot0&includeMetaTags=1&q=${query}`
    })
    if (!data) throw new HTTPException(404, { message: `no results found for ${query}` })
    if (!data.results?.length) return new HTTPException(404, { message: 'No results found' })
    const results = data.results.map((track: any) => this.formatTrack(track))
    return {
      results
    }
  }

  async getTrackById(id: string): Promise<any> {
    const { data } = await this.request<any>({ url: `https://www.jiosaavn.com/api.php?__call=song.getDetails&api_version=4&_format=json&_marker=0&ctx=web6dot0&pids=${id}` })
    if (!data) throw new HTTPException(404, { message: 'Track not found' })
    const track = this.formatTrack(data.songs[0])
    return {
      track
    }
  }

  async getTrack(id: string): Promise<any> {
    const { data } = await this.request<any>({
      url: `https://www.jiosaavn.com/api.php?__call=webapi.get&api_version=4&_format=json&_marker=0&ctx=web6dot0&token=${id}&type=song`
    })
    if (!data.songs?.length) throw new HTTPException(404, { message: 'Track not found' })
    const track = this.formatTrack(data.songs[0])
    return {
      track: track
    }
  }

  async getAlbum(id: string): Promise<any> {
    const { data } = await this.request<any>({ url: `https://www.jiosaavn.com/api.php?__call=webapi.get&api_version=4&_format=json&_marker=0&ctx=web6dot0&token=${id}&type=album` })
    if (!data) throw new HTTPException(404, { message: 'album not found' })
    const album = this.formatAlbum(data)
    return {
      album
    }
  }

  async getArtist(id: string): Promise<any> {
    const { data } = await this.request<any>({ url: `https://www.jiosaavn.com/api.php?__call=webapi.get&api_version=4&_format=json&_marker=0&ctx=web6dot0&token=${id}&type=artist` })
    if (!data) throw new HTTPException(404, { message: 'artist not found' })
    const artist = this.formatArtist(data)
    return {
      artist
    }
  }

  async getPlaylist(id: string, limit = 100): Promise<any> {
    const { data } = await this.request<any>({ url: `https://www.jiosaavn.com/api.php?__call=webapi.get&api_version=4&_format=json&_marker=0&ctx=web6dot0&token=${id}&type=playlist&n=${limit}` })
    if (!data) throw new HTTPException(404, { message: 'playlist not found' })
    const playlist = this.formatPlaylist(data)
    return {
      playlist
    }
  }

  async getRecommendations(id: string, limit = 10): Promise<any> {
    const stationId = await this.getStation(id)
    if (!stationId) return null
    const { data, ok } = await this.request<any>({ url: `https://www.jiosaavn.com/api.php?__call=webradio.getSong&api_version=4&_format=json&_marker=0&ctx=android&stationid=${stationId}&k=${limit}` })
    if (!data || !ok) {
      throw new HTTPException(404, { message: "no suggestions found for the given song" })
    }

    const tracks: any[] = []
    for (const key in data) {
      // biome-ignore lint/suspicious/noPrototypeBuiltins: <explanation>
      if (data.hasOwnProperty(key) && data[key].song) {
        tracks.push(this.formatTrack(data[key].song))
      }
    }
    return {
      tracks
    }
  }

  private async getStation(identifier: string): Promise<any> {
    const encodedSongId = JSON.stringify([encodeURIComponent(identifier)])
    const { data, ok } = await this.request<any>({ url: `https://www.jiosaavn.com/api.php?__call=webradio.createEntityStation&api_version=4&_format=json&_marker=0&ctx=android&entity_id=${encodedSongId}&entity_type=queue` })
    if (!data || !ok || !data.stationid) return new Error('Invalid station id')
    return data.stationid
  }

  private formatTrack(track: any) {

    const data = {
      identifier: track.id,
      title: track.title,
      length: Number(track.more_info.duration) * 1000,
      uri: track.perma_url,
      artworkUrl: track.image.replace('150x150', '500x500'),
      author: null,
      encryptedMediaUrl: null,
      albumUrl: null,
      artistUrl: null,
      albumName: null,
      artistArtworkUrl: null,
    }
    if (track?.more_info.artistMap?.primary_artists?.length) {
      data.author = track.more_info.artistMap.primary_artists[0].name
    }

    if (track?.more_info.encrypted_media_url) {
      data.encryptedMediaUrl = track.more_info.encrypted_media_url
    }

    if (track.more_info.album_url) {
      data.albumUrl = track.more_info.album_url
    }

    if (track.more_info.artistMap.primary_artists[0].perma_url) {
      data.artistUrl = track.more_info.artistMap.primary_artists[0].perma_url
    }

    if (track.more_info.artistMap.primary_artists[0].image) {
      data.artistArtworkUrl = track.more_info.artistMap.primary_artists[0].image.replace('150x150', '500x500')
    }

    if (track.more_info.album) {
      data.albumName = track.more_info.album
    }

    return data
  }

  private formatAlbum(album: any) {
    return {
      id: album.id,
      name: album.title,
      uri: album.perma_url,
      artworkUrl: album.image.replace('150x150', '500x500'),
      author: album.subtitle,
      tracks: album.list.map((song: any) => this.formatTrack(song)),
      totalSongs: album.list_count,
    }
  }

  private formatArtist(artist: any): any {
    return {
      name: artist.name,
      uri: artist.urls.overview,
      artworkUrl: artist.image.replace('150x150', '500x500'),
      tracks: artist.topSongs.map((song: any) => this.formatTrack(song))
    }
  }

  private formatPlaylist(playlist: any): any {
    return {
      title: playlist.title,
      uri: playlist.perma_url,
      artworkUrl: playlist.image.replace('150x150', '500x500'),
      tracks: playlist.list.map((song: any) => this.formatTrack(song)),
      totalSongs: playlist.list_count,
    }
  }

  extract = {
    track: (url: string) => {
      const match = url.match(/jiosaavn\.com\/song\/[^/]+\/([^/]+)$/)
      if (match?.[1]) {
        return match[1]
      }
    },
    album: (url: string) => {
      const match = url.match(/jiosaavn\.com\/album\/[^/]+\/([^/]+)$/)
      if (match?.[1]) {
        return match[1]
      }
    },
    artist: (url: string) => {
      const match = url.match(/jiosaavn\.com\/artist\/[^/]+\/([^/]+)$/)
      if (match?.[1]) {
        return match[1]
      }
    },
    playlist: (url: string) => {
      const match = url.match(/(?:jiosaavn\.com|saavn\.com)\/(?:featured|s\/playlist)\/[^/]+\/([^/]+)$|\/([^/]+)$/)
      if (match?.[1]) {
        return match[1]
      }
    }
  }
}

Deno.serve(app.fetch)
