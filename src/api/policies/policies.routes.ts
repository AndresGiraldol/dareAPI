/* eslint-disable max-len */
import {
  NextFunction, Request, Response, Router,
} from 'express';
import validateHasAuthMiddleware from '../../middlewares/validateHeader';
import PoliciesController from './policies.controller';

class PoliciesRoutes {
    private router: Router;

    private controller: PoliciesController;

    constructor() {
      this.router = Router();
      this.controller = new PoliciesController();
      this.policiesRoutes();
    }

    private policiesRoutes() {
      this.router.get('/',
        validateHasAuthMiddleware,
        (req: Request, res: Response, next: NextFunction) => this.controller.getPolicies(req, res, next));

      this.router.get('/:id',
        validateHasAuthMiddleware,
        (req: Request, res: Response, next: NextFunction) => this.controller.getPolicyById(req, res, next));
    }

    public getRoutes(): Router {
      return this.router;
    }
}
export default PoliciesRoutes;