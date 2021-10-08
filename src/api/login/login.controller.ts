import { NextFunction, Request, Response } from 'express';
import LoginService from './login.service';

class LoginController {
  private service: LoginService;

  constructor() {
    this.service = new LoginService();
  }

  public async validateToken(req: Request, res: Response, next: NextFunction): Promise<void> {
    const { username, password } = req.body;
    try {
      const response = await this.service.getAPIToken(username, password);
      res.status(200).json(response);
    } catch (err: any) {
      next(err);
    }
  }
}

export default LoginController;
