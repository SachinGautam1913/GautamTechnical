# Backend Integration Setup

This project now includes a complete backend for handling form submissions with MongoDB Atlas and email notifications.

## Setup Instructions

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Environment Variables:**
   - Copy `.env.example` to `.env`
   - Fill in your actual values:
     - `MONGODB_URI`: Your MongoDB Atlas connection string
     - `EMAIL_HOST`: SMTP host (e.g., smtp.gmail.com)
     - `EMAIL_PORT`: SMTP port (587 for TLS, 465 for SSL)
     - `EMAIL_USER`: Your email address
     - `EMAIL_PASS`: Your email app password (not regular password)
     - `ADMIN_EMAIL`: Where notifications should be sent

3. **Start the backend server:**
   ```bash
   npm run server
   ```
   Or for development with auto-restart:
   ```bash
   npm run server:dev
   ```

4. **Start the frontend (in a separate terminal):**
   ```bash
   npm run dev
   ```

## API Endpoints

- `POST /api/messages` - Accepts form data from all frontend forms
- `GET /api/health` - Health check endpoint

## Forms Connected

1. **Contact Form** (`/contact`) - Source: 'contact'
2. **Book Service Form** (`/book-service`) - Source: 'book-service'
3. **Specific Service Forms** (`/book-service/[serviceId]`) - Source: 'book-service-{serviceId}'

## Database Schema

Messages are stored in MongoDB with the following fields:
- name (required)
- email (required)
- phone
- subject
- message (required)
- source (required)
- company
- service
- projectDetails
- budget
- timeline
- preferredContact
- additionalInfo
- createdAt (auto-generated)

## Email Notifications

When a message is submitted:
1. Data is saved to MongoDB
2. Email notification is sent to ADMIN_EMAIL with all form details
3. If email fails, the message is still saved (error is logged)

## Production Deployment

For production:
1. Set up MongoDB Atlas cluster
2. Configure SMTP email service
3. Set environment variables
4. Deploy both frontend and backend

The backend runs on port 3001 by default, frontend on 3000.