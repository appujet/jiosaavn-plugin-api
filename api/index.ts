import { Hono } from "hono";
import { cors } from "hono/cors";
import { logger } from "hono/logger";
import { prettyJSON } from "hono/pretty-json";
import { JioSaavnAPI } from "./jioSaavn";

export const config = {
	api: {
		bodyParser: false,
	},
};

const app = new Hono();

app.use("*", cors());
app.use("*", logger());
app.use("*", prettyJSON());

const api = new JioSaavnAPI();

const endpointsDoc = {
	name: "JioSaavn API",
	author: "notdeltaxd",
	repository: "https://github.com/notdeltaxd/jiosaavn-plugin-api",
	license: "AGPL-3.0-or-later",
	endpoints: {
		search: "GET /api/search?q=<query>",
		track: "GET /api/track?id=<id> OR /api/track?url=<jiosaavn_url>",
		album: "GET /api/album?id=<id> OR /api/album?url=<jiosaavn_url>",
		artist: "GET /api/artist?id=<id> OR /api/artist?url=<jiosaavn_url>",
		playlist:
			"GET /api/playlist?id=<id>&limit=100 OR /api/playlist?url=<jiosaavn_url>",
		recommendations: "GET /api/recommendations?id=<track_id>&limit=10",
		mediaUrl:
			"GET /api/media-url?id=<track_id> OR /api/media-url?url=<jiosaavn_url>",
	},
};

// Root documentation routes
app.get("/", (c) => c.json(endpointsDoc));

const apiRouter = new Hono();

apiRouter.get("/", (c) => c.json(endpointsDoc));

apiRouter.get("/search", async (c) => {
	const query = c.req.query("q");
	if (!query) {
		return c.json({ error: "Missing query parameter 'q'" }, 400);
	}
	try {
		const results = await api.search(query);
		return c.json(results);
	} catch (error: any) {
		console.error("Error in /api/search:", error);
		return c.json(
			{ error: "Failed to fetch results", details: error.message },
			error.status || 500,
		);
	}
});

apiRouter.get("/track", async (c) => {
	const url = c.req.query("url");
	const trackID = c.req.query("id");

	try {
		if (trackID) {
			const track = await api.getTrackById(trackID);
			return c.json(track);
		}
		if (!url) {
			return c.json({ error: "Missing 'url' or 'id' query parameter" }, 400);
		}
		const id = api.extract.track(url);
		if (!id) {
			return c.json({ error: "Invalid JioSaavn track URL" }, 400);
		}
		const track = await api.getTrack(id);
		return c.json(track);
	} catch (error: any) {
		console.error("Error in /api/track:", error);
		return c.json(
			{ error: "Failed to fetch track", details: error.message },
			error.status || 500,
		);
	}
});

apiRouter.get("/album", async (c) => {
	const url = c.req.query("url");
	const albumID = c.req.query("id");

	try {
		if (albumID) {
			const album = await api.getAlbum(albumID);
			return c.json(album);
		}
		if (!url) {
			return c.json({ error: "Missing 'url' or 'id' query parameter" }, 400);
		}
		const id = api.extract.album(url);
		if (!id) {
			return c.json({ error: "Invalid JioSaavn album URL" }, 400);
		}
		const album = await api.getAlbum(id);
		return c.json(album);
	} catch (error: any) {
		console.error("Error in /api/album:", error);
		return c.json(
			{ error: "Failed to fetch album", details: error.message },
			error.status || 500,
		);
	}
});

apiRouter.get("/artist", async (c) => {
	const url = c.req.query("url");
	const artistID = c.req.query("id");

	try {
		if (artistID) {
			const artist = await api.getArtist(artistID);
			return c.json(artist);
		}
		if (!url) {
			return c.json({ error: "Missing 'url' or 'id' query parameter" }, 400);
		}
		const id = api.extract.artist(url);
		if (!id) {
			return c.json({ error: "Invalid JioSaavn artist URL" }, 400);
		}
		const artist = await api.getArtist(id);
		return c.json(artist);
	} catch (error: any) {
		console.error("Error in /api/artist:", error);
		return c.json(
			{ error: "Failed to fetch artist", details: error.message },
			error.status || 500,
		);
	}
});

apiRouter.get("/playlist", async (c) => {
	const url = c.req.query("url");
	const playlistID = c.req.query("id");
	const limit = Number(c.req.query("limit")) || 100;

	try {
		if (playlistID) {
			const playlist = await api.getPlaylist(playlistID, limit);
			return c.json(playlist);
		}
		if (!url) {
			return c.json({ error: "Missing 'url' or 'id' query parameter" }, 400);
		}
		const id = api.extract.playlist(url);
		if (!id) {
			return c.json({ error: "Invalid JioSaavn playlist URL" }, 400);
		}
		const playlist = await api.getPlaylist(id, limit);
		return c.json(playlist);
	} catch (error: any) {
		console.error("Error in /api/playlist:", error);
		return c.json(
			{ error: "Failed to fetch playlist", details: error.message },
			error.status || 500,
		);
	}
});

apiRouter.get("/recommendations", async (c) => {
	const id = c.req.query("id");
	const limit = Number(c.req.query("limit")) || 10;

	if (!id) {
		return c.json({ error: "Missing 'id' query parameter" }, 400);
	}

	try {
		const recommendations = await api.getRecommendations(id, limit);
		return c.json(recommendations);
	} catch (error: any) {
		console.error("Error in /api/recommendations:", error);
		return c.json(
			{ error: "Failed to fetch recommendations", details: error.message },
			error.status || 500,
		);
	}
});

apiRouter.get("/media-url", async (c) => {
	const url = c.req.query("url");
	const trackID = c.req.query("id");

	if (!url && !trackID) {
		return c.json({ error: "Missing 'url' or 'id' query parameter" }, 400);
	}

	try {
		let encryptedMediaUrl: string | null = null;

		if (trackID) {
			const track = await api.getTrackById(trackID);
			encryptedMediaUrl = track.track?.encryptedMediaUrl;
		} else {
			const id = api.extract.track(url as string);
			if (!id) {
				return c.json({ error: "Invalid JioSaavn track URL" }, 400);
			}
			const track = await api.getTrack(id);
			encryptedMediaUrl = track.track?.encryptedMediaUrl;
		}

		if (!encryptedMediaUrl) {
			return c.json({ error: "No encrypted media URL found" }, 404);
		}

		const decryptedUrl = api.decryptMediaUrl(encryptedMediaUrl);
		if (!decryptedUrl) {
			return c.json({ error: "Failed to decrypt media URL" }, 500);
		}

		return c.json({ mediaUrl: decryptedUrl });
	} catch (error: any) {
		console.error("Error in /api/media-url:", error);
		return c.json(
			{ error: "Failed to fetch media URL", details: error.message },
			error.status || 500,
		);
	}
});

app.route("/api", apiRouter);

export { app };

const port = Number(process.env.PORT) || 3000;

if (typeof Bun !== "undefined" && import.meta.main) {
	console.log(`🚀 JioSaavn API server running at http://localhost:${port}`);
}

export default {
	port,
	fetch: app.fetch,
};
