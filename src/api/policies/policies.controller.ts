/* eslint-disable class-methods-use-this */
import { Request, Response } from 'express';
import PoliciesService from './policies.service';

class PoliciesController {
    private service: PoliciesService;

    constructor() {
      this.service = new PoliciesService();
    }

    public async getPolicies(req: Request, res: Response) {
      try {
        const { limit }: any = req?.query?.limit ? req.query : { limit: 10 };
        const { authorization } = req?.headers;
        const axiosResponse: any = await this.service.getAllDataService(authorization);

        const response = axiosResponse.splice(0, parseInt(limit, 10));
        res.status(200).json(response);
      } catch (err: any) {
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
    }

    public async getPolicyById(req: Request, res: Response) {
      try {
        const { authorization } = req?.headers;
        const { id } = req.params;
        const axiosResponse: Array<Object> = await this.service.getAllDataService(authorization);
        const response = axiosResponse.find((ele: any) => ele.id === id);
        res.status(200).json(response);
      } catch (err) {
        res.status(500).json(err);
      }
    }
}

export default PoliciesController;