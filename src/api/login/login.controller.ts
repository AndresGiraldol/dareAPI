import axios from 'axios';
import { Request, Response } from 'express';
import JwtManager from '../../utils/jwt';

class LoginController {
  private jwt: JwtManager;

  constructor() {
    this.jwt = new JwtManager();
  }

  // eslint-disable-next-line class-methods-use-this
  public async validateToken(req: Request, res: Response): Promise<void> {
    const { username, password } = req.body;
    const loginRequest = {
      client_id: username,
      client_secret: password,
    };
    try {
      const responseApi: any = (
        await axios.post(
          'https://dare-nodejs-assessment.herokuapp.com/api/login',
          loginRequest,
        )
      ).data;
      const { exp } = this.jwt.parseJwt(responseApi.token);
      const response: any = {
        token: responseApi.token,
        type: responseApi.type,
        expires_in: exp,
      };
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
}

export default LoginController;
