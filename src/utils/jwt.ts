/* eslint-disable class-methods-use-this */
import * as JWT from 'jsonwebtoken';

class JwtManager {
  public parseJwt(token: string) {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(
      Buffer.from(base64, 'base64').toString()
        .split('')
        .map((c: any) => `%${`00${c.charCodeAt(0).toString(16)}`.slice(-2)}`)
        .join(''),
    );

    return JSON.parse(jsonPayload);
  }

  public sing(payload: string | object | Buffer, secret: JWT.Secret, options?: JWT.SignOptions) {
    return JWT.sign(payload, secret, options);
  }

  public verify(token: string, secret: JWT.Secret, callback: JWT.VerifyOptions) {
    return JWT.verify(token, secret, callback);
  }
}

export default JwtManager;
