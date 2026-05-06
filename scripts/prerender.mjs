import { chromium } from "playwright-chromium";
import { createServer } from "http";
import { promises as fs } from "fs";
import path from "path";
import url from "url";

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const distDir = path.join(__dirname, "..", "dist");
const host = "127.0.0.1";
const port = process.env.PRERENDER_PORT ? Number(process.env.PRERENDER_PORT) : 4173;

const server = createServer(async (req, res) => {
  try {
    const requestUrl = new URL(req.url || "/", `http://${host}:${port}`);
    let pathname = requestUrl.pathname;
    if (pathname === "/") pathname = "/index.html";

    const resolvedPath = path.join(distDir, pathname);
    if (!resolvedPath.startsWith(distDir)) {
      res.writeHead(403, { "Content-Type": "text/plain" });
      res.end("Forbidden");
      return;
    }

    const data = await fs.readFile(resolvedPath);
    res.writeHead(200, {
      "Content-Type": getContentType(path.extname(resolvedPath)),
    });
    res.end(data);
  } catch {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Not found");
  }
});

await new Promise((resolve, reject) => {
  server.on("error", reject);
  server.listen(port, host, resolve);
});

const browser = await chromium.launch();
try {
  const page = await browser.newPage();
  await page.goto(`http://${host}:${port}/`, {
    waitUntil: "networkidle",
  });

  const html = await page.content();
  await fs.writeFile(path.join(distDir, "index.html"), html, "utf8");
  console.log("Prerender complete: dist/index.html updated.");
} finally {
  await browser.close();
  server.close();
}

function getContentType(ext) {
  switch (ext.toLowerCase()) {
    case ".html":
      return "text/html; charset=utf-8";
    case ".js":
      return "application/javascript; charset=utf-8";
    case ".css":
      return "text/css; charset=utf-8";
    case ".json":
      return "application/json; charset=utf-8";
    case ".svg":
      return "image/svg+xml";
    case ".png":
      return "image/png";
    case ".jpg":
    case ".jpeg":
      return "image/jpeg";
    case ".webp":
      return "image/webp";
    case ".ico":
      return "image/x-icon";
    default:
      return "application/octet-stream";
  }
}
