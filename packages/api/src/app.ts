import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import cors from '@koa/cors';
import helmet from 'koa-helmet';

import { error } from './error';
import ConfigRouter from './config.router';

const app = new Koa();
app.use(cors());
app.use(helmet());
app.use(bodyParser());
app.use(error);

const configRouter = new ConfigRouter(app);
configRouter.config();

export { app };
