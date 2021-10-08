
import { Router } from 'express';
import validateHasAuthMiddleware from '../../middlewares/validateHeader';
import ClientsController from './clients.controller';

class ClientsRoutes {
    private router: Router;

    private controller: ClientsController;

    constructor() {
      this.router = Router();
      this.controller = new ClientsController();
      this.policiesRoutes();
    }

    private policiesRoutes() {
      this.router.get('/',
        validateHasAuthMiddleware,
        (res, req, next) => this.controller.getClients(res, req, next));

      this.router.get('/:id',
        validateHasAuthMiddleware,
        (res, req, next) => this.controller.getClientById(res, req, next));

      this.router.get('/:id/policies',
        validateHasAuthMiddleware,
        (res, req, next) => this.controller.getPoliciesByClient(res, req, next));
    }

    public getRoutes(): Router {
      return this.router;
    }
}
export default ClientsRoutes;