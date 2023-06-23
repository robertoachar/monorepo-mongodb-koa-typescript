import { env } from 'process';

export const error = async (ctx, next) =>
  next().catch((err) => {
    const networkError = err.response && err.response.data;
    const message = networkError ? err.response.data.message : err.message;
    const internalServerError =
      env['STAGE'] === 'dev' ? message : 'Something is broken';

    console.log(err.name);

    switch (err.name) {
      case 'Error':
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
