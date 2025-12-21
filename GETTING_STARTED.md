# 🎯 START HERE - Complete Setup Guide

Welcome to your professional Next.js portfolio website! This guide will help you get started in just a few minutes.

## ⏱️ Time Required: ~10 minutes

## Step 1: Install Dependencies (2 minutes)

### Option A: Using Command Line

```bash
npm install
```

### Option B: Using Setup Script

**Windows:**
```bash
setup.bat
```

**Mac/Linux:**
```bash
bash setup.sh
```

## Step 2: Run Development Server (1 minute)

```bash
npm run dev
```

You should see:
```
> ready - started server on 0.0.0.0:3000, url: http://localhost:3000
```

Open your browser and visit: **http://localhost:3000** 🎉

## Step 3: Customize Your Portfolio (5 minutes)

### Edit: `src/app/page.tsx`

This file contains everything you see on the website. Update these sections:

#### 1. Your Name (Line 8 & 25)
```typescript
// Find this:
<h1 className="text-2xl font-bold gradient-text">Uday Maroju</h1>
<h2 className="text-5xl md:text-6xl font-bold mb-6 animate-slide-up">
  Frontend <span className="gradient-text">Engineer</span>
</h2>

// Change to:
<h1 className="text-2xl font-bold gradient-text">Your Name</h1>
<h2 className="text-5xl md:text-6xl font-bold mb-6 animate-slide-up">
  Your Title <span className="gradient-text">Here</span>
</h2>
```

#### 2. Hero Section (Lines 39-44)
```typescript
<p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto animate-slide-up">
  Building beautiful, responsive, and scalable web applications with modern technologies like React, TypeScript, and Tailwind CSS.
</p>
```

#### 3. About Section (Lines 56-71)
```typescript
<p className="text-gray-300 leading-relaxed">
  I'm a passionate Frontend Engineer with expertise in...
</p>
```

#### 4. Projects Section (Lines 81-96)
Update each ProjectCard:
```typescript
<ProjectCard 
  title="Your Project Name"
  description="What it does"
  tags={['Tech1', 'Tech2', 'Tech3']}
/>
```

#### 5. Skills Section (Lines 104-123)
Update each SkillCategory:
```typescript
<SkillCategory 
  title="Category"
  skills={['Skill1', 'Skill2', 'Skill3']}
/>
```

#### 6. Contact Information (Lines 155-183)
```typescript
// Update email
<a href="mailto:your-email@example.com" className="text-accent hover:text-blue-400">
  your-email@example.com
</a>

// Update social links
<a href="https://linkedin.com/in/yourprofile" className="text-accent hover:text-blue-400">
  linkedin.com/in/yourprofile
</a>
```

### Optional: Update Metadata (Layout)

Edit: `src/app/layout.tsx`

```typescript
export const metadata: Metadata = {
  title: 'Your Name - Your Title',
  description: 'Your professional portfolio description',
  keywords: ['Frontend', 'React', 'Your Skills'],
  openGraph: {
    title: 'Your Name - Your Title',
    description: 'Your description',
    url: 'https://yourdomain.com',
    type: 'website',
  },
}
```

### Optional: Customize Colors

Edit: `tailwind.config.js`

```javascript
colors: {
  primary: '#0f172a',      // Dark background
  secondary: '#1e293b',    // Slightly lighter
  accent: '#3b82f6',       // Blue (change this!)
}
```

Popular color combinations:
- **Blue**: `#3b82f6` (current)
- **Purple**: `#a855f7`
- **Green**: `#10b981`
- **Pink**: `#ec4899`
- **Orange**: `#f97316`

## Step 4: Test Your Changes

As you edit the files, your browser will automatically reload with the changes!

Check:
- [x] Name and title are correct
- [x] About section reads well
- [x] Projects are listed
- [x] Skills look good
- [x] Contact info is correct
- [x] Colors look nice
- [x] Mobile view works (resize browser)

## Step 5: Build for Production

When you're happy with your portfolio:

