import { Hono } from "hono";
import { handle } from "@hono/node-server/vercel";
import { cors } from "hono/cors";
import { logger } from "hono/logger";
import { prettyJSON } from "hono/pretty-json";
import { JioSaavnAPI } from "./jioSaavn.js";

export const config = {
	api: {
		bodyParser: false,
	},
};

const app = new Hono().basePath("/api");

app.get("/", (c) => {
	return c.json({
		message: "JioSaavn API by Appujet",
	});
});

app.use("*", cors());
app.use("*", logger());
app.use("*", prettyJSON());

const api = new JioSaavnAPI();

app.get("/search", async (c) => {
	const query = c.req.query("q");
	if (!query) return c.json({ error: "Missing query" });
	try {
		const results = await api.search(query);
		return c.json(results);
	} catch (error: any) {
		console.error("Error:", error); // Log the error
		return c.json({ error: "Failed to fetch results", details: error.message });
	}
});

app.get("/track", async (c) => {
	const url = c.req.query("url");
	const trackID = c.req.query("id");
	if (trackID) {
		const track = await api.getTrackById(trackID);
		return c.json(track);
	}
	if (!url) return c.json({ error: "Missing URL" });
	const id = api.extract.track(url);
	if (!id) return c.json({ error: "Invalid URL" });
	const track = await api.getTrack(id);
	return c.json(track);
});

app.get("/album", async (c) => {
	const url = c.req.query("url")
	const albumID = c.req.query("id");
	if (albumID) {
		const album = await api.getAlbum(albumID);
		return c.json(album);
	}
	if (!url) return c.json({ error: "Missing URL" });
	const id = api.extract.album(url);
	if (!id) return c.json({ error: "Invalid URL" });
	const album = await api.getAlbum(id);
	return c.json(album);
});

app.get("/artist", async (c) => {
	const url = c.req.query("url");
	const artistID = c.req.query("id");
	if (artistID) {
		const artist = await api.getArtist(artistID);
		return c.json(artist);
	}
	if (!url) return c.json({ error: "Missing URL" });
	const id = api.extract.artist(url);
	if (!id) return c.json({ error: "Invalid URL" });
	const artist = await api.getArtist(id);
	return c.json(artist);
});

app.get("/playlist", async (c) => {
	const url = c.req.query("url");
	const limit = Number(c.req.query("limit")) || 100;
	const playlistID = c.req.query("id");
	if (playlistID) {
		const playlist = await api.getPlaylist(playlistID, limit);
		return c.json(playlist);
	}
	if (!url) return c.json({ error: "Missing URL" });
	const id = api.extract.playlist(url);
	if (!id) return c.json({ error: "Invalid URL" });
	const playlist = await api.getPlaylist(id, limit);
	return c.json(playlist);
});

app.get("/recommendations", async (c) => {
	const id = c.req.query("id");
	const limit = Number(c.req.query("limit")) || 10;
	if (!id) return c.json({ error: "Missing " });
	const recommendations = await api.getRecommendations(id, limit);
	return c.json(recommendations);
});
app.get("/encrypted-media-url", async (c) => {
	const url = c.req.query("url");
	if (!url) return c.json({ error: "Missing URL" });
	const authToken = await api.getEncryptedMediaUrl(url);
	return c.json(authToken);
});


export default handle(app);
