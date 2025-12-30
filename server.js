const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from PORTFOLIO directory (CSS, JS, images, PDFs)
app.use('/images', express.static(path.join(__dirname, 'PORTFOLIO', 'images')));
app.use(express.static(path.join(__dirname, 'PORTFOLIO')));

// Serve other static files (weather prediction files, etc.) if needed
app.use(express.static(path.join(__dirname)));

// Route for root - serve PORTFOLIO index.html
app.get('/', (req, res) => {
  const indexPath = path.join(__dirname, 'PORTFOLIO', 'index.html');
  if (fs.existsSync(indexPath)) {
    res.sendFile(indexPath);
  } else {
    res.status(404).send('Portfolio index.html not found');
  }
});

// Route for all portfolio HTML pages
app.get('/:page', (req, res) => {
  const page = req.params.page;
  // List of valid portfolio pages
  const validPages = ['index', 'summary', 'projects', 'experience', 'skills', 'education', 'certs', 'contact'];
  
  if (validPages.includes(page)) {
    const filePath = path.join(__dirname, 'PORTFOLIO', `${page}.html`);
    if (fs.existsSync(filePath)) {
      res.sendFile(filePath);
    } else {
      res.status(404).send(`Page ${page}.html not found`);
    }
  } else {
    // Try to serve as static file
    res.status(404).send('Page not found');
  }
});

// Health check endpoint for Railway
app.get('/health', (req, res) => {
  res.status(200).json({ 
    status: 'ok', 
    message: 'Portfolio server is running',
    timestamp: new Date().toISOString()
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Server error:', err);
  res.status(500).send('Internal Server Error');
});

// Start server
app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Portfolio server running on port ${PORT}`);
  console.log(`📁 Serving files from: ${__dirname}`);
  console.log(`📂 Portfolio directory: ${path.join(__dirname, 'PORTFOLIO')}`);
  console.log(`🌐 Access at: http://localhost:${PORT}`);
  console.log(`✅ Server ready to serve your portfolio!`);
});

