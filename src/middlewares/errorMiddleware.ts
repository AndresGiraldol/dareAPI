import { Request, Response } from 'express';

// eslint-disable-next-line no-unused-vars
function errorMiddleware(err: any, req: Request, res: Response, next: any) {
  if (err.response) {
    const { statusCode, error, message } = err.response.data;
    const errorResponse: any = {
      code: statusCode,
      message: `${error} - ${message}`,
    };
    res.status(statusCode).json(errorResponse);
    return;
  }
  res.status(500).json({
    code: 500,
    message: 'Internal server error',
  });
}
export default errorMiddleware;