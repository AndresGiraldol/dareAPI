/* eslint-disable max-len */
import { NextFunction, Request, Response } from 'express';
import ClientService from './clients.service';

class ClientsController {
    private service: ClientService;

    constructor() {
      this.service = new ClientService();
    }

    public async getClients(req: Request, res: Response, next: NextFunction) {
      try {
        const { limit }: any = req?.query?.limit ? req?.query : { limit: 10 };
        const { authorization } = req?.headers;
        const policieProps = ['id', 'amountInsured', 'inceptionDate'];
        const clients: Object[] = await this.service.getAllClients(authorization, policieProps);
        const response = clients.slice(0, parseInt(limit, 10));
        res.status(200).json(response);
      } catch (err: any) {
        next(err);
      }
    }

    public async getClientById(req: Request, res: Response, next: NextFunction) {
      try {
        const { authorization } = req?.headers;
        const { id } = req.params;
        const policieProps = ['id', 'amountInsured', 'inceptionDate'];
        const response: Array<Object> = await this.service.getClientById(authorization, id, policieProps);
        res.status(200).json(response);
      } catch (err: any) {
        next(err);
      }
    }

    public async getPoliciesByClient(req: Request, res: Response, next: NextFunction) {
      try {
        const { authorization } = req?.headers;
        const { id } = req.params;
        const policieProps = ['id', 'amountInsured', 'email', 'inceptionDate', 'installmentPayment'];
        const { policies } = await this.service.getClientById(authorization, id, policieProps);
        res.status(200).json(policies);
      } catch (err) {
        next(err);
      }
    }
}

export default ClientsController;