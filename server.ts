import { Application, Router } from 'https://deno.land/x/oak/mod.ts'
import router from './routes/index.ts'
const app = new Application()

const env = Deno.env.toObject()
const HOST = env.HOST || '127.0.0.1'
const PORT = env.PORT || 8000

app.use(router.routes())
app.use(router.allowedMethods())

console.log('server running on port '+PORT)
await app.listen(`${HOST}:${PORT}`)

/** 
 * Diamsyah M Dida
 * latihan membuat restful api
 * dengan deno
*/