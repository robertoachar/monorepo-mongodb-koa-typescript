import { connect } from '@monorepo/service';
import { app } from './app';
import { config } from './config';

const start = async (): Promise<void> => {
  await connect(config.DATABASE);

  const PORT = 4000;
  app.listen(PORT, () => {
    console.info(`[MAIN] Server is running on port ${PORT}`);
  });
};

start().catch(console.error);
