# Sanity CMS Setup Guide

## Step 1: Create a Sanity Project

1. Go to [sanity.io](https://www.sanity.io/) and sign up/login
2. Create a new project called "Red Cell Therapy"
3. Choose "Production" as the dataset name
4. Note down your Project ID

## Step 2: Install Sanity Studio

```bash
# In a separate terminal, from the project root
cd studio
npm create sanity@latest
```

When prompted:
- Project name: Red Cell Therapy
- Use existing project: YES (select the one you just created)
- Dataset: production
- Output path: current directory
- Template: Clean project

## Step 3: Copy the Schema Files

Copy all files from `sanity-schemas/` folder to `studio/schemas/` folder.

## Step 4: Update studio/sanity.config.ts

Replace the schemas import with:

```typescript
import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemas'

export default defineConfig({
  name: 'default',
  title: 'Red Cell Therapy',
  projectId: 'YOUR_PROJECT_ID',
  dataset: 'production',
  plugins: [structureTool(), visionTool()],
  schema: {
    types: schemaTypes,
  },
})
```

## Step 5: Run Sanity Studio Locally

```bash
cd studio
npm run dev
```

This will start Sanity Studio at http://localhost:3333

## Step 6: Configure Environment Variables

1. Copy `.env.example` to `.env`
2. Add your Sanity Project ID:

```
VITE_SANITY_PROJECT_ID=your_actual_project_id
VITE_SANITY_DATASET=production
VITE_SANITY_API_VERSION=2024-01-01
```

## Step 7: Deploy to Railway

### Deploy the Frontend (React App):
1. Push your code to GitHub
2. In Railway, create a new project
3. Connect your GitHub repo
4. Add environment variables from `.env`
5. Railway will auto-detect Vite and deploy

### Deploy Sanity Studio (Optional - for team access):
1. In the `studio` folder, run: `sanity deploy`
2. Choose a studio hostname (e.g., red-cell-therapy)
3. Your studio will be available at: `your-hostname.sanity.studio`

## Content Types Available

- **Site Settings**: Global site settings, contact info
- **Hero Section**: Main headline, subheadline, CTAs
- **Trust Icons**: Four trust indicators
- **Why It Works Cards**: Three explanation cards
- **Science Comparison**: What brands miss vs our approach
- **Product**: Product details, specs, images
- **Testimonials**: Customer reviews with photos
- **Team Members**: Advisory board and team profiles
- **Pricing Plans**: Session pricing options

## Need Help?

- Sanity Docs: https://www.sanity.io/docs
- Railway Docs: https://docs.railway.app/
