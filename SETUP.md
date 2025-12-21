# Quick Setup Guide

## Prerequisites

- Node.js 16.x or higher installed
- npm or yarn package manager
- Git (optional, for version control)

## Installation & Running

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```

The website will be available at `http://localhost:3000`

### 3. Build for Production
```bash
npm run build
npm start
```

## File Structure

```
portfolio/
├── src/
│   ├── app/
│   │   ├── layout.tsx        # Root layout with metadata
│   │   ├── page.tsx          # Main page with all sections
│   │   └── globals.css       # Global styles
│   └── lib/
│       └── utils.ts          # Utility functions
├── public/
│   ├── sitemap.xml           # SEO sitemap
│   └── robots.txt            # SEO robots file
├── package.json
├── next.config.js
├── tailwind.config.js
├── postcss.config.js
├── tsconfig.json
├── .eslintrc.json
├── .gitignore
├── README.md                 # Project documentation
└── DEPLOYMENT.md             # Deployment guide
```

## Customization

### Update Your Information

Edit `src/app/page.tsx`:

1. **Hero Section** - Update your name and tagline
2. **About Section** - Add your bio
3. **Projects** - Update project cards with your work
4. **Skills** - Update technologies you know
5. **Contact** - Update email and social links

### Update Metadata

Edit `src/app/layout.tsx`:
- Update `title` and `description`
- Update `openGraph` information
- Change the URL

### Customize Colors

Edit `tailwind.config.js`:
```javascript
colors: {
  primary: '#0f172a',      // Dark background
  secondary: '#1e293b',    // Slightly lighter background
  accent: '#3b82f6',       // Highlight color (blue)
}
```

### Add Your Resume

1. Place your PDF in the `public` folder
2. Update the download link in `src/app/page.tsx`

```typescript
<a href="/your-resume.pdf" download className="btn-primary">
  Download Resume
</a>
```

## Features

✅ Fully responsive design
✅ Dark theme optimized
✅ Smooth scrolling navigation
✅ Contact form ready
✅ SEO optimized
✅ Performance optimized
✅ Production-ready
✅ TypeScript support

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Run production server
- `npm run lint` - Check code quality

## Deployment

See `DEPLOYMENT.md` for detailed instructions on deploying to:
- Vercel (recommended)
- Netlify
- AWS Amplify
- Docker
- Traditional hosting

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance Tips

1. Optimize images before adding them
2. Keep bundle size small
3. Use lazy loading for images
4. Minify CSS and JavaScript (done automatically)
5. Enable gzip compression on server

## SEO Optimization

1. Update metadata in `layout.tsx`
2. Add your sitemap (`public/sitemap.xml`)
3. Configure robots.txt (`public/robots.txt`)
4. Use semantic HTML (already done)
5. Add structured data (JSON-LD)

## Troubleshooting

### Port 3000 already in use?
```bash
# Windows
netstat -ano | findstr :3000

# Mac/Linux
lsof -ti:3000 | xargs kill -9
```

### Dependencies issues?
```bash
rm -rf node_modules package-lock.json
npm install
```

### Build errors?
```bash
npm run build -- --debug
```

## Next Steps

1. Update your information in `src/app/page.tsx`
2. Customize colors in `tailwind.config.js`
3. Test locally with `npm run dev`
4. Deploy to Vercel or preferred platform
5. Set up custom domain
6. Monitor with analytics

## Support & Resources

- Next.js Docs: https://nextjs.org/docs
- Tailwind CSS: https://tailwindcss.com/docs
- TypeScript: https://www.typescriptlang.org/docs/
- Vercel: https://vercel.com/docs

---

**Ready to deploy?** See `DEPLOYMENT.md` for instructions!
