import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import {findUsername, createUser} from '../dal/userdal.js';

export const registerUser = async ({ username, password }) => {
  const existing = await findUsername(username);
  if (existing) throw new Error('User already exists');
  const hashedPassword = await bcrypt.hash(password, 10);
  return await createUser({ username, password: hashedPassword });
};

export const loginUser = async ({ username, password }) => {
  const user = await findUsername(username);
  if (!user) throw new Error('Invalid credentials');
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) throw new Error('Invalid credentials');
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' });
  return { token };
};