import { Endpoints, EndpointValue } from "./types";
import { HTTPException } from 'hono/http-exception'


export class JioSaavnAPI {

    private async request<T>({
        endpoint,
        params,
        context
    }: {
        endpoint: EndpointValue
        params: Record<string, string | number>
        context?: 'android' | 'web6dot0'
    }): Promise<{ data: T; ok: Response['ok'] }> {
        const url = new URL('https://www.jiosaavn.com/api.php')

        url.searchParams.append('__call', endpoint.toString())
        url.searchParams.append('_format', 'json')
        url.searchParams.append('_marker', '0')
        url.searchParams.append('api_version', '4')
        url.searchParams.append('ctx', context || 'web6dot0')

        Object.keys(params).forEach((key) => url.searchParams.append(key, String(params[key])))

        const response = await fetch(url.toString())
        const data = await response.json()

        return { data: data as T, ok: response.ok }
    }

    async search(query: string): Promise<any> {
        const { data } = await this.request<any>({
            endpoint: Endpoints.search.songs,
            params: {
                q: query,
                includeMetaTags: '1',
                cc: 'in'
            }
        })
        if (!data) throw new HTTPException(404, { message: `no results found for ${query}` })
        if (!data.results?.length) return new HTTPException(404, { message: 'No results found' })
        const results = data.results.map((track: any) => this.formatTrack(track))
        return {
            results
        }
    }
    
    async getTrackById(id: string): Promise<any> {
        const { data } = await this.request<any>({
            endpoint: Endpoints.songs.id,
            params: {
                pids: id,
            }
        })
        if (!data) throw new HTTPException(404, { message: 'Track not found' })
        const track = await this.formatTrack(data.songs[0])
        return {
            track
        }
    }
    async getTrack(id: string): Promise<any> {
        const { data } = await this.request<any>({
            endpoint: Endpoints.songs.link,
            params: {
                token: id,
                type: 'song'
            }
        })
        if (!data.songs?.length) throw new HTTPException(404, { message: 'Track not found' })
        const track = await this.formatTrack(data.songs[0])

        return {
            track: track
        }
    }

    async getAlbum(id: string): Promise<any> {
        const { data } = await this.request<any>({
            endpoint: Endpoints.albums.link,
            params: {
                token: id,
                type: 'album'
            }
        })
        if (!data) throw new HTTPException(404, { message: 'album not found' })
        const album = this.formatAlbum(data)
        return {
            album
        }
    }

    async getArtist(id: string): Promise<any> {
        const { data } = await this.request<any>({
            endpoint: Endpoints.artists.link,
            params: {
                token: id,
                type: 'artist'
            }
        })
        if (!data) throw new HTTPException(404, { message: 'artist not found' })
        const artist = this.formatArtist(data)
        return {
            artist
        }
    }

    async getPlaylist(id: string, limit = 100): Promise<any> {
        const { data } = await this.request<any>({
            endpoint: Endpoints.playlists.link,
            params: {
                token: id,
                type: 'playlist',
                n: limit,
            }
        })
        if (!data) throw new HTTPException(404, { message: 'playlist not found' })
        const playlist = this.formatPlaylist(data)
        return {
            playlist
        }
    }

    async getRecommendations(id: string, limit = 10): Promise<any> {
        const stationId = await this.getStation(id)
        if (!stationId) return null
        const { data, ok } = await this.request<any>({
            endpoint: Endpoints.songs.suggestions,
            params: {
                stationid: stationId,
                k: limit,
            },
            context: "android"
        })
        if (!data || !ok) {
            throw new HTTPException(404, { message: `no suggestions found for the given song` })
        }

        const tracks: any[] = []
        for (const key in data) {
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
        const { data, ok } = await this.request<any>({
            endpoint: Endpoints.songs.station,
            params: {
                entity_id: encodedSongId,
                entity_type: 'queue'
            },
            context: "android"
        })
        if (!data || !ok || !data.stationid) return new Error('Invalid station id')
        return data.stationid
    }

    private formatTrack(track: any) {

        const data: any = {
            identifier: track.id,
            title: track.title,
            duration: Number(track.more_info.duration) * 1000,
            uri: track.perma_url,
            artworkUrl: track.image.replace('150x150', '500x500'),
        }
        if (track.more_info?.artistMap?.primary_artists?.length) {
            data.artist = track.more_info.artistMap.primary_artists[0].name
        }
        if (track.more_info?.encrypted_media_url) {
           data.encryptedMediaUrl = track.more_info.encrypted_media_url
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
            songs: album.list.map((song: any) => this.formatTrack(song))
        }
    }

    private formatArtist(artist: any): any {
        return {
            name: artist.name,
            uri: artist.urls.overview,
            artworkUrl: artist.image.replace('150x150', '500x500'),
            songs: artist.topSongs.map((song: any) => this.formatTrack(song))
        }
    }

    private formatPlaylist(playlist: any): any {
        return {
            title: playlist.title,
            uri: playlist.perma_url,
            artworkUrl: playlist.image.replace('150x150', '500x500'),
            songs: playlist.list.map((song: any) => this.formatTrack(song)),
            totalSongs: playlist.list_count,
        }
    }

    extract = {
        track: (url: string) => {
            const match = url.match(/jiosaavn\.com\/song\/[^/]+\/([^/]+)$/)
            if (match && match[1]) {
                return match[1]
            }
        },
        album: (url: string) => {
            const match = url.match(/jiosaavn\.com\/album\/[^/]+\/([^/]+)$/)
            if (match && match[1]) {
                return match[1]
            }
        },
        artist: (url: string) => {
            const match = url.match(/jiosaavn\.com\/artist\/[^/]+\/([^/]+)$/)
            if (match && match[1]) {
                return match[1]
            }
        },
        playlist: (url: string) => {
            const match = url.match(/(?:jiosaavn\.com|saavn\.com)\/(?:featured|s\/playlist)\/[^/]+\/([^/]+)$|\/([^/]+)$/)
            if (match && match[1]) {
                return match[1]
            }
        }
    }
}

