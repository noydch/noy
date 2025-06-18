const path = require('path');
const fs = require('fs');
const { render } = require('../dist/server/entry-server'); // ปรับ path ตามจริง

module.exports = async (req, res) => {
  const url = req.url;

  // โหลด template index.html
  const template = fs.readFileSync(
    path.resolve(__dirname, '../dist/client/index.html'),
    'utf-8'
  );

  // render SSR
  const appHtml = await render(url);

  const html = template.replace(`<!--app-html-->`, appHtml);

  res.setHeader('Content-Type', 'text/html');
  res.status(200).end(html);
};