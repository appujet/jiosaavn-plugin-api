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

export default handle(app)
