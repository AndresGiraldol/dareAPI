import Service from '../../service';
import JwtManager from '../../utils/jwt';

class LoginService extends Service {
    private jwt: JwtManager;

    constructor() {
      super();
      this.jwt = new JwtManager();
    }

    public async getAPIToken(username: string, password: string) {
      const loginRequest = {
        client_id: username,
        client_secret: password,
      };
      const loginInfo = await this.login(loginRequest);
      const { exp } = this.jwt.parseJwt(loginInfo.token);
      return {
        token: loginInfo.token,
        type: loginInfo.type,
        expires_in: exp,
      };
    }
}

export default LoginService;