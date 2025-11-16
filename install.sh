#!/bin/bash

# Chat Mock - Installation & Startup Script
# This script automates the setup process for both frontend and backend

echo "🚀 Chat Mock Installation Script"
echo "=================================="
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js first."
    exit 1
fi

echo "✅ Node.js version: $(node -v)"
echo "✅ npm version: $(npm -v)"
echo ""

# Install backend dependencies
echo "📦 Installing backend dependencies..."
cd server
npm install
echo "✅ Backend dependencies installed"
echo ""

# Return to root
cd ..

# Install frontend dependencies
echo "📦 Installing frontend dependencies..."
cd client
npm install
echo "✅ Frontend dependencies installed"
echo ""

# Return to root
cd ..

echo "=================================="
echo "✅ Installation Complete!"
echo "=================================="
echo ""
echo "To start the application:"
echo ""
echo "Terminal 1 (Backend):"
echo "  cd server"
echo "  npm start"
echo ""
echo "Terminal 2 (Frontend):"
echo "  cd client"
echo "  npm start"
echo ""
echo "Then open: http://localhost:3000"
