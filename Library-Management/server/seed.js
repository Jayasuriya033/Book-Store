import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function AdminAccount() {
  try {
    const adminCount = await prisma.admin.count({
      where: {
        username: 'admin',
      },
    });

    if (adminCount === 0) {
      const hashPassword = await bcrypt.hash('      ', 10);
      await prisma.admin.create({
        data: {
          username: 'admin',
          password: hashPassword,
        },
      });
      console.log('Admin account created');
    } else {
      console.log('Admin account already exists');
    }
  } catch (err) {
    console.error('Error seeding admin account:', err);
  } finally {
    await prisma.$disconnect();
  }
}

AdminAccount();
