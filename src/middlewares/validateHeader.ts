import { NextFunction, Request, Response } from 'express';

function validateHasAuthMiddleware(req: Request, res: Response, next: NextFunction) {
  const { authorization } = req?.headers;
  if (!authorization) {
    next(new Error('Post not found'));
  } else {
    next();
  }
}
export default validateHasAuthMiddleware;