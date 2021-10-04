
import { Router } from 'express';
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
      this.router.get('/', (res, req) => this.controller.getClient(res, req));

      this.router.get('/:id', (res, req) => this.controller.getClientById(res, req));
      this.router.get('/:id/policies', (res, req) => this.controller.getPoliciesByClient(res, req));
    }

    public getRoutes(): Router {
      return this.router;
    }
}
export default ClientsRoutes;