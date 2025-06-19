import fs from 'node:fs/promises'
import path from 'node:path'
import express from 'express'

const isProduction = process.env.NODE_ENV === 'production'
const base = process.env.BASE || '/'

// Cached production assets
const templateHtml = isProduction
    ? await fs.readFile(path.resolve('dist/client/index.html'), 'utf-8')
    : ''

const app = express()

if (isProduction) {
    const compression = (await import('compression')).default
    const sirv = (await import('sirv')).default
    app.use(compression())
    app.use(base, sirv('dist/client', { extensions: [] }))
}

// Serve HTML
app.use('*', async (req, res) => {
    try {
        const url = req.originalUrl.replace(base, '')

        let template
        let render
        if (!isProduction) {
            template = await fs.readFile('index.html', 'utf-8')
            // dev mode: ไม่ต้องใช้ vite ใน production
            render = (await import('../src/entry-server.tsx')).render
        } else {
            template = templateHtml
            render = (await import('../dist/server/entry-server.js')).render
        }

        const rendered = await render(url)

        const html = template
            .replace(`<!--app-head-->`, rendered.head ?? '')
            .replace(`<!--app-html-->`, rendered.html ?? '')

        res.status(200).set({ 'Content-Type': 'text/html' }).send(html)
    } catch (e) {
        console.error(e.stack)
        res.status(500).end(e.stack)
    }
})

export default app 