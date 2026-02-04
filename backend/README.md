# Backend API

This is the backend API for handling form submissions from the website.

## Setup Instructions

1. **Navigate to backend folder:**
   ```bash
   cd backend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Environment Variables:**
   - Copy `.env.example` to `.env`
   - Fill in your actual values:
     - `MONGODB_URI`: Your MongoDB Atlas connection string
     - `EMAIL_HOST`: SMTP host (e.g., smtp.gmail.com)
     - `EMAIL_PORT`: SMTP port (587 for TLS, 465 for SSL)
     - `EMAIL_USER`: Your email address
     - `EMAIL_PASS`: Your email app password (not regular password)
     - `ADMIN_EMAIL`: Where notifications should be sent

4. **Start the server:**
   ```bash
   npm start
   ```
   Or for development with auto-restart:
   ```bash
   npm run dev
   ```

## API Endpoints

- `POST /api/messages` - Accepts form data from frontend forms
- `GET /api/health` - Health check endpoint

## Forms Connected

1. **Contact Form** (`/contact`) - Source: `'contact'`
2. **Book Service Form** (`/book-service`) - Source: `'book-service'`
3. **Specific Service Forms** (`/book-service/[serviceId]`) - Source: `'book-service-{serviceId}'`

## Database Schema

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