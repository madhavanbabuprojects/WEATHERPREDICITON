# Railway Deployment Guide

## ✅ Files Created for Railway

1. **server.js** - Express server that serves your portfolio
2. **package.json** - Node.js dependencies and start script
3. **railway.json** - Railway configuration
4. **Procfile** - Process file for Railway

## 🚀 Railway Setup Steps

### Step 1: Configure Port in Railway
1. Go to your Railway dashboard
2. Click on your service "WEATHERPREDICITON"
3. Go to **Settings** tab
4. Under **Public Networking** → **Generate Service Domain**
5. **IMPORTANT**: Set the port to **3000** (or leave it as default if Railway auto-detects)
6. Click **Generate Domain**

### Step 2: Verify Environment Variables
Railway automatically provides:
- `PORT` - The port your app should listen on (usually 3000 or Railway assigns it)

### Step 3: Deploy
Railway will automatically:
1. Detect `package.json`
2. Run `npm install` to install Express
3. Run `npm start` to start the server
4. Your portfolio will be live at your Railway domain!

## 📁 What Gets Served

- **Root URL (`/`)** → Serves `PORTFOLIO/index.html` (Your portfolio homepage)
- **All PORTFOLIO files** → Accessible via their paths (e.g., `/index.html`, `/summary.html`, etc.)
- **All images and assets** → Automatically served from `PORTFOLIO/images/`

## 🔍 Troubleshooting

If you see "Application failed to respond":
1. Check Railway **Logs** tab for errors
2. Make sure port is set correctly (should be 3000 or Railway's assigned PORT)
3. Verify `package.json` has Express dependency
4. Check that `server.js` exists in root directory

## ✨ Your Portfolio Will Be Live At:
`https://weatherprediciton-production.up.railway.app` (or your custom domain)

---

**Note**: Railway automatically redeploys when you push to GitHub!

