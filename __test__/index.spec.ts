import { describe, expect, it } from "bun:test";
import { app } from "../api/index";
import { JioSaavnAPI } from "../api/jioSaavn";

const jioSaavn = new JioSaavnAPI();

describe("JioSaavnAPI SDK", () => {
	it("should fetch search results", async () => {
		const query = "Arijit Singh";
		const results = await jioSaavn.search(query);
		expect(results).toBeDefined();
		expect(results.results).toBeDefined();
		expect(Array.isArray(results.results)).toBe(true);
	});

	it("should fetch track details", async () => {
		const url = "https://www.jiosaavn.com/song/chunaree/BQ8NUBsEXV0";
		const id = jioSaavn.extract.track(url);
		if (!id) {
			throw new Error("Invalid track URL");
		}
		const track = await jioSaavn.getTrack(id);
		expect(track).toBeDefined();
		expect(track.track).toBeDefined();
		expect(track.track.title).toBeDefined();
	});

	it("should fetch album details", async () => {
		const url =
			"https://www.jiosaavn.com/album/vicky-vidya-ka-woh-wala-video/3yP-E54eExY_";
		const id = jioSaavn.extract.album(url);
		if (!id) {
			throw new Error("Invalid album URL");
		}
		const album = await jioSaavn.getAlbum(id);
		expect(album).toBeDefined();
		expect(album.album).toBeDefined();
		expect(Array.isArray(album.album.tracks)).toBe(true);
	});

	it("should fetch artist details", async () => {
		const url =
			"https://www.jiosaavn.com/artist/priya-saraiya-songs/DhHUFwiOfxE_";
		const id = jioSaavn.extract.artist(url);
		if (!id) {
			throw new Error("Invalid artist URL");
		}
		const artist = await jioSaavn.getArtist(id);
		expect(artist).toBeDefined();
		expect(artist.artist).toBeDefined();
	});

	it("should fetch playlist details", async () => {
		const url =
			"https://www.jiosaavn.com/featured/best-of-romance-hindi/SBKnUgjNeMIwkg5tVhI3fw__";
		const id = jioSaavn.extract.playlist(url);
		if (!id) {
			throw new Error("Invalid playlist URL");
		}
		const playlist = await jioSaavn.getPlaylist(id);
		expect(playlist).toBeDefined();
		expect(playlist.playlist).toBeDefined();
	});

	it("should fetch radio / recommendation details", async () => {
		const id = "ugfao4jn";
		const radio = await jioSaavn.getRecommendations(id);
		expect(radio).toBeDefined();
		expect(radio.tracks).toBeDefined();
	});

	it("should fetch song details by id", async () => {
		const id = "S0U546YS";
		const song = await jioSaavn.getTrackById(id);
		expect(song).toBeDefined();
		expect(song.track).toBeDefined();
	});

	it("should decrypt media url when encryptedMediaUrl is present", async () => {
		const song = await jioSaavn.getTrackById("S0U546YS");
		if (song.track?.encryptedMediaUrl) {
			const mediaUrl = jioSaavn.decryptMediaUrl(song.track.encryptedMediaUrl);
			expect(mediaUrl).toBeDefined();
			expect(typeof mediaUrl).toBe("string");
			expect(mediaUrl).toContain(".mp4");
		}
	});
});

describe("Hono HTTP API Endpoints", () => {
	it("GET / should return endpoints documentation", async () => {
		const res = await app.request("/");
		expect(res.status).toBe(200);
		const data = (await res.json()) as any;
		expect(data.endpoints).toBeDefined();
	});

	it("GET /api/search should return 400 when query is missing", async () => {
		const res = await app.request("/api/search");
		expect(res.status).toBe(400);
	});

	it("GET /api/search?q=kesariya should return results", async () => {
		const res = await app.request("/api/search?q=kesariya");
		expect(res.status).toBe(200);
		const data = (await res.json()) as any;
		expect(data.results).toBeDefined();
	});

	it("GET /api/track?id=S0U546YS should return track", async () => {
		const res = await app.request("/api/track?id=S0U546YS");
		expect(res.status).toBe(200);
		const data = (await res.json()) as any;
		expect(data.track).toBeDefined();
	});

	it("GET /api/media-url?id=S0U546YS should return decrypted media url", async () => {
		const res = await app.request("/api/media-url?id=S0U546YS");
		expect(res.status).toBe(200);
		const data = (await res.json()) as any;
		expect(data.mediaUrl).toBeDefined();
		expect(typeof data.mediaUrl).toBe("string");
	});

	it("GET /api/media-url?id=EkVGdQFBD3c should resolve token ID and return decrypted media url", async () => {
		const res = await app.request("/api/media-url?id=EkVGdQFBD3c");
		expect(res.status).toBe(200);
		const data = (await res.json()) as any;
		expect(data.mediaUrl).toBeDefined();
		expect(typeof data.mediaUrl).toBe("string");
		expect(data.mediaUrl).toContain(".mp4");
	});

	it("GET /api/track?id=EkVGdQFBD3c should resolve token ID and return track", async () => {
		const res = await app.request("/api/track?id=EkVGdQFBD3c");
		expect(res.status).toBe(200);
		const data = (await res.json()) as any;
		expect(data.track).toBeDefined();
		expect(data.track.title).toBe("Barsaat");
	});
});
