import dotenv from 'dotenv';
import connectDB from './db';
import express, { Application } from 'express';
import userRoutes from './routes/userRoutes';

dotenv.config();
connectDB();

const app: Application = express();
app.use(express.json());

app.use('/api/users', userRoutes);

const PORT: number = parseInt(process.env.PORT || '5001', 10);
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
