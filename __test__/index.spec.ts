import { JioSaavnAPI } from "../api/jioSaavn";
import { describe, it, expect } from 'vitest';

const jioSaavn = new JioSaavnAPI();

describe('JioSaavnAPI', () => {
    it('should fetch search results', async () => {
        
        const query = 'Arijit Singh';
        const results = await jioSaavn.search(query);
        //console.log(results);
        expect(results).toBeDefined();
        expect(results.results).toBeDefined();

    });
    it('should fetch track details', async () => {
        const url = 'https://www.jiosaavn.com/song/chunaree/BQ8NUBsEXV0';
        const id = jioSaavn.extract.track(url);
        if (!id) {
            throw new Error('Invalid track URL');
        }
        const track = await jioSaavn.getTrack(id);
        //console.log(track);
        expect(track).toBeDefined();
        expect(track.track).toBeDefined();
    });
    it('should fetch album details', async () => {
        const url = 'https://www.jiosaavn.com/album/vicky-vidya-ka-woh-wala-video/3yP-E54eExY_';
        const id = jioSaavn.extract.album(url);
        if (!id) {
            throw new Error('Invalid track URL');
        }
        const album = await jioSaavn.getAlbum(id);
        //console.log(album);
        expect(album).toBeDefined();
        expect(album.album).toBeDefined();
        expect(Array.isArray(album.album.tracks)).toBe(true);
    });
    it('should fetch artist details', async () => {

        const url = 'https://www.jiosaavn.com/artist/priya-saraiya-songs/DhHUFwiOfxE_';
        const id = jioSaavn.extract.artist(url);
        if (!id) {
            throw new Error('Invalid track URL');
        }
        const artist = await jioSaavn.getArtist(id);
        expect(artist).toBeDefined();
        expect(artist.artist).toBeDefined();
        //console.log(artist);
    });
    it('should fetch playlist details', async () => {
        const url = 'https://www.jiosaavn.com/featured/best-of-romance-hindi/SBKnUgjNeMIwkg5tVhI3fw__';
        const id = jioSaavn.extract.playlist(url);
        if (!id) {
            throw new Error('Invalid track URL');
        }
        const playlist = await jioSaavn.getPlaylist(id);
        //console.log(playlist);
        expect(playlist).toBeDefined();
        expect(playlist.playlist).toBeDefined();
    });
    //ugfao4jn
    it('should fetch radio details', async () => {
        const id = 'ugfao4jn';
        const radio = await jioSaavn.getRecommendations(id);
        //console.log(radio);
        expect(radio).toBeDefined();
        expect(radio.tracks).toBeDefined();
    });
    //S0U546YS
    it('should fetch song details', async () => {
        const id = 'S0U546YS';
        const song = await jioSaavn.getTrackById(id);
        //console.log(song);
        expect(song).toBeDefined();
        expect(song.track).toBeDefined();
    });
});