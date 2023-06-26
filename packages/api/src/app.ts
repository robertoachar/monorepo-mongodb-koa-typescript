import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import cors from '@koa/cors';
import helmet from 'koa-helmet';

import { error } from './error';
import { mainRouter } from './mainRouter';
import ProfileRouter from './profile/profile.router';

const app = new Koa();
app.use(cors());
app.use(helmet());
app.use(bodyParser());
app.use(error);

const routers = [mainRouter, new ProfileRouter().routers];

routers.forEach((router) => {
  app.use(router.routes());
  app.use(router.allowedMethods());
});

export { app };
