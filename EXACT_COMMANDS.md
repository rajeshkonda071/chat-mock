# 🚀 Chat Mock - Exact Commands to Run

## For Windows Users

### Step 1: Navigate to Project
```batch
cd c:\Users\PC\Desktop\chat-mock
```

### Step 2: Install Everything (Automatic)
```batch
install.bat
```

This will automatically install dependencies for both frontend and backend.

### Step 3: Start Backend (Open Command Prompt #1)
```batch
cd c:\Users\PC\Desktop\chat-mock\server
npm start
```

Expected output:
```
Server running on http://localhost:5000
```

### Step 4: Start Frontend (Open Command Prompt #2)
```batch
cd c:\Users\PC\Desktop\chat-mock\client
npm start
```

Expected output:
```
Compiled successfully!
You can now view chat-mock-client in the browser.
  Local:            http://localhost:3000
```

### Step 5: Done! 🎉
- Frontend: http://localhost:3000
- Backend: http://localhost:5000

---

## For Linux/Mac Users

### Step 1: Navigate to Project
```bash
cd ~/Desktop/chat-mock
```
(or wherever you have the folder)

### Step 2: Install Everything (Automatic)
```bash
bash install.sh
```

This will automatically install dependencies for both frontend and backend.

### Step 3: Start Backend (Terminal #1)
```bash
cd ~/Desktop/chat-mock/server
npm start
```

Expected output:
```
Server running on http://localhost:5000
```

### Step 4: Start Frontend (Terminal #2)
```bash
cd ~/Desktop/chat-mock/client
npm start
```

Expected output:
```
Compiled successfully!
You can now view chat-mock-client in the browser.
  Local:            http://localhost:3000
```

### Step 5: Done! 🎉
- Frontend: http://localhost:3000
- Backend: http://localhost:5000

---

## Manual Installation (If Automatic Doesn't Work)

### Backend Setup
```bash
# Navigate to server folder
cd server

# Install dependencies
npm install

# Start the server
npm start
```

### Frontend Setup (In New Terminal)
```bash
# Navigate to client folder
cd client

# Install dependencies
npm install

# Start React app
npm start
```

---

## Verify Installation

### Check Node.js is Installed
```bash
node -v
npm -v
```

Should show version numbers (e.g., v18.17.0 for Node)

### Check Backend is Running
```bash
curl http://localhost:5000/api/health
```

Should return: `{"status":"Server is running"}`

### Check Frontend is Running
Open browser and go to: `http://localhost:3000`

Should see the landing page.

---

## Stop the Application

### In Each Terminal
Press: `Ctrl + C`

You'll see a prompt asking if you want to terminate.
Type: `Y` and press Enter

---

## Test the Application

1. Open http://localhost:3000
2. Click "Start New Chat"
3. Type: "What is React?"
4. Click "Send"
5. See the response with table data
6. Click 👍 or 👎
7. Toggle theme (sun/moon icon)
8. Resize browser to see mobile view
9. Click menu icon (☰)
10. Click a session in sidebar

---

## Troubleshooting Commands

### Port Already in Use?

**For Backend (Change port to 5001):**
```bash
# Windows
set PORT=5001 && npm start

# Linux/Mac
PORT=5001 npm start
```

### Clear Dependencies and Reinstall

**For Backend:**
```bash
cd server
rm -rf node_modules package-lock.json
npm install
npm start
```

**For Frontend:**
```bash
cd client
rm -rf node_modules package-lock.json
npm install
npm start
```

### Check if npm is Installed
```bash
npm -v
```

If not, download from https://nodejs.org

---

## Deployment Commands

### Push to GitHub

```bash
# In main project folder
git init
git add .
git commit -m "Initial commit: Chat Mock application"
git remote add origin https://github.com/YOUR_USERNAME/chat-mock.git
git branch -M main
git push -u origin main
```

Replace `YOUR_USERNAME` with your GitHub username.

---

## Development Commands

### Start Backend in Watch Mode
```bash
cd server
npm run dev
```

Changes to code auto-reload server.

### Build Frontend for Production
```bash
cd client
npm run build
```

Creates optimized `build/` folder.

### Start Frontend without Browser Auto-Open
```bash
cd client
BROWSER=none npm start
```

---

## Directory Structure After Installation

```
chat-mock/
├── node_modules/          (created after npm install)
├── client/
│   ├── node_modules/      (created after npm install)
│   └── ... (files)
├── server/
│   ├── node_modules/      (created after npm install)
│   └── ... (files)
└── ... (docs)
```

---

## Environment Variables

### Frontend (.env)
Located in: `client/.env`
```
REACT_APP_API_URL=http://localhost:5000/api
```

### Backend (.env)
Located in: `server/.env.example`
Copy to `server/.env`:
```
PORT=5000
NODE_ENV=development
```

---

## Quick Reference

| Task | Command |
|------|---------|
| Install all deps | `install.bat` (Windows) or `bash install.sh` (Linux/Mac) |
| Start backend | `cd server && npm start` |
| Start frontend | `cd client && npm start` |
| Check ports | `netstat -ano \| findstr :5000` (Windows) or `lsof -i :5000` (Mac) |
| Kill process on port | `taskkill /PID <PID> /F` (Windows) |
| Access app | http://localhost:3000 |
| Access API | http://localhost:5000/api |

---

## Common Issues & Solutions

### Issue: "npm: command not found"
**Solution:** Install Node.js from https://nodejs.org

### Issue: "Port 5000 already in use"
**Solution:** 
```bash
# Use different port
PORT=5001 npm start
```

### Issue: "Cannot find module"
**Solution:**
```bash
npm install
```

### Issue: "node_modules folder is huge"
**Solution:** Add to .gitignore (already done)
- Don't commit node_modules
- Run npm install after cloning

---

## Tips & Tricks

### Speed Up Installation
```bash
npm install --legacy-peer-deps
```

### Install Specific Version
```bash
npm install react@18.2.0
```

### Check Installed Packages
```bash
npm list
```

### Update Packages
```bash
npm update
```

---

## Testing in Different Browsers

- Chrome: http://localhost:3000
- Firefox: http://localhost:3000
- Safari: http://localhost:3000
- Edge: http://localhost:3000
- Mobile Chrome: http://localhost:3000

(If testing on phone, use your computer's IP)

---

## Next Steps After Running

1. ✅ Verify everything works
2. ✅ Test all features
3. ✅ Push to GitHub
4. ✅ Deploy to production
5. ✅ Share the links

See `GITHUB_DEPLOYMENT.md` for deployment steps.

---

**You're all set! Happy coding! 🚀**
