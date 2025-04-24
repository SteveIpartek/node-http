const http = require('http');
const pageInfo = require('./data');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');

  const htmlResponse = `
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>${pageInfo.title}</title>
    </head>
    <body>
      <header>
        <h1>${pageInfo.title}</h1>
        <h2>${pageInfo.subtitle}</h2>
      </header>
      <main>
        <p>${pageInfo.description}</p>
        <p>Autor: ${pageInfo.author}</p>
        <p>Fecha de creación: ${pageInfo.creationDate}</p>
      </main>
      <footer>
        <p>&copy; 2025 Mi Sitio Web</p>
      </footer>
    </body>
    </html>
  `;

  res.end(htmlResponse);
});

server.listen(port, hostname, () => {
  console.log(`server listening on port http://${hostname}:${port}/`);
});