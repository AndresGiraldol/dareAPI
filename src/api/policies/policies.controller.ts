/* eslint-disable max-len */
import { NextFunction, Request, Response } from 'express';
import { PolicieModel } from './policies.model';
import PoliciesService from './policies.service';

class PoliciesController {
    private service: PoliciesService;

    private policesProps: Array<string> = ['id', 'amountInsured', 'email', 'inceptionDate', 'installmentPayment'];

    constructor() {
      this.service = new PoliciesService();
    }

    public async getPolicies(req: Request, res: Response, next: NextFunction) {
      try {
        const { limit }: any = req?.query?.limit ? req.query : { limit: 10 };
        const { authorization } = req?.headers;
        const policies: Array<PolicieModel> = await this.service.getAllPolicies(authorization, this.policesProps);
        const response: Array<PolicieModel> = policies.slice(0, parseInt(limit, 10));
        res.status(200).json(response);
      } catch (err: any) {
        next(err);
      }
    }

    public async getPolicyById(req: Request, res: Response, next: NextFunction) {
      try {
        const { authorization } = req?.headers;
        const { id } = req.params;
        const policy: PolicieModel = await this.service.getPolicyById(authorization, id, this.policesProps);
        if (policy.length) {
          res.status(200).json(policy);
        } else {
          const errorResponse: any = {
            code: 404,
            message: 'Not Found - Resource required does not exist or was deleted',
          };
          res.status(404).json(errorResponse);
        }
      } catch (err: any) {
        next(err);
      }
    }
}

export default PoliciesController;