const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

// Health check endpoint for Railway (before static files)
app.get('/health', (req, res) => {
  res.status(200).json({ 
    status: 'ok', 
    message: 'Weather Prediction & Portfolio server is running',
    timestamp: new Date().toISOString(),
    routes: {
      main: '/',
      intro: '/intro.html',
      map: '/index.html',
      hourly: '/hourly.html',
      hourly24: '/hourly_24.html',
      portfolio: '/portfolio'
    }
  });
});

// Route for portfolio pages - serve PORTFOLIO/index.html at /portfolio
app.get('/portfolio', (req, res) => {
  const portfolioIndex = path.join(__dirname, 'PORTFOLIO', 'index.html');
  if (fs.existsSync(portfolioIndex)) {
    res.sendFile(portfolioIndex);
  } else {
    res.status(404).send('Portfolio index.html not found');
  }
});

// Route for portfolio sub-pages (e.g., /portfolio/summary, /portfolio/projects, etc.)
app.get('/portfolio/:page', (req, res) => {
  const page = req.params.page;
  const validPortfolioPages = ['index', 'summary', 'projects', 'experience', 'skills', 'education', 'certs', 'contact'];
  
  if (validPortfolioPages.includes(page)) {
    const filePath = path.join(__dirname, 'PORTFOLIO', `${page}.html`);
    if (fs.existsSync(filePath)) {
      res.sendFile(filePath);
    } else {
      res.status(404).send(`Portfolio page ${page}.html not found`);
    }
  } else {
    res.status(404).send('Portfolio page not found');
  }
});

// Route for root - serve intro.html as the entry point
app.get('/', (req, res) => {
  const introPath = path.join(__dirname, 'intro.html');
  if (fs.existsSync(introPath)) {
    res.sendFile(introPath);
  } else {
    res.status(404).send('intro.html not found');
  }
});

// Route for weather prediction pages (intro.html, hourly.html, hourly_24.html)
app.get('/intro.html', (req, res) => {
  const filePath = path.join(__dirname, 'intro.html');
  if (fs.existsSync(filePath)) {
    res.sendFile(filePath);
  } else {
    res.status(404).send('intro.html not found');
  }
});

app.get('/hourly.html', (req, res) => {
  const filePath = path.join(__dirname, 'hourly.html');
  if (fs.existsSync(filePath)) {
    res.sendFile(filePath);
  } else {
    res.status(404).send('hourly.html not found');
  }
});

app.get('/hourly_24.html', (req, res) => {
  const filePath = path.join(__dirname, 'hourly_24.html');
  if (fs.existsSync(filePath)) {
    res.sendFile(filePath);
  } else {
    res.status(404).send('hourly_24.html not found');
  }
});

// Serve static files from root directory (index.html, intro.html, hourly.html, hourly_24.html, three.min.js, data/, FORECAST/, HOURLY/, pdf/, etc.)
app.use(express.static(path.join(__dirname)));

// Serve PORTFOLIO directory at /portfolio route (for assets like images, CSS, JS)
app.use('/portfolio', express.static(path.join(__dirname, 'PORTFOLIO')));

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Server error:', err);
  res.status(500).send('Internal Server Error');
});

// Start server
app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Weather Prediction & Portfolio server running on port ${PORT}`);
  console.log(`📁 Root directory: ${__dirname}`);
  console.log(`🌐 Main app (Intro): http://localhost:${PORT}/`);
  console.log(`🗺️  Map View: http://localhost:${PORT}/index.html`);
  console.log(`📊 Portfolio: http://localhost:${PORT}/portfolio`);
  console.log(`📂 Data folders: data/, FORECAST/, HOURLY/, pdf/`);
  console.log(`✅ Server ready!`);
});
