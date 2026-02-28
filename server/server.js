const path = require('path');
const express = require('express');
const detect = require('detect-port');

const app = express();
const publicPath = path.join(__dirname, '..', 'dist');
const defaultPort = process.env.PORT || 3000;

// Serve static files from the build directory
app.use(express.static(publicPath));

// Basic health check endpoint
app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

// Support for Single Page Application (SPA) routing
app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

// Detect available port and start server
detect(defaultPort, (err, port) => {
  if (err) {
    console.error('Failed to detect port:', err);
  }

  if (defaultPort != port) {
    console.warn(`⚠️  Port ${defaultPort} was busy, using available port ${port} instead.`);
  }

  app.listen(port, () => {
    console.log(`\n🚀 PID Graphs production server is running!`);
    console.log(`📡 URL: http://localhost:${port}`);
    console.log(`📂 Path: ${publicPath}\n`);
  });
});
