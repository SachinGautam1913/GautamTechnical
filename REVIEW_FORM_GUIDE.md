# 📝 Review Form Integration Guide

This guide explains how to use the `ReviewForm` component and the `/reviews` page for collecting customer testimonials.

## Overview

The review form system includes:
- **ReviewForm Component** - Standalone form for collecting reviews
- **Reviews Page** - Dedicated page to submit and view reviews
- **API Integration** - Connects to backend `/api/reviews` endpoint
- **Full Validation** - Client-side and server-side validation
- **Loading & Error States** - User feedback during submission

---

## Components

### ReviewForm Component

**Location:** `frontend/components/ReviewForm.tsx`

**Features:**
- ✅ Form fields: name, role, rating (1-5 stars), review text
- ✅ Real-time character counters
- ✅ Interactive star rating picker
- ✅ Form validation with error messages
- ✅ Loading state with spinner
- ✅ Success message display
- ✅ Automatic form reset after submit
- ✅ TypeScript types included
- ✅ Responsive design
- ✅ Accessible (labels, ARIA attributes)

**Full TypeScript Types:**
```typescript
interface ReviewFormData {
  name: string;
  role: string;
  rating: number;
  review: string;
}

interface SubmitResponse {
  success: boolean;
  message?: string;
  error?: string;
  data?: ReviewFormData & { _id?: string; createdAt?: string };
}

interface FormState {
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
  errorMessage: string;
  successMessage: string;
}
```

---

## Usage

### 1. On Dedicated Reviews Page

**File:** `frontend/app/reviews/page.tsx`

This page displays:
- Submit form at the top
- List of all submitted reviews below
- Loading states
- Error handling

**Access:** `http://localhost:3000/reviews`

### 2. Import in Any Page

```typescript
import ReviewForm from "@/components/ReviewForm";

export default function MyPage() {
  return (
    <div>
      <ReviewForm />
    </div>
  );
}
```

### 3. Add to Home Page

```typescript
import ReviewForm from "@/components/ReviewForm";

export default function Home() {
  return (
    <main>
      <section className="py-16 bg-card/30">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Share Your <span className="text-accent">Feedback</span>
          </h2>
          <ReviewForm />
        </div>
      </section>
    </main>
  );
}
```

---

## How It Works

### Form Fields

| Field | Type | Required | Validation |
|-------|------|----------|-----------|
| name | string | Yes | 1-100 characters |
| role | string | Yes | 1-100 characters |
| rating | number | Yes | 1-5 stars |
| review | string | Yes | 1-1000 characters |

### Form Workflow

```
1. User fills form
   ↓
2. User clicks submit
   ↓
3. Client-side validation
   ├─ If invalid: Show error message
   └─ If valid: Continue
   ↓
4. Show loading state
   ↓
5. Send POST to /api/reviews
   ├─ Network error: Show error
   └─ Success: Continue
   ↓
6. Show success message
   ↓
7. Reset form
   ↓
8. Clear success after 5 sec
```

### API Request

**Endpoint:** `POST http://localhost:5000/api/reviews`

**Headers:**
```json
{
  "Content-Type": "application/json"
}
```

**Body:**
```json
{
  "name": "John Doe",
  "role": "CEO",
  "rating": 5,
  "review": "Great service!"
}
```

**Success Response (201):**
```json
{
  "success": true,
  "message": "Review created successfully",
  "data": {
    "_id": "65f4a2b3c1d2e3f4g5h6i7j8",
    "name": "John Doe",
    "role": "CEO",
    "rating": 5,
    "review": "Great service!",
    "createdAt": "2025-03-18T10:30:00.000Z",
    "updatedAt": "2025-03-18T10:30:00.000Z"
  }
}
```

**Error Response:**
```json
{
  "success": false,
  "error": "Name is required"
}
```

---

## State Management

The component uses `useState` to manage:

### Form Data State
```typescript
const [formData, setFormData] = useState<ReviewFormData>({
  name: "",
  role: "",
  rating: 0,
  review: "",
});
```

### Form State
```typescript
const [formState, setFormState] = useState<FormState>({
  isLoading: false,    // During API call
  isSuccess: false,    // After successful submit
  isError: false,      // When error occurs
  errorMessage: "",    // Error text
  successMessage: "",  // Success text
});

const [hoveredRating, setHoveredRating] = useState<number>(0);  // Star rating hover
```

---

## Key Functions

### handleChange()
Handles input changes for text fields (name, role, review)

```typescript
const handleChange = (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
): void => {
  const { name, value } = e.target;
  setFormData((prev) => ({
    ...prev,
    [name]: value,
  }));
  // Also clears error on input
};
```

### handleRatingChange()
Handles star rating selection

```typescript
const handleRatingChange = (value: number): void => {
  setFormData((prev) => ({
    ...prev,
    rating: value,
  }));
};
```

### validateForm()
Client-side validation

```typescript
const validateForm = (): boolean => {
  // Validates:
  // - Name not empty
  // - Role not empty
  // - Rating selected
  // - Review not empty
  // - Review length < 1000
};
```

