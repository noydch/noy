import fs from 'node:fs/promises'
import path from 'node:path'
import express from 'express'

const isProduction = process.env.NODE_ENV === 'production'
const base = process.env.BASE || '/'

const templateHtml = isProduction
    ? await fs.readFile(path.resolve(process.cwd(), 'dist/client/index.html'), 'utf-8')
    : ''

const app = express()

if (isProduction) {
    const compression = (await import('compression')).default
    const sirv = (await import('sirv')).default
    app.use(compression())
    app.use(base, sirv(path.resolve(process.cwd(), 'dist/client'), { extensions: [] }))
}

app.use('*', async (req, res) => {
    try {
        const url = req.originalUrl.replace(base, '')

        let template = templateHtml
        const entryServerPath = path.resolve(process.cwd(), 'dist/server/entry-server.js')
        const { render } = await import(entryServerPath)

        const rendered = await render(url)
        const html = template
            .replace(`<!--app-head-->`, rendered.head ?? '')
            .replace(`<!--app-html-->`, rendered.html ?? '')

        res.status(200).set({ 'Content-Type': 'text/html' }).send(html)
    } catch (e) {
        console.error('SSR Error:', e)
        res.status(500).end(e.stack)
    }
})

export default app