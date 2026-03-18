# GT Project - Refactored Frontend & Backend

This project has been refactored into separate frontend (Next.js) and backend (Node.js + Express + TypeScript) applications.

## Project Structure

```
GT/
├── frontend/                    # Next.js Frontend Application
│   ├── app/                    # Next.js App Router
│   ├── components/             # React Components
│   ├── lib/                    # Utilities and API functions
│   ├── public/                 # Static assets
│   ├── package.json
│   ├── tsconfig.json
│   ├── next.config.mjs
│   ├── .env.example
│   └── .env.local             # Local environment variables
│
├── backend/                     # Express.js Backend Application
│   ├── src/
│   │   ├── server.ts          # Express server entry point
│   │   ├── config/            # Database and config files
│   │   ├── models/            # Mongoose models (Review, etc.)
│   │   ├── routes/            # API routes
│   │   ├── controllers/       # Route controllers
│   │   └── types/             # TypeScript interfaces
│   ├── package.json
│   ├── tsconfig.json
│   ├── .env.example
│   └── dist/                  # Compiled JavaScript output
│
└── README.md                   # This file
```

## Getting Started

### Prerequisites
- Node.js 18+ and npm/pnpm
- MongoDB Atlas account or local MongoDB instance

### 1. Install Dependencies

#### Frontend
```bash
cd frontend
npm install
# or
pnpm install
```

#### Backend
```bash
cd backend
npm install
# or
pnpm install
```

### 2. Environment Configuration

#### Frontend Setup
```bash
cd frontend
cp .env.example .env.local
```

Edit `frontend/.env.local`:
```
NEXT_PUBLIC_API_URL=http://localhost:5000/api
NODE_ENV=development
```

#### Backend Setup
```bash
cd backend
cp .env.example .env
```

Edit `backend/.env`:
```
PORT=5000
NODE_ENV=development
MONGO_URI=mongodb://localhost:27017/gt-project
# OR for MongoDB Atlas:
# MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/gt-project

FRONTEND_URL=http://localhost:3000
```

### 3. Start Both Applications

#### Terminal 1 - Start Backend
```bash
cd backend
npm run dev
```

The backend will run on `http://localhost:5000`

#### Terminal 2 - Start Frontend
```bash
cd frontend
npm run dev
```

The frontend will run on `http://localhost:3000`

## Available Scripts

### Frontend (Next.js)
```bash
npm run dev      # Start development server on port 3000
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

### Backend (Express + TypeScript)
```bash
npm run dev      # Start with ts-node-dev (auto-restart on changes)
npm run build    # Compile TypeScript to JavaScript
npm run start    # Run compiled JavaScript
npm run lint     # Run ESLint
```

## API Endpoints

### Reviews API
- `POST /api/reviews` - Create a new review
- `GET /api/reviews` - Get all reviews
- `GET /api/reviews/:id` - Get a review by ID
- `DELETE /api/reviews/:id` - Delete a review

### Health Check
- `GET /api/health` - Backend health check

## API Examples

### Submit a Review
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

### Get All Reviews
```bash
curl http://localhost:5000/api/reviews
```

---

## 🌟 Services We Offer

We deliver **end-to-end digital solutions**, including:

### 🌐 Web & App Development

- **Website Development**  
  Modern, responsive & SEO-friendly websites
- **Web Applications**  
  Scalable apps using React, Next.js & MERN stack

### 🎨 Design & Experience

- **UI/UX Design**  
  Clean, conversion-focused user experiences
- **Design Systems**  
  Consistent, scalable UI for growing products

### ⚙️ Custom Solutions

- **Custom Software Development**  
  Tailor-made systems built for your business
- **API Development & Integrations**

### ☁️ Cloud & Backend

- **Backend Development**  
  Secure, scalable backend architectures
- **Cloud Deployment**  
  AWS, Vercel & modern DevOps workflows

### 🔧 Support

- **Maintenance & Support**  
  Ongoing updates, fixes & performance optimization

---

## 🧠 Our Approach

✔ **Quality First** — Clean code, scalable architecture, polished UI  
✔ **Client-Focused** — Solutions aligned with real business goals  
✔ **Modern Stack** — Latest frameworks & best practices  
✔ **Long-Term Thinking** — Built to grow with your business

---

## 🏆 Why Choose GautamTechnical?

✨ Premium & reliable digital solutions  
✨ Transparent communication & smooth workflow  
✨ Experience with startups & growing brands  
✨ Strong focus on performance, security & scalability

---

## 🛠️ Tech Stack

### Frontend

- ⚛️ React
- ⏭️ Next.js
- 🎨 Tailwind CSS
- 🧩 JavaScript / TypeScript

### Backend

- 🟢 Node.js
- 🚀 Express
- 🔐 REST APIs

### Database

- 🍃 MongoDB
- 🐬 MySQL

### Cloud & Tools

- ☁️ AWS
- ▲ Vercel
- 🧩 Git & GitHub
- 🎨 Figma
- 🛠️ Postman

---

## 👥 Our Team

We’re a small but **high-impact team** of developers and designers who love building things that matter.

### 👨‍💻 Sachin Gautam — Founder & Full-Stack Developer

Sachin Gautam is the founder of **GautamTechnical** and a hands-on full-stack developer with strong experience in building end-to-end digital products. He works across the entire development lifecycle — from planning system architecture and designing user interfaces to developing backend logic and deploying applications to the cloud.

On the **frontend**, Sachin specializes in building modern, responsive, and performance-optimized interfaces using React, Next.js, and Tailwind CSS, with a strong focus on user experience and scalability.  
On the **backend**, he designs secure and scalable APIs using Node.js and Express, working with databases like MongoDB and MySQL to handle real-world data efficiently.  
On the **cloud & deployment** side, he manages hosting, CI/CD workflows, and production deployments using platforms like AWS and Vercel.

Beyond coding, Sachin strongly believes that great software is built by understanding business problems first. His approach combines clean architecture, performance optimization, and long-term maintainability, ensuring every product delivered by GautamTechnical is reliable, scalable, and ready for growth.

### 👨‍💻 Sambhav Jain — MERN Stack Developer

- Expert in building full-stack applications using **MongoDB, Express, React, and Node.js**
- Strong experience with **REST APIs**, backend architecture, and modern frontend workflows
- Focused on **performance optimization**, clean code practices, and scalable system design
- Known for a problem-solving mindset and delivering reliable, production-ready solutions

## _🚀 More skilled professionals joining the team as we continue to grow_

## 🤝 Let’s Work Together

Have a project in mind or want to collaborate?

📧 **Email:** `gautamtechnical439@gmail.com`  
💬 **WhatsApp:** https://wa.me/7355474484  
🌐 **Website:** Coming Soon

---

## 📌 Company Info

🏢 **Company:** GautamTechnical  
📅 **Founded:** 2025  
🎯 **Mission:** Build scalable, impactful digital solutions that help businesses grow

---

⭐ **Like our work?**  
Give this repository a ⭐ and stay connected — more cool stuff coming soon!