### handleSubmit()
Main form submission

```typescript
const handleSubmit = async (
  e: React.FormEvent<HTMLFormElement>
): Promise<void> => {
  e.preventDefault();
  
  // Validate form
  if (!validateForm()) return;
  
  // Set loading state
  // Make API call to http://localhost:5000/api/reviews
  // Handle success or error
  // Reset form if success
};
```

---

## Environment Configuration

The form uses `NEXT_PUBLIC_API_URL` environment variable.

**Frontend (.env.local):**
```
NEXT_PUBLIC_API_URL=http://localhost:5000/api
NODE_ENV=development
```

**Usage in code:**
```typescript
const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";
```

---

## Error Handling

The form handles various errors:

1. **Validation Errors** - Shown immediately before submit
2. **Network Errors** - Shown if API not reachable
3. **API Errors** - Shown from server response
4. **Response Errors** - Shown if response not success

All errors are user-friendly messages.

---

## Success Handling

After successful submission:
1. Show success message
2. Automatically reset form
3. Clear success message after 5 seconds

Users can then submit another review immediately.

---

## Styling

The form uses Tailwind CSS classes and respects the theme:

- **Colors:** Accent color (#d4af37) for highlights
- **Responsive:** Mobile-first design
- **States:** Disabled state during loading
- **Dark Mode:** Fully supported
- **Icons:** Lucide React for star and loader icons

---

## Display Reviews

View submitted reviews on the dedicated Reviews page:

**Page:** `frontend/app/reviews/page.tsx`

**Features:**
- Lists all submitted reviews
- Shows rating with stars
- Shows name and role
- Shows submission date
- Responsive grid layout
- Loading state while fetching
- Error handling

---

## Testing

### Manual Testing

1. **Start Backend:**
   ```bash
   cd backend
   npm run dev
   ```

2. **Start Frontend:**
   ```bash
   cd frontend
   npm run dev
   ```

3. **Test Form:**
   - Go to `http://localhost:3000/reviews`
   - Fill the form
   - Submit
   - See success message
   - Form resets
   - View review in list below

### Using curl

```bash
curl -X POST http://localhost:5000/api/reviews \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "role": "Tester",
    "rating": 5,
    "review": "Great service!"
  }'
```

---

## Customization

### Change Colors

In `ReviewForm.tsx`, modify the Tailwind classes:

```typescript
// Change accent color backgrounds
bg-accent/10  // Success messages
border-accent // Focused inputs
```

### Change Character Limits

In `ReviewForm.tsx`:

```typescript
// Name limit (currently 100)
maxLength={100}

// Role limit (currently 100)
maxLength={100}

// Review limit (currently 1000)
maxLength={1000}
```

### Change Button Text

```typescript
// In submit button
"Submit Review"  // Change this text

// In loading state
"Submitting..."  // Change this text
```

### Add More Fields

1. Add to `ReviewFormData` interface
2. Add state in `useState`
3. Add input field in form
4. Add to validation
5. Add to API request body

---

## Troubleshooting

### Form Not Submitting

**Check:**
1. Backend running on port 5000?
2. `NEXT_PUBLIC_API_URL` correct in `.env.local`?
3. Check browser console for errors
4. Check network tab in DevTools

### Validation Always Fails

**Check:**
1. All required fields filled?
2. Rating selected (click a star)?
3. Check `validateForm()` logic
4. See error message on form

### Success Message Not Showing

**Check:**
1. Network response status (201)?
2. Response data has `success: true`?
3. Check for API errors

### Button Stays Loading

**Check:**
1. Network request hanging?
2. API endpoint responding?
3. Check backend logs
4. Refresh page and try again

---

## API Endpoint Reference

### Get All Reviews
```bash
GET http://localhost:5000/api/reviews
```

### Get One Review
```bash
GET http://localhost:5000/api/reviews/:id
```

### Delete Review
```bash
DELETE http://localhost:5000/api/reviews/:id
```

See [backend/README.md](/backend/README.md) for full API docs.

---

## Security Notes

- ✅ Form validation prevents invalid data
- ✅ Backend validation ensures data integrity
- ✅ CORS protection enabled
- ✅ Error messages don't expose sensitive info
- ✅ Environment variables hide API URL

---

## Performance

- Lazy loading of components
- Optimized re-renders
- Character counter doesn't re-render form
- Star hover state isolated
- No unnecessary API calls

---

## Accessibi lity

- ✅ Proper labels for all inputs
- ✅ Error messages linked to fields
- ✅ Keyboard navigation supported
- ✅ Focus rings visible
- ✅ ARIA labels for star rating
- ✅ Semantic HTML

---

## Next Steps

1. ✅ Form is production-ready
2. Add form to more pages as needed
3. Customize colors/text if desired
4. Deploy and monitor submissions
5. Consider adding email notifications

---

## Support

For issues:
- Check troubleshooting section above
- Review backend API details
- Check browser DevTools network tab
- Contact: gautamtechnical493@gmail.com

---

**Happy collecting reviews!** ⭐
