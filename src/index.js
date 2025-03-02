import { initMongoConnection } from './db/initMongoConnection.js';
import { setupServer } from './server.js';
import 'dotenv/config';

const bootstrap = async () => {
  try {
    await initMongoConnection();
    setupServer();
  } catch (error) {
    console.log(error.message);
  }
};

bootstrap();
