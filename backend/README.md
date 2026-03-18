# Backend API - GT Project

This is the Express.js + TypeScript backend API for the GT Project.

## Quick Start

```bash
# Install dependencies
npm install

# Create environment file
cp .env.example .env

# Start development server
npm run dev
```

The backend will run on `http://localhost:5000`

## Environment Variables

Create a `.env` file in the backend directory:

```
PORT=5000
NODE_ENV=development
MONGODB_URI=mongodb://localhost:27017/gt-project
FRONTEND_URL=http://localhost:3000
```

### Environment Variables Explained

- `PORT` - Server port (default: 5000)
- `NODE_ENV` - Environment mode (development/production)
- `MONGODB_URI` - MongoDB connection string
- `FRONTEND_URL` - Frontend URL for CORS configuration

### MongoDB Setup

#### Local MongoDB
```
MONGODB_URI=mongodb://localhost:27017/gt-project
```

#### MongoDB Atlas (Cloud)
```
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/gt-project?retryWrites=true&w=majority
```

## Project Structure

```
src/
├── server.ts              # Express server entry point
├── config/
│   └── database.ts       # MongoDB connection
├── models/
│   └── Review.ts         # Review model
├── routes/
│   └── reviews.ts        # Review routes
├── controllers/
│   └── reviewController.ts # Route handlers
└── types/
    └── review.ts         # TypeScript interfaces

dist/                     # Compiled JavaScript
```

## Available Scripts

```bash
npm run dev      # Start with ts-node-dev (auto-restart)
npm run build    # Compile TypeScript to JavaScript
npm run start    # Run compiled JavaScript
npm run lint     # Run ESLint
```

## API Endpoints

### Reviews

#### Create Review
```
POST /api/reviews
Content-Type: application/json

{
  "name": "John Doe",
  "role": "CEO",
  "rating": 5,
  "review": "Excellent service!"
}
```

#### Get All Reviews
```
GET /api/reviews
```

#### Get Review by ID
```
GET /api/reviews/:id
```

#### Delete Review
```
DELETE /api/reviews/:id
```

### Health Check
```
GET /api/health
```

## Database Schema

### Review Collection

```json
{
  "_id": ObjectId,
  "name": String,
  "role": String,
  "rating": Number,
  "review": String,
  "createdAt": Date,
  "updatedAt": Date
}
```

Messages stored in MongoDB with fields:

- `name`, `email` (required)
- `phone`, `subject`
- `message` (required)
- `source` (required)
- `createdAt` (auto-generated)

## Email Notifications

- Sends formatted email to `ADMIN_EMAIL` with all form data
- Continues saving to database even if email fails
- Uses SMTP configuration from environment variables

## Port

The backend runs exclusively on port 5000.
