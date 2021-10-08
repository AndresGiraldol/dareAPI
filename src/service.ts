/* eslint-disable class-methods-use-this */
import axios from 'axios';
import { dareLoginRequest } from './api/login/login.model';
import config from './config/config';

class Service {
  protected async getResource(resource: string, authToken: string) {
    return (
      await axios.get(
        `${config.DARE_API.URL}${resource}`,
        {
          headers: {
            Authorization: authToken,
          },
        },
      )
    ).data;
  }

  protected async login(login: dareLoginRequest): Promise<any> {
    return (await axios.post(`${config.DARE_API.URL}${config.DARE_API.LOGIN_PATH}`, login)).data;
  }
}

export default Service;