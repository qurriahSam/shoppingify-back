import mongoose from 'mongoose';
import { IUser } from '../../index';
import bcrypt from 'bcrypt';

const Schema = mongoose.Schema;

const UserSchema = new Schema<IUser>({
  email: { type: String, required: true, trim: true, unique: true },
  password: { type: String, required: true },
});

UserSchema.pre('save', async function (next) {
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
});

export const User = mongoose.model('user', UserSchema);
