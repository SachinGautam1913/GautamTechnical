import express, { Express, Request, Response, NextFunction } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/database';
import reviewRoutes from './routes/reviews';

dotenv.config();

const app: Express = express();
const PORT: number = parseInt(process.env.PORT || '5000', 10);
const NODE_ENV: string = process.env.NODE_ENV || 'development';

// Middleware
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  credentials: true,
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect to MongoDB
connectDB();

// API Routes
app.use('/api/reviews', reviewRoutes);

// Health check endpoint
app.get('/api/health', (req: Request, res: Response): void => {
  res.status(200).json({
    status: 'ok',
    message: 'Backend server is running',
    port: PORT,
    environment: NODE_ENV,
    timestamp: new Date().toISOString(),
  });
});

// Root endpoint
app.get('/', (req: Request, res: Response): void => {
  res.status(200).json({
    message: 'GT Project Backend API',
    version: '1.0.0',
    docs: '/api/health',
  });
});

// 404 handler
app.use((req: Request, res: Response): void => {
  res.status(404).json({
    success: false,
    message: 'Route not found',
    path: req.path,
  });
});

// Error handling middleware
app.use((err: Error, req: Request, res: Response, next: NextFunction): void => {
  console.error('Error:', err);
  res.status(500).json({
    success: false,
    message: 'Internal server error',
    error: NODE_ENV === 'development' ? err.message : 'Something went wrong',
  });
});

// Start server
app.listen(PORT, '0.0.0.0', (): void => {
  console.log(`
╭─────────────────────────────────────╮
│   GT Project Backend Server Started │
├─────────────────────────────────────┤
│  Environment: ${NODE_ENV.padEnd(27)}│
│  Port:       ${String(PORT).padEnd(27)}│
│  URL:        http://localhost:${PORT.toString().padEnd(20)}│
╰─────────────────────────────────────╯
  `);
});

export default app;
