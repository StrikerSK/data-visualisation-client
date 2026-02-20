const path = require('path');
const express = require('express');

const app = express();
const publicPath = path.join(__dirname, '..', 'dist');
const port = process.env.PORT || 3000;

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

app.listen(port, () => {
  console.log(`\n🚀 PID Graphs production server is running!`);
  console.log(`📡 Port: ${port}`);
  console.log(`📂 Path: ${publicPath}\n`);
});
