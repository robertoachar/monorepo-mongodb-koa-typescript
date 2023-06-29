import mongoose from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';

export const connect = async (connection: string): Promise<typeof mongoose> =>
  mongoose.connect(connection);

export const disconnect = async (): Promise<void> => mongoose.disconnect();

let mongoTest: MongoMemoryServer;
export const connectTest = async (): Promise<void> => {
  mongoTest = await MongoMemoryServer.create();
  const uri = mongoTest.getUri();
  await connect(uri);
};

export const disconnectTest = async (): Promise<void> => {
  await disconnect();
  await mongoTest.stop();
};

mongoose.connection
  .on('connecting', () => console.info('[DATABASE] Connecting database'))
  .on('connected', () => console.info('[DATABASE] Database connected'))
  .on('disconnected', () => console.warn('[DATABASE] Database disconnected'))
  .on('open', () => console.info('[DATABASE] Connection opened'))
  .on('close', () => console.warn('[DATABASE] Connection closed'))
  .on('error', (error) => console.error(`[DATABASE] ${error.message}`));