```bash
npm run build
npm start
```

This creates an optimized version for deployment.

## Step 6: Deploy Your Portfolio

### Recommended: Vercel (Easiest)

1. **Prepare your code:**
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
   git push -u origin main
   ```

2. **Deploy:**
   - Go to [vercel.com](https://vercel.com)
   - Sign up with GitHub
   - Click "New Project"
   - Select your portfolio repository
   - Click "Deploy"
   - Done! 🎉

3. **Custom Domain (Optional):**
   - In Vercel dashboard: Settings → Domains
   - Add your domain
   - Follow DNS instructions

### Alternative: Netlify

1. Same Git steps as above
2. Go to [netlify.com](https://netlify.com)
3. Click "New site from Git"
4. Select your repository
5. Click "Deploy"

See **DEPLOYMENT.md** for detailed instructions on all platforms!

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── app/
│   │   ├── page.tsx         ← Edit this! (Main portfolio)
│   │   ├── layout.tsx       ← Edit for metadata
│   │   └── globals.css      ← Global styles
│   └── lib/
│       └── utils.ts         ← Utilities
├── public/
│   ├── sitemap.xml          ← Auto-generated for SEO
│   └── robots.txt           ← For search engines
├── package.json
├── tailwind.config.js       ← Colors and theme
├── next.config.js
└── [Documentation files]
```

## 🔧 Available Commands

```bash
npm run dev      # Start development server (http://localhost:3000)
npm run build    # Build for production
npm start        # Run production build
npm run lint     # Check code quality
```

## ✅ Pre-Deployment Checklist

- [ ] Updated your name and title
- [ ] Updated about section
- [ ] Added your projects
- [ ] Updated your skills
- [ ] Updated contact email
- [ ] Updated social media links
- [ ] Tested on mobile (resize browser)
- [ ] All links work
- [ ] Colors look good
- [ ] No broken images
- [ ] Built successfully (`npm run build`)

## 📚 Documentation Files

Read these in order:

1. **This file** ← You are here!
2. **SETUP.md** - Detailed customization guide
3. **DEPLOYMENT.md** - Step-by-step deployment guide
4. **DOCS.md** - Complete technical documentation
5. **README.md** - Project overview

## 🆘 Troubleshooting

### "Port 3000 already in use"
```bash
# Windows
netstat -ano | findstr :3000

# Find the process using port 3000, then:
# Windows: taskkill /PID <PID> /F
# Mac/Linux: lsof -ti:3000 | xargs kill -9
```

### "npm install fails"
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### "Build fails"
```bash
# Try building with debug info
npm run build -- --debug
```

### "Changes not showing"
- Hard refresh browser: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)
- Stop dev server with `Ctrl+C`, then `npm run dev` again

## 💡 Pro Tips

1. **Keep descriptions short** - Easier to read
2. **Use 2-3 tech tags per project** - Not too many
3. **Update regularly** - Keep portfolio fresh
4. **Test on mobile** - Most visitors use phones
5. **Use quality images** - For project screenshots
6. **Make contact easy** - Multiple contact options

## 🎯 Next Steps After Deployment

1. ✅ Set up custom domain
2. ✅ Add Google Analytics
3. ✅ Verify with Google Search Console
4. ✅ Check on different devices/browsers
5. ✅ Tell people about your portfolio!

## 📞 Need More Help?

- **Setup questions?** → Read SETUP.md
- **Deployment questions?** → Read DEPLOYMENT.md
- **Technical questions?** → Read DOCS.md
- **Quick answers?** → Read PROJECT_STRUCTURE.md

## 🚀 You're Ready!

Your portfolio website is now:
- ✅ Created
- ✅ Customized
- ✅ Ready to deploy
- ✅ SEO optimized
- ✅ Mobile responsive
- ✅ Fast and performant

**Next:** Deploy using the guide above!

---

**Questions?** Check the documentation files!

**Ready to deploy?** Follow the Deploy section above or read DEPLOYMENT.md

Good luck! 🎉
