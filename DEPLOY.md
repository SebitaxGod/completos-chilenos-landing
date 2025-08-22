# Deploy Instructions for Vercel

## Option 1: Deploy via Vercel CLI (Recommended)

1. Install Vercel CLI globally:
```bash
npm i -g vercel
```

2. Deploy the project:
```bash
vercel --prod
```

3. Follow the prompts to configure your project

## Option 2: Deploy via Vercel Dashboard

1. Go to https://vercel.com/new
2. Import your Git repository
3. Vercel will automatically detect Next.js and configure build settings
4. Click "Deploy"

## Option 3: Deploy from GitHub

1. Push your project to GitHub:
```bash
git add .
git commit -m "Initial commit: Completos Chilenos landing page"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/completos-landing.git
git push -u origin main
```

2. Connect the GitHub repo to Vercel for automatic deployments

## Environment Variables

Set these in your Vercel dashboard if needed:
- `NEXT_PUBLIC_WHATSAPP_NUMBER`: 56912345678 (or your actual number)
- `NEXT_PUBLIC_SITE_URL`: https://your-domain.vercel.app

## Build Settings (Auto-detected)

- Framework: Next.js
- Build Command: `npm run build`
- Output Directory: `.next`
- Install Command: `npm install`

## Custom Domain (Optional)

1. Go to Project Settings > Domains in Vercel
2. Add your custom domain
3. Configure DNS records as instructed

Your landing page will be live at: https://your-project-name.vercel.app
