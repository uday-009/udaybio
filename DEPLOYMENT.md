# Deployment Guide

This portfolio website can be deployed on multiple platforms. Choose the option that works best for you.

## Option 1: Deploy on Vercel (Recommended)

Vercel is the official Next.js hosting platform. It's the easiest and fastest way to deploy.

### Steps:

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
   git push -u origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign up or log in with GitHub
   - Click "Add New Project"
   - Select your portfolio repository
   - Click "Import"

3. **Configure**
   - Framework: Next.js (auto-detected)
   - Root Directory: ./ (root)
   - Build Command: npm run build
   - Output Directory: .next

4. **Deploy**
   - Click "Deploy"
   - Your site will be live at `your-project.vercel.app`

5. **Custom Domain (Optional)**
   - In Vercel dashboard, go to Settings → Domains
   - Add your custom domain (e.g., udaymaroju.com)
   - Update DNS records as instructed

## Option 2: Deploy on Netlify

### Steps:

1. **Push to GitHub** (same as above)

2. **Connect to Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Click "New site from Git"
   - Connect GitHub account and select repository

3. **Configure Build Settings**
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Click "Deploy site"

4. **Wait for Deployment**
   - Netlify will build and deploy automatically
   - Your site will be live at `your-site-name.netlify.app`

## Option 3: Deploy on AWS Amplify

### Steps:

1. **Push to GitHub**

2. **Connect to AWS Amplify**
   - Go to [aws.amazon.com/amplify](https://aws.amazon.com/amplify)
   - Click "Get Started"
   - Select GitHub and authenticate
   - Select your repository and branch

3. **Review Build Settings**
   - Amplify auto-detects Next.js
   - Confirm build settings
   - Click "Deploy"

4. **Custom Domain**
   - Navigate to Domain management
   - Add your domain

## Option 4: Self-Host (Docker)

### Build Docker Image

1. **Create Dockerfile**
   ```dockerfile
   FROM node:18-alpine AS deps
   WORKDIR /app
   COPY package.json package-lock.json ./
   RUN npm ci --only=production

   FROM node:18-alpine AS builder
   WORKDIR /app
   COPY package.json package-lock.json ./
   RUN npm ci
   COPY . .
   RUN npm run build

   FROM node:18-alpine AS runner
   WORKDIR /app
   ENV NODE_ENV production
   COPY --from=deps /app/node_modules ./node_modules
   COPY --from=builder /app/.next ./.next
   COPY --from=builder /app/public ./public
   COPY --from=builder /app/package.json ./package.json
   EXPOSE 3000
   CMD ["npm", "start"]
   ```

2. **Build and Run**
   ```bash
   docker build -t portfolio .
   docker run -p 3000:3000 portfolio
   ```

3. **Deploy to Docker Hub or Container Registry**

## Option 5: Traditional Hosting (cPanel, etc.)

### Steps:

1. **Build for Production**
   ```bash
   npm run build
   ```

2. **Upload to Server**
   - Upload `.next`, `public`, `node_modules`, and `package.json` to your server
   - Install Node.js on the server

3. **Start Application**
   ```bash
   npm install --production
   npm run start
   ```

4. **Set Up Reverse Proxy** (Nginx Example)
   ```nginx
   server {
     listen 80;
     server_name yourdomain.com;

     location / {
       proxy_pass http://localhost:3000;
       proxy_http_version 1.1;
       proxy_set_header Upgrade $http_upgrade;
       proxy_set_header Connection 'upgrade';
       proxy_set_header Host $host;
       proxy_cache_bypass $http_upgrade;
     }
   }
   ```

## Environment Variables for Production

Create `.env.production.local`:
```
NEXT_PUBLIC_API_URL=https://your-api.com
NEXT_PUBLIC_DOMAIN=yourdomain.com
```

## Pre-Deployment Checklist

- [ ] Update personal information in `src/app/page.tsx`
- [ ] Update contact email and links
- [ ] Add your projects with descriptions
- [ ] Update skills and technologies
- [ ] Test on mobile devices
- [ ] Check all links are working
- [ ] Test contact form
- [ ] Optimize images
- [ ] Update metadata in `layout.tsx`
- [ ] Set up analytics (Google Analytics, etc.)
- [ ] Configure custom domain
- [ ] Set up SSL certificate
- [ ] Test SEO with Google Search Console

## Performance Optimization Tips

1. **Image Optimization**
   - Use Next.js Image component
   - Optimize image sizes
   - Use WebP format

2. **Code Splitting**
   - Already handled by Next.js
   - Lazy load components if needed

3. **Caching**
   - Set cache headers on Vercel/Netlify
   - Use service workers for PWA

4. **Monitoring**
   - Set up uptime monitoring
   - Monitor Core Web Vitals
   - Set up error tracking

## Troubleshooting

### Port Already in Use
```bash
# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Mac/Linux
lsof -ti:3000 | xargs kill -9
```

### Build Fails
```bash
# Clear cache
rm -rf .next
rm -rf node_modules
npm install
npm run build
```

### 404 on Dynamic Routes
- Vercel handles this automatically
- For self-hosted, configure server to serve `public/404.html`

## Support

For deployment help:
- Vercel Documentation: https://vercel.com/docs
- Next.js Documentation: https://nextjs.org/docs
- Netlify Documentation: https://docs.netlify.com

---

**Recommended**: Use Vercel for the best Next.js experience with zero configuration.
