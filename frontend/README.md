# Frontend Application - GT Project

This is the Next.js frontend application for the GT Project, a premium tech solutions company website.

## Quick Start

```bash
# Install dependencies
npm install

# Create environment file
cp .env.example .env.local

# Start development server
npm run dev
```

Visit `http://localhost:3000` to view the application.

## Environment Variables

Create a `.env.local` file in the frontend directory:

```
NEXT_PUBLIC_API_URL=http://localhost:5000/api
NODE_ENV=development
```

- `NEXT_PUBLIC_API_URL`: Backend API URL for API calls
- `NODE_ENV`: Environment mode (development/production)

## Project Structure

```
app/
├── layout.tsx              # Root layout
├── page.tsx                # Home page
├── about/page.tsx          # About page
├── services/page.tsx       # Services page
├── projects/page.tsx       # Projects page
├── contact/page.tsx        # Contact page
├── privacy-policy/page.tsx # Privacy policy
├── terms/page.tsx          # Terms & conditions
├── book-service/
│   ├── page.tsx           # Book service page
│   └── [serviceId]/page.tsx # Service detail
└── globals.css            # Global styles

components/
├── Header.tsx             # Navigation header
├── Footer.tsx             # Footer
├── Hero.tsx               # Hero section
├── Services.tsx           # Services showcase
├── WhyChooseUs.tsx        # Value proposition
├── FounderSection.tsx     # Team section
├── CTABanner.tsx          # CTA section
├── theme-provider.tsx     # Theme provider
└── ui/                    # UI components

lib/
├── api.ts                 # API functions for backend communication
└── utils.ts               # Utility functions
```

## Available Scripts

```bash
npm run dev      # Start development server on port 3000
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Features

- ✅ Responsive design
- ✅ TypeScript support
- ✅ Tailwind CSS styling
- ✅ Dark mode (CSS variables)
- ✅ API integration with backend
- ✅ Form handling with React Hook Form
- ✅ Icon library with Lucide React
- ✅ SEO optimized

## API Integration

The frontend communicates with the backend API through the `lib/api.ts` file.

### Available API Functions

- `submitReview(reviewData)` - Submit a review
- `fetchReviews()` - Get all reviews
- `fetchReviewById(id)` - Get a specific review
- `deleteReview(id)` - Delete a review

### Example Usage

```typescript
import { submitReview, fetchReviews } from '@/lib/api';

// Submit a review
const response = await submitReview({
  name: "John Doe",
  role: "CEO",
  rating: 5,
  review: "Great service!"
});

// Fetch all reviews
const result = await fetchReviews();
if (result.success) {
  console.log(result.data); // Array of reviews
}
```

## Build & Deployment

### Production Build
```bash
npm run build
npm run start
```

### Deployment (Vercel)
1. Connect GitHub repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on git push

## Troubleshooting

### Port 3000 Already in Use
```bash
npm run dev -- -p 3001
```

### Backend API Not Responding
1. Ensure backend is running on port 5000
2. Check `NEXT_PUBLIC_API_URL` in `.env.local`
3. Verify CORS settings in backend

### Build Errors
```bash
# Clear Next.js cache
rm -rf .next

# Reinstall dependencies
npm install

# Rebuild
npm run build
```

## Performance Tips

- Images are optimized using Next.js Image component
- CSS is minimized with Tailwind CSS
- Code splitting is automatic
- Use `npm run build` to analyze production build size

## Support

For issues or questions, contact us at:
- Email: gautamtechnical493@gmail.com
- Phone: +91 7355474484
