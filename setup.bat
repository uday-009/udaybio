@echo off
REM Portfolio Setup Script for Windows

echo.
echo 🚀 Portfolio Setup Script
echo ========================
echo.

REM Check if Node.js is installed
where node >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo ❌ Node.js is not installed.
    echo Please install Node.js from https://nodejs.org/
    pause
    exit /b 1
)

echo ✅ Node.js version:
node --version
echo.
echo ✅ npm version:
npm --version
echo.

REM Install dependencies
echo 📦 Installing dependencies...
call npm install

if %ERRORLEVEL% EQU 0 (
    echo.
    echo ✅ Dependencies installed successfully!
    echo.
    echo 🎉 Setup complete!
    echo.
    echo Next steps:
    echo 1. Edit your information in src/app/page.tsx
    echo 2. Run: npm run dev
    echo 3. Visit: http://localhost:3000
    echo 4. When ready, follow DEPLOYMENT.md to deploy
    echo.
    pause
) else (
    echo.
    echo ❌ Installation failed!
    pause
    exit /b 1
)
