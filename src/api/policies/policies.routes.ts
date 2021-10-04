import { Router } from 'express';
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
      this.router.get('/', (res, req) => this.controller.getPolicies(res, req));

      this.router.get('/:id', (res, req) => this.controller.getPolicyById(res, req));
    }

    public getRoutes(): Router {
      return this.router;
    }
}
export default PoliciesRoutes;