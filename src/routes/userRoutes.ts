import express, { Request, Response } from 'express';
import User, { IUser } from '../models/Users';

const router = express.Router();

// register user

router.post(
  './register',
  async (req: Request, res: Response): Promise<void> => {
    const { name, email, password } = req.body;
    try {
      const user: IUser = new User({ name, email, password });
      await user.save();
      res.status(201).json({ message: 'User registered successfully.', user });
    } catch (error) {
      res.status(400).json({ error: (error as Error).message });
    }
  }
);

// get users
router.get('/', async (_req: Request, res: Response): Promise<void> => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
});

export default router;
