const express = require('express');
const expressStaticGzip = require('express-static-gzip');
const path = require('path');

const app = express();

// Enable gzip compression for server responses
app.use(expressStaticGzip(path.join(__dirname, 'dist', 'lazy-import'), {
  enableBrotli: true, // Enable Brotli compression
  orderPreference: ['br', 'gz'], // Compression preference order (Brotli will be preferred if available)
  setHeaders: (res) => {
    // Set correct Content-Encoding and Content-Type headers
    res.setHeader('Cache-Control', 'public, max-age=31536000');
  },
}));

// Start the server on port 8080
const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
