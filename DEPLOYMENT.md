# Deployment Guide - Railway

## Prerequisites

1. GitHub account
2. Railway account (sign up at railway.app)
3. Sanity account with project created (see SANITY_SETUP.md)

## Step 1: Prepare Your Repository

1. Initialize git (if not already done):
```bash
git init
git add .
git commit -m "Initial commit with Sanity CMS integration"
```

2. Create a GitHub repository and push:
```bash
git remote add origin <your-github-repo-url>
git branch -M main
git push -u origin main
```

## Step 2: Deploy to Railway

1. Go to [railway.app](https://railway.app/) and log in
2. Click "New Project"
3. Select "Deploy from GitHub repo"
4. Choose your red-cell-therapy repository
5. Railway will auto-detect the Vite configuration

## Step 3: Configure Environment Variables

In Railway project settings, add these environment variables:

```
VITE_SANITY_PROJECT_ID=<your-sanity-project-id>
VITE_SANITY_DATASET=production
VITE_SANITY_API_VERSION=2024-01-01
```

To find your Sanity Project ID:
- Go to sanity.io/manage
- Select your project
- Copy the Project ID

## Step 4: Configure Build Settings

Railway should auto-detect these, but verify:

- **Build Command**: `npm run build`
- **Start Command**: `npm run preview`
- **Install Command**: `npm install`

## Step 5: Deploy

1. Railway will automatically deploy after configuration
2. Wait for the build to complete (2-5 minutes)
3. Once deployed, you'll get a URL like: `red-cell-therapy-production.up.railway.app`

## Step 6: Custom Domain (Optional)

### Using Railway's provided domain:
- Your app will be available at: `<project-name>.up.railway.app`

### Using your own domain:
1. In Railway project settings, go to "Settings" → "Domains"
2. Click "Add Custom Domain"
3. Enter your domain name
4. Add the CNAME record to your DNS provider:
   - Name: `@` or `www`
   - Value: `<provided by Railway>`

## Automatic Deployments

Railway automatically deploys when you push to your main branch:

```bash
git add .
git commit -m "Update content"
git push
```

## Monitoring

- View logs in Railway dashboard
- Monitor build status
- Check deployment history

## Troubleshooting

### Build fails:
- Check environment variables are set correctly
- Verify package.json scripts are correct
- Check Railway build logs

### Can't fetch Sanity data:
- Verify VITE_SANITY_PROJECT_ID is correct
- Check Sanity project is in "production" dataset
- Ensure CORS is configured in Sanity (see below)

### CORS Configuration in Sanity:
1. Go to sanity.io/manage
2. Select your project
3. Go to "API" settings
4. Add your Railway URL to "CORS Origins"
5. Add `http://localhost:5173` for local development

## Local Development with Railway Environment

To test with production environment variables locally:

```bash
# Install Railway CLI
npm install -g @railway/cli

# Link to your project
railway link

# Run with Railway environment
railway run npm run dev
```

## Need Help?

- Railway Docs: https://docs.railway.app/
- Railway Discord: https://discord.gg/railway
