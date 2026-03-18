# 📋 Quick Reference - GT Project Commands

## 🚀 Quick Start (Copy & Paste)

### Setup & Installation
```bash
# Backend
cd backend
npm install
cp .env.example .env
npm run dev

# In another terminal - Frontend
cd frontend
npm install
cp .env.example .env.local
npm run dev
```

## 📂 File Locations

### Backend Files
| File | Location | Purpose |
|------|----------|---------|
| Server Entry | `backend/src/server.ts` | Express server |
| Review Model | `backend/src/models/Review.ts` | MongoDB schema |
| Review Routes | `backend/src/routes/reviews.ts` | API endpoints |
| Review Controller | `backend/src/controllers/reviewController.ts` | Request handlers |
| Database Config | `backend/src/config/database.ts` | MongoDB connection |
| Types | `backend/src/types/review.ts` | TypeScript interfaces |
| Environment | `backend/.env` | Config variables |

### Frontend Files
| File | Location | Purpose |
|------|----------|---------|
| Home Page | `frontend/app/page.tsx` | Homepage (now with Testimonials!) |
| Reviews Page | `frontend/app/reviews/page.tsx` | Submit & view reviews ✨ NEW |
| About Page | `frontend/app/about/page.tsx` | About page |
| Services | `frontend/app/services/page.tsx` | Services page |
| API Client | `frontend/lib/api.ts` | API functions |
| Header | `frontend/components/Header.tsx` | Navigation (with /reviews link) |
| ReviewForm | `frontend/components/ReviewForm.tsx` | Review submission form ✨ NEW |
| Testimonials | `frontend/components/Testimonials.tsx` | Latest reviews on home ✨ NEW |
| Footer | `frontend/components/Footer.tsx` | Footer |
| Global CSS | `frontend/app/globals.css` | Styles |
| Environment | `frontend/.env.local` | Config variables |

## 🔗 API Endpoints

### Backend Base URL
```
http://localhost:5000/api
```

### Endpoints
```
POST    /api/reviews          # Create review
GET     /api/reviews          # Get all reviews
GET     /api/reviews/:id      # Get single review
DELETE  /api/reviews/:id      # Delete review
GET     /api/health           # Health check
```

---

## ✨ NEW: Review System Features

### Components & Pages Added
- **ReviewForm** (`frontend/components/ReviewForm.tsx`) - Form to submit reviews
- **Reviews Page** (`frontend/app/reviews/page.tsx`) - Dedicated page for reviews
- **Testimonials** (`frontend/components/Testimonials.tsx`) - Latest 3 reviews on home page

### Key URLs
| Page | URL | Purpose |
|------|-----|---------|
| Reviews | `http://localhost:3000/reviews` | Submit & view all reviews |
| Home | `http://localhost:3000` | See latest testimonials |
| Nav Link | Header | "Reviews" in navigation |

### Form Fields
- Name (max 100 chars, required)
- Role (max 100 chars, required)
- Rating (1-5 stars, required)
- Review (max 1000 chars, required)

### Features
✅ Real-time character counters | ✅ Interactive star rating | ✅ Form validation
✅ Auto-loading spinner | ✅ Success message (auto-clears) | ✅ Error handling
✅ Form reset after submit | ✅ Testimonials auto-fetch | ✅ Responsive design

### Documentation
- `REVIEW_FORM_GUIDE.md` - Complete usage guide (500+ lines)
- `INTEGRATION_SUMMARY.md` - System architecture overview (400+ lines)  
- `TESTING_CHECKLIST.md` - Full testing procedures (400+ lines)

---

## 🛠️ Development Commands

### Backend
```bash
cd backend

# Development (auto-restart on changes)
npm run dev

# Build for production
npm run build

# Run production build
npm start

# Lint code
npm run lint
```

### Frontend
```bash
cd frontend

# Development server (port 3000)
npm run dev

# Build for production
npm run build

# Run production build
npm start

# Lint code
npm run lint
```

## 🔑 Environment Variables

### Backend (.env)
```
PORT=5000
NODE_ENV=development
MONGODB_URI=mongodb://localhost:27017/gt-project
FRONTEND_URL=http://localhost:3000
```

### Frontend (.env.local)
```
NEXT_PUBLIC_API_URL=http://localhost:5000/api
NODE_ENV=development
```

## 📝 Example API Requests

### Create Review
```bash
curl -X POST http://localhost:5000/api/reviews \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "role": "CEO",
    "rating": 5,
    "review": "Great service!"
  }'
```

### Get All Reviews
```bash
curl http://localhost:5000/api/reviews
```

### Delete Review
```bash
curl -X DELETE http://localhost:5000/api/reviews/REVIEW_ID
```

## 🐛 Common Issues & Fixes

| Issue | Solution |
|-------|----------|
| Port 5000 in use | `taskkill /PID <PID> /F` (Windows) or `lsof -ti:5000 \| xargs kill -9` (Mac/Linux) |
| MongoDB connection failed | Start MongoDB: `mongod` or use MongoDB Atlas |
| CORS error | Check `FRONTEND_URL` in backend `.env` |
| API not responding | Ensure backend is running on port 5000 |
| Frontend won't start | Delete `node_modules` and `.next`, then `npm install` |

## 📁 Project Structure at a Glance

```
GT/
├── backend/
│   ├── src/
│   │   ├── server.ts (entry point)
│   │   ├── config/database.ts
│   │   ├── models/Review.ts
│   │   ├── routes/reviews.ts
│   │   ├── controllers/reviewController.ts
│   │   └── types/review.ts
│   ├── dist/ (compiled JS)
│   ├── package.json
│   ├── tsconfig.json
│   └── .env
│
├── frontend/
│   ├── app/
│   │   ├── page.tsx (home)
│   │   ├── layout.tsx
│   │   ├── about/page.tsx
│   │   ├── services/page.tsx
│   │   ├── contact/page.tsx
│   │   ├── projects/page.tsx
│   │   ├── book-service/page.tsx
│   │   ├── [serviceId]/page.tsx
│   │   ├── privacy-policy/page.tsx
│   │   ├── terms/page.tsx
│   │   └── globals.css
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── Services.tsx
│   │   └── ...
│   ├── lib/
│   │   └── api.ts (API functions)
│   ├── public/
│   ├── package.json
│   ├── tsconfig.json
│   ├── next.config.mjs
│   └── .env.local
│
├── README.md (main guide)
└── SETUP_GUIDE.md (detailed setup)
```

## 🚢 Deployment Checklist

### Before Deploying

- [ ] Backend `.env` configured for production
- [ ] Frontend `.env.local` has production API URL
- [ ] MongoDB URI points to production database
- [ ] CORS settings updated for production domain
- [ ] npm run build succeeds for both apps
- [ ] No console errors in frontend
- [ ] API health check works
- [ ] Review CRUD operations tested

### Deploy Backend
1. Push to GitHub
2. Connect to Render/Railway/Heroku
3. Set environment variables
4. Deploy

### Deploy Frontend
1. Push to GitHub
2. Connect to Vercel
3. Set environment variables
4. Deploy

## 📞 Support & Resources

- 📧 Email: gautamtechnical493@gmail.com
- 📞 Phone: +91 7355474484
- 💬 WhatsApp: https://wa.me/7355474484

## 📚 Additional Resources

- [Next.js Docs](https://nextjs.org/docs)
- [Express.js Guide](https://expressjs.com/)
- [Mongoose Documentation](https://mongoosejs.com/)
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- [Vercel Docs](https://vercel.com/docs)

---

**Last Updated:** March 18, 2025
