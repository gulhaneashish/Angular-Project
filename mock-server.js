const http = require('http');

const server = http.createServer((req, res) => {

  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  // Handle browser preflight request
  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

  if (req.method === 'POST' && req.url === '/login') {

    let body = '';

    req.on('data', chunk => {
      body += chunk;
    });

    req.on('end', () => {

      const { email, password } = JSON.parse(body);

      if (
        email === 'admin@example.com' &&
        password === 'admin123'
      ) {

        res.writeHead(200, {
          'Content-Type': 'application/json'
        });

        res.end(JSON.stringify({
          token: 'mock-jwt-admin-token',
          role: 'admin'
        }));

        return;
      }

      if (
        email === 'user@example.com' &&
        password === 'user123'
      ) {

        res.writeHead(200, {
          'Content-Type': 'application/json'
        });

        res.end(JSON.stringify({
          token: 'mock-jwt-user-token',
          role: 'user'
        }));

        return;
      }

      res.writeHead(401, {
        'Content-Type': 'application/json'
      });

      res.end(JSON.stringify({
        message: 'Invalid email or password'
      }));
    });

    return;
  }
if (req.method === 'GET' && req.url === '/profile') {

  const authHeader = req.headers.authorization;

  res.writeHead(200, {
    'Content-Type': 'application/json'
  });

  res.end(JSON.stringify({
    message: 'Profile API called',
    authorizationHeader: authHeader || null
  }));

  return;
}
  res.writeHead(404);
  res.end();
});

server.listen(3000, () => {
  console.log('Mock API running on http://localhost:3000');
});