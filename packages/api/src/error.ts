import * as Koa from 'koa';
import { env } from 'process';

export const error = async (ctx: Koa.Context, next: Koa.Next): Promise<void> =>
  next().catch((err) => {
    const networkError = err.response && err.response.data;
    const message = networkError ? err.response.data.message : err.message;
    const internalServerError =
      env['STAGE'] === 'dev' ? message : 'Something is broken';

    switch (err.name) {
      case 'Error' || 'TypeError':
        ctx.status = 422;
        ctx.body = { message };
        break;

      case 'UnauthorizedError':
        ctx.status = 401;
        ctx.body = { message };
        break;

      case 'ForbiddenError':
        ctx.status = 403;
        ctx.body = { message };
        break;

      default:
        ctx.status = 500;
        ctx.body = { message: internalServerError };
    }
  });
