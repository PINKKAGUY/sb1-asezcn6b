import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';
import { connectDB } from '../server/config/mongodb.js';
import User from '../server/models/User.js';

dotenv.config();

async function initDB() {
  try {
    await connectDB();

    // Clear existing users
    await User.deleteMany({});

    // Create admin user
    const adminPassword = await bcrypt.hash('admin', 10);
    await User.create({
      email: 'admin',
      password: adminPassword,
      name: 'Sarah Martin',
      role: 'admin',
      profileImage: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1200',
      subscription: {
        type: null,
        startDate: null,
        endDate: null
      }
    });

    // Create demo client user
    const userPassword = await bcrypt.hash('user', 10);
    await User.create({
      email: 'user',
      password: userPassword,
      name: 'Marie Laurent',
      role: 'user',
      profileImage: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1200',
      subscription: {
        type: '1year',
        startDate: new Date('2024-01-01'),
        endDate: new Date('2024-12-31')
      }
    });

    console.log('Database initialized successfully!');
    console.log('\nDemo Accounts Created:');
    console.log('\nAdmin Account:');
    console.log('Email: admin');
    console.log('Password: admin');
    console.log('Role: Administrator');
    console.log('\nClient Account:');
    console.log('Email: user');
    console.log('Password: user');
    console.log('Role: Premium Member');

  } catch (error) {
    console.error('Error initializing database:', error);
  } finally {
    await mongoose.disconnect();
  }
}

initDB();