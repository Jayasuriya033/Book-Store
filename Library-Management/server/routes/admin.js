import express from 'express';
import { PrismaClient } from '@prisma/client';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import axios from 'axios';

const prisma = new PrismaClient();
const adminRouter = express.Router();

adminRouter.post('/login', async (req, res) => {
  try {
    const { username, password, captchaToken } = req.body;

    const secretKey = process.env.RECAPTCHA_SECRET_KEY;
    const response = await axios.post(
      `https://www.google.com/recaptcha/api/siteverify`,
      {},
      {
        params: {
          secret: secretKey,
          response: captchaToken,
        },
      }
    );

    if (!response.data.success) {
      return res.status(400).json({ message: 'Failed captcha verification' });
    }

    const admin = await prisma.admin.findUnique({ where: { username } });
    if (!admin) {
      return res.status(401).json({ message: 'Admin not registered' });
    }

    const validPassword = await bcrypt.compare(password, admin.password);
    if (!validPassword) {
      return res.status(401).json({ message: 'Wrong password' });
    }

    const token = jwt.sign(
      { username: admin.username, role: 'admin' },
      process.env.ADMIN_KEY,
      { expiresIn: '1h' } 
    );

    res.cookie('token', token, { httpOnly: true, secure: process.env.NODE_ENV === 'production' });
    return res.json({ login: true, username: admin.username, role: 'admin' });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Internal server error' });
  }
});

export default adminRouter;
