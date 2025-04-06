import mongoose from 'mongoose';

import { getEnvVar } from '../utils/getEnvVar.js';

export const initMongoConnection = async () => {
  const user = getEnvVar('MONGODB_USER');
  const pwd = getEnvVar('MONGODB_PASSWORD');
  const url = getEnvVar('MONGODB_URL');
  const db = getEnvVar('MONGODB_DB');
  const mongodbUrl = `mongodb+srv://${user}:${pwd}@${url}/${db}?retryWrites=true&w=majority&appName=Cluster0`;

  try {
    await mongoose.connect(mongodbUrl);
    console.log('Mongo connection successfully established!');
  } catch (error) {
    console.log('Error connecting to MongoDB:', error);
    throw error;
  }
};
