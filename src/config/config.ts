import dotenv from 'dotenv';

dotenv.config();

export default {
  SERVER: {
    PORT: process.env.SERVER_PORT || 3000,
  },
  DARE_API: {
    URL: process.env.DARE || 'http://localhost:5000/',
    CLIENT_PATH: process.env.DARE_CLIENT_PATH || 'client',
    POLICIES_PATH: process.env.DARE_POLICIES_PATH || 'policies',
    LOGIN_PATH: process.env.DARE_LOGIN_PATH || 'login',
  },
};