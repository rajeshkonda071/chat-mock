@echo off
REM Chat Mock - Installation & Startup Script for Windows
REM This script automates the setup process for both frontend and backend

echo.
echo 🚀 Chat Mock Installation Script
echo ==================================
echo.

REM Check if Node.js is installed
where node >nul 2>nul
if %errorlevel% neq 0 (
    echo ❌ Node.js is not installed. Please install Node.js first.
    pause
    exit /b 1
)

for /f "tokens=*" %%i in ('node -v') do set node_version=%%i
for /f "tokens=*" %%i in ('npm -v') do set npm_version=%%i

echo ✅ Node.js version: %node_version%
echo ✅ npm version: %npm_version%
echo.

REM Install backend dependencies
echo 📦 Installing backend dependencies...
cd server
call npm install
echo ✅ Backend dependencies installed
echo.

REM Return to root
cd ..

REM Install frontend dependencies
echo 📦 Installing frontend dependencies...
cd client
call npm install
echo ✅ Frontend dependencies installed
echo.

REM Return to root
cd ..

echo ==================================
echo ✅ Installation Complete!
echo ==================================
echo.
echo To start the application:
echo.
echo Terminal 1 (Backend):
echo   cd server
echo   npm start
echo.
echo Terminal 2 (Frontend):
echo   cd client
echo   npm start
echo.
echo Then open: http://localhost:3000
echo.
pause
