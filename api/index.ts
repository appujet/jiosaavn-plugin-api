import { Hono } from 'hono'
import { handle } from 'hono/vercel'
import { JioSaavnAPI } from './jioSaavn'

export const config = {
  runtime: 'edge'
}

const app = new Hono().basePath('/api')

const api = new JioSaavnAPI()

app.get('/', (c) => {
  return c.json({ message: 'Hello Hono!' })
})

app.get('/search/:query', async (c) => {
  const query = c.req.param('query')
  const results = await api.search(query)
  return c.json(results)
})

app.get('/track/id/:id', async (c) => {
  const id = c.req.param('id')
   const track = await api.getTrackById(id)
   return c.json(track)
})

app.get('/track/:url', async (c) => {
  const url = c.req.param('url')
  const track = await api.getTrack(url)
  return c.json(track)
})

app.get('/album/:url', async (c) => {
  const url = c.req.param('url')
  const album = await api.getAlbum(url)
  return c.json(album)
})

app.get('/artist/:url', async (c) => {
  const url = c.req.param('url')
  const artist = await api.getArtist(url)
  return c.json(artist)
})

app.get('/playlist/:url', async (c) => {
  const url = c.req.param('url')
  const playlist = await api.getPlaylist(url)
  return c.json(playlist)
})

app.get('/recommendations/:url', async (c) => {
  const url = c.req.param('url')
  const recommendations = await api.getRecommendations(url)
  return c.json(recommendations)
})


export default handle(app)
