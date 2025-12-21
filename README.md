# Uday Maroju - Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- ⚡ **Next.js 14** - Latest React framework with App Router
- 🎨 **Tailwind CSS** - Utility-first CSS framework for styling
- 📱 **Fully Responsive** - Works seamlessly on all devices
- 🌙 **Modern Design** - Clean and professional UI with dark theme
- ✨ **Smooth Animations** - Framer Motion animations for engaging interactions
- 📧 **Contact Form** - Get in touch section with form submission
- 🚀 **Optimized** - Fast performance and SEO-friendly
- 📝 **TypeScript** - Type-safe JavaScript for better development experience

## Tech Stack

- **Frontend Framework**: Next.js 14 with React 18
- **Language**: TypeScript
- **Styling**: Tailwind CSS with PostCSS
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Deployment**: Optimized for Vercel

## Getting Started

### Prerequisites
- Node.js 16.x or higher
- npm or yarn package manager

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd portfolio
```

2. Install dependencies
```bash
npm install
```

3. Run the development server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
portfolio/
├── src/
│   └── app/
│       ├── layout.tsx      # Root layout
│       ├── page.tsx        # Home page with all sections
│       └── globals.css     # Global styles
├── public/                 # Static assets
├── package.json
├── next.config.js
├── tsconfig.json
├── tailwind.config.js
└── postcss.config.js
```

## Sections

1. **Navigation Bar** - Fixed header with smooth scrolling navigation
2. **Hero Section** - Eye-catching introduction with CTA buttons
3. **About Me** - Personal information and approach
4. **Projects** - Showcase of featured projects with tags
5. **Skills** - Categorized technical skills and technologies
6. **Contact** - Contact form and social links
7. **Footer** - Copyright and credits

## Customization

### Update Personal Information
Edit `src/app/page.tsx` and update:
- Name and title in the hero section
- About content
- Project details
- Skills and technologies
- Contact information

### Colors
Customize colors in `tailwind.config.js`:
- Primary color: `#0f172a`
- Secondary color: `#1e293b`
- Accent color: `#3b82f6`

## Building for Production

```bash
npm run build
npm start
```

## Deployment

### Deploy on Vercel

The easiest way to deploy is using [Vercel](https://vercel.com/).

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Vercel will automatically build and deploy on every push

### Other Deployment Options

- **Netlify**: Connect your GitHub repository to Netlify
- **Docker**: Build a Docker image for containerized deployment
- **Traditional Hosting**: Build the project and host the `.next` output directory

## Environment Variables

Create a `.env.local` file for environment-specific variables:

```
NEXT_PUBLIC_API_URL=your_api_url
```

## Performance Optimizations

- Image optimization with Next.js Image component
- Code splitting and lazy loading
- CSS and JavaScript minification
- Static generation where possible
- SEO-friendly metadata

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the MIT License.

## Contact

- Email: uday@example.com
- LinkedIn: [LinkedIn Profile](https://linkedin.com/in/uday)
- GitHub: [GitHub Profile](https://github.com/uday)

---

Built with ❤️ using Next.js and Tailwind CSS
