const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from PORTFOLIO directory
app.use(express.static(path.join(__dirname, 'PORTFOLIO')));

// Serve other static files (weather prediction files, etc.)
app.use(express.static(path.join(__dirname)));

// Route for root - serve PORTFOLIO index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'PORTFOLIO', 'index.html'));
});

// Route for PORTFOLIO pages
app.get('/portfolio', (req, res) => {
  res.sendFile(path.join(__dirname, 'PORTFOLIO', 'index.html'));
});

// Route for other portfolio pages
app.get('/portfolio/:page', (req, res) => {
  const page = req.params.page;
  const filePath = path.join(__dirname, 'PORTFOLIO', `${page}.html`);
  res.sendFile(filePath);
});

// Health check endpoint for Railway
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok', message: 'Portfolio server is running' });
});

// Start server
app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Portfolio server running on port ${PORT}`);
  console.log(`📁 Serving files from: ${__dirname}`);
  console.log(`🌐 Access at: http://localhost:${PORT}`);
});

