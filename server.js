const http = require("node:http");

const port = Number(process.env.PORT || 3000);

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
  res.end(`<!doctype html>
<html lang="fr">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Hello World</title>
  <style>
    body { margin:0; min-height:100vh; display:grid; place-items:center;
      background:#f4f6fb; color:#182033; font:16px system-ui,sans-serif; }
    main { text-align:center; background:white; padding:48px 36px;
      border-radius:20px; box-shadow:0 12px 40px #18203312; }
    h1 { margin:0 0 12px; font-size:clamp(32px,7vw,52px); }
    p { margin:0; color:#596579; }
    .ok { display:inline-block; margin-top:24px; padding:8px 14px;
      border-radius:99px; background:#e2f8e9; color:#176b36; }
  </style>
</head>
<body>
  <main>
    <h1>Hello World! 👋</h1>
    <p>Mon application fonctionne sur cPanel AI App Hosting.</p>
    <span class="ok">✓ Serveur Node.js actif</span>
  </main>
</body>
</html>`);
});

server.listen(port, "0.0.0.0", () => {
  console.log(`Hello World app listening on port ${port}`);
});
