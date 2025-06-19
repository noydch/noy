import fs from 'node:fs/promises'
import express from 'express'
import path from 'path'

// Constants
const isProduction = process.env.NODE_ENV === 'production'
const port = process.env.PORT || 5173
const base = process.env.BASE || '/'

// Cached production assets
const clientDistPath = path.join(process.cwd(), 'dist/client')
const serverDistPath = path.join(process.cwd(), 'dist/server')

const templateHtml = isProduction
    ? await fs.readFile(path.join(clientDistPath, 'index.html'), 'utf-8')
    : ''

// Create http server
const app = express()

// Add Vite or respective production middlewares
/** @type {import('vite').ViteDevServer | undefined} */
let vite
if (!isProduction) {
    const { createServer } = await import('vite')
    vite = await createServer({
        server: { middlewareMode: true },
        appType: 'custom',
        base,
    })
    app.use(vite.middlewares)
} else {
    const compression = (await import('compression')).default
    const sirv = (await import('sirv')).default
    app.use(compression())
    app.use(base, sirv(clientDistPath, { extensions: [] }))
}

// Serve HTML
app.get('*', async (req, res) => {
    try {
        const url = req.originalUrl.replace(base, '')

        /** @type {string} */
        let template
        /** @type {import('./src/entry-server.ts').render} */
        let render
        if (!isProduction) {
            // Always read fresh template in development
            template = await fs.readFile(path.join(process.cwd(), 'index.html'), 'utf-8')
            render = (await import(path.join(process.cwd(), 'src/entry-server.tsx'))).render
        } else {
            template = templateHtml
            render = (await import(path.join(serverDistPath, 'entry-server.js'))).render
        }

        const rendered = await render(url)

        const html = template
            .replace(`<!--app-head-->`, rendered.head ?? '')
            .replace(`<!--app-html-->`, rendered.html ?? '')

        res.status(200).set({ 'Content-Type': 'text/html' }).send(html)
    } catch (e) {
        console.error('SSR Function Error:', e)
        res.status(500).end('Server Error: ' + e.message + '\n' + e.stack)
    }
})

// Vercel Serverless Function ต้อง export default app
export default app
