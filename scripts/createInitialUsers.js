import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';
import User from '../server/models/User.js';

dotenv.config();

async function createInitialUsers() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB');

    // Create admin user
    const adminPassword = await bcrypt.hash('admin123', 8);
    const admin = new User({
      email: 'admin@pureenergycoaching.com',
      password: adminPassword,
      name: 'Admin',
      role: 'admin',
    });
    await admin.save();
    console.log('Admin user created');

    // Create regular user
    const userPassword = await bcrypt.hash('user123', 8);
    const user = new User({
      email: 'user@example.com',
      password: userPassword,
      name: 'Test User',
      role: 'user',
    });
    await user.save();
    console.log('Regular user created');

    console.log('\nInitial users created successfully:');
    console.log('Admin - email: admin@pureenergycoaching.com, password: admin123');
    console.log('User - email: user@example.com, password: user123');

  } catch (error) {
    console.error('Error creating initial users:', error);
  } finally {
    await mongoose.disconnect();
  }
}

createInitialUsers();