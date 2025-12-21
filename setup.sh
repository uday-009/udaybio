#!/bin/bash
# Quick setup script for portfolio

echo "🚀 Portfolio Setup Script"
echo "========================"
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed."
    echo "Please install Node.js from https://nodejs.org/"
    exit 1
fi

echo "✅ Node.js version: $(node --version)"
echo "✅ npm version: $(npm --version)"
echo ""

# Install dependencies
echo "📦 Installing dependencies..."
npm install

if [ $? -eq 0 ]; then
    echo "✅ Dependencies installed successfully!"
    echo ""
    echo "🎉 Setup complete!"
    echo ""
    echo "Next steps:"
    echo "1. Edit your information in src/app/page.tsx"
    echo "2. Run: npm run dev"
    echo "3. Visit: http://localhost:3000"
    echo "4. When ready, follow DEPLOYMENT.md to deploy"
else
    echo "❌ Installation failed!"
    exit 1
fi
