import { Router } from 'express';
import LoginController from './login.controller';

class LoginRoutes {
    private router: Router;

    private controller: LoginController;

    constructor() {
      this.router = Router();
      this.controller = new LoginController();
      this.loginRoutes();
    }

    private loginRoutes() {
      this.router.post('/', (req, res, next) => {
        this.controller.validateToken(req, res, next);
      });
    }

    public getRoutes(): Router {
      return this.router;
    }
}

export default LoginRoutes;
