# 🚀 GT Project - Complete Setup Guide

This guide walks you through setting up the entire GT Project with separate frontend and backend.

## Table of Contents
1. [Prerequisites](#prerequisites)
2. [Project Structure](#project-structure)
3. [Backend Setup](#backend-setup)
4. [Frontend Setup](#frontend-setup)
5. [Running Both Apps](#running-both-apps)
6. [Testing the API](#testing-the-api)
7. [Troubleshooting](#troubleshooting)

## Prerequisites

Before you start, ensure you have:

- **Node.js** 18.x or higher ([Download](https://nodejs.org/))
- **npm** or **pnpm** (comes with Node.js)
- **Git** ([Download](https://git-scm.com/))
- **MongoDB** - Choose one:
  - Local: [MongoDB Community Edition](https://docs.mongodb.com/manual/installation/)
  - Cloud: [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) (Free tier available)

### Check Installation
```bash
node --version    # Should be 18.x or higher
npm --version     # Should be 8.x or higher
git --version     # Should be installed
```

## Project Structure

After refactoring, your project should look like this:

```
GT/
├── frontend/                  # Next.js Application
│   ├── app/
│   ├── components/
│   ├── lib/
│   ├── public/
│   ├── package.json
│   ├── .env.local
│   └── README.md
│
├── backend/                   # Express + TypeScript API
│   ├── src/
│   ├── dist/
│   ├── package.json
│   ├── .env
│   └── README.md
│
└── README.md                  # Project root README
```

## Backend Setup

### Step 1: Navigate to Backend Directory
```bash
cd backend
```

### Step 2: Install Dependencies
```bash
npm install
```

This will install:
- Express.js
- Mongoose (MongoDB ODM)
- TypeScript
- and other dependencies

### Step 3: Configure Environment Variables

Copy the example env file:
```bash
cp .env.example .env
```

Edit `.env` file with your values:

**Option A: Local MongoDB**
```env
PORT=5000
NODE_ENV=development
MONGO_URI=mongodb://localhost:27017/gt-project
FRONTEND_URL=http://localhost:3000
```

**Option B: MongoDB Atlas (Cloud)**
1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a free account
3. Create a cluster
4. Get connection string
5. Update `.env`:
```env
PORT=5000
NODE_ENV=development
MONGO_URI=mongodb+srv://username:password@cluster0.mongodb.net/gt-project?retryWrites=true&w=majority
FRONTEND_URL=http://localhost:3000
```

### Step 4: Start Backend Server
```bash
npm run dev
```

You should see:
```
╭─────────────────────────────────────╮
│   GT Project Backend Server Started │
├─────────────────────────────────────┤
│  Environment: development           │
│  Port:       5000                  │
│  URL:        http://localhost:5000 │
╰─────────────────────────────────────╯

✓ MongoDB connected successfully
```

✅ **Backend is now running!**

## Frontend Setup

### Step 1: Navigate to Frontend Directory
```bash
# From project root
cd frontend
```

### Step 2: Install Dependencies
```bash
npm install
```

This will install:
- Next.js
- React
- TypeScript
- Tailwind CSS
- and UI components

### Step 3: Configure Environment Variables

Copy the example env file:
```bash
cp .env.example .env.local
```

Edit `.env.local`:
```env
NEXT_PUBLIC_API_URL=http://localhost:5000/api
NODE_ENV=development
```

⚠️ **Important:** Variables must start with `NEXT_PUBLIC_` to be accessible in browser

### Step 4: Start Frontend Server
```bash
npm run dev
```

You should see:
```
> next dev -p 3000

▲ Next.js 16.1.6
- Local: http://localhost:3000
- Environments: .env.local
```

✅ **Frontend is now running!**

## Running Both Apps

### Terminal Setup (Recommended)

You need **two terminal windows** to run both apps simultaneously.

**Terminal 1 - Backend:**
```bash
cd backend
npm run dev
```

**Terminal 2 - Frontend:**
```bash
cd frontend
npm run dev
```

### Verify Both Are Running
- Backend: Visit `http://localhost:5000/api/health`
- Frontend: Visit `http://localhost:3000`

You should see:
- Backend response:
```json
{
  "status": "ok",
  "message": "Backend server is running",
  "port": 5000,
  "environment": "development",
  "timestamp": "2025-03-18T..."
}
```

- Frontend: Homepage should load successfully

## Testing the API

### Test 1: Create a Review

Using curl (or Postman):
```bash
curl -X POST http://localhost:5000/api/reviews \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "role": "CEO",
    "rating": 5,
    "review": "Excellent service and support!"
  }'
```

Expected response:
```json
{
  "success": true,
  "message": "Review created successfully",
  "data": {
    "_id": "65f4a2b3c1d2e3f4g5h6i7j8",
    "name": "John Doe",
    "role": "CEO",
    "rating": 5,
    "review": "Excellent service and support!",
    "createdAt": "2025-03-18T10:30:00.000Z",
    "updatedAt": "2025-03-18T10:30:00.000Z"
  }
}
```

### Test 2: Get All Reviews
```bash
curl http://localhost:5000/api/reviews
```

### Test 3: Frontend API Call

1. Open `http://localhost:3000` in your browser
2. Open browser console (F12)
3. The frontend should automatically connect to backend

## Troubleshooting

### Issue 1: Port Already in Use

**Error:** `Error: listen EADDRINUSE: address already in use :::5000`

**Solution:**

Kill the process on port 5000:

**Windows:**
```bash
# Find process ID
netstat -ano | findstr :5000

# Kill process (replace PID with actual number)
taskkill /PID <PID> /F
```

**Mac/Linux:**
```bash
lsof -ti:5000 | xargs kill -9
```

### Issue 2: MongoDB Connection Failed

**Error:** `MongoError: connect ECONNREFUSED 127.0.0.1:27017`

**Solution 1 - Start Local MongoDB:**

**Windows (with MongoDB installed):**
```bash
mongod
```

**Mac (with Homebrew):**
```bash
brew services start mongodb-community
```

**Solution 2 - Use MongoDB Atlas:**
1. Update `MONGO_URI` in `.env` with your Atlas connection string
2. Ensure your IP is whitelisted in Atlas

### Issue 3: CORS Error

**Error:** `Access to XMLHttpRequest ... blocked by CORS policy`

**Solution:**
1. Ensure backend is running on port 5000
2. Check `FRONTEND_URL` in backend `.env` matches frontend URL
3. Verify `NEXT_PUBLIC_API_URL` in frontend `.env.local` matches backend URL

### Issue 4: Frontend Can't Connect to API

**Error:** Network request fails when submitting forms

**Solution:**
1. Backend must be running first
2. Check network tab in browser DevTools
3. Verify `NEXT_PUBLIC_API_URL=http://localhost:5000/api`
4. Ensure no typos in URLs

### Issue 5: Dependencies Installation Failed

**Solution:**
```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and lock file
rm -rf node_modules package-lock.json

# Reinstall
npm install
```

## Production Build

### Build Backend
```bash
cd backend
npm run build
npm start
```

### Build Frontend
```bash
cd frontend
npm run build
npm start
```

## Next Steps

Ready to deploy? Follow deployment guides:
- [Frontend Deployment (Vercel)](/frontend/README.md#deployment)
- [Backend Deployment (Render/Railway/Heroku)](/backend/README.md#deployment)

## Support

Need help? Contact us:
- 📧 Email: gautamtechnical493@gmail.com
- 📞 Phone: +91 7355474484
- 💬 WhatsApp: https://wa.me/7355474484

---

**Happy coding! 🚀**
