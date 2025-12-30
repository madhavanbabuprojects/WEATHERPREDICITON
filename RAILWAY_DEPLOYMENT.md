# Railway Deployment Guide

## ✅ Files Created for Railway

1. **server.js** - Express server that serves your Weather Prediction project and Portfolio
2. **package.json** - Node.js dependencies and start script
3. **railway.json** - Railway configuration
4. **Procfile** - Process file for Railway

## 🚀 Railway Setup Steps

### Step 1: Configure Port in Railway
1. Go to your Railway dashboard
2. Click on your service "WEATHERPREDICITON"
3. Go to **Settings** tab
4. Under **Public Networking** → **Generate Service Domain**
5. **IMPORTANT**: Set the port to match Railway's PORT environment variable (usually 3000 or auto-assigned)
6. Click **Generate Domain**

### Step 2: Verify Environment Variables
Railway automatically provides:
- `PORT` - The port your app should listen on (server uses `process.env.PORT`)

### Step 3: Deploy
Railway will automatically:
1. Detect `package.json`
2. Run `npm install` to install Express
3. Run `npm start` to start the server
4. Your Weather Prediction project will be live at your Railway domain!

## 📁 What Gets Served

### Main Application (Weather Prediction):
- **Root URL (`/`)** → Serves `intro.html` (Introduction page - Entry point)
- **`/index.html`** → Weather Prediction Globe/Map
- **`/intro.html`** → Introduction page
- **`/hourly.html`** → 100-Day weather forecast
- **`/hourly_24.html`** → 24-hour weather forecast
- **`/three.min.js`** → Three.js library
- **`/data/`** → CSV data files (hourly, Pennsylvania forecasts)
- **`/FORECAST/`** → Forecast CSV files for all cities
- **`/HOURLY/`** → Hourly CSV files
- **`/pdf/`** → PDF forecast reports

### Portfolio (Accessible at `/portfolio`):
- **`/portfolio`** → Portfolio homepage
- **`/portfolio/summary`** → Professional summary
- **`/portfolio/projects`** → Projects page
- **`/portfolio/experience`** → Experience page
- **`/portfolio/skills`** → Skills page
- **`/portfolio/education`** → Education page
- **`/portfolio/certs`** → Certifications page
- **`/portfolio/contact`** → Contact page
- **`/portfolio/images/`** → Portfolio images

## 🔍 Troubleshooting

If you see "Application failed to respond":
1. Check Railway **Logs** tab for errors
2. Make sure port is set correctly (server uses `process.env.PORT` automatically)
3. Verify `package.json` has Express dependency
4. Check that `server.js` exists in root directory
5. Verify all data folders (data/, FORECAST/, HOURLY/, pdf/) are present

## ✨ Your Application Will Be Live At:
`https://weatherprediciton-production.up.railway.app` (or your custom domain)

### Available Routes:
- Main App (Intro): `https://weatherprediciton-production.up.railway.app/`
- Map View: `https://weatherprediciton-production.up.railway.app/index.html`
- 100-Day Forecast: `https://weatherprediciton-production.up.railway.app/hourly.html`
- 24-Hour Forecast: `https://weatherprediciton-production.up.railway.app/hourly_24.html`
- Portfolio: `https://weatherprediciton-production.up.railway.app/portfolio`
- Health Check: `https://weatherprediciton-production.up.railway.app/health`

---

**Note**: Railway automatically redeploys when you push to GitHub!

