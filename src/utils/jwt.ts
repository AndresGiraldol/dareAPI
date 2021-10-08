/* eslint-disable class-methods-use-this */
class JwtManager {
  /**
   * This method extract the payload info from the JWT
   * @param token JWT
   * @returns JSON with the payload info
   */
  public parseJwt(token: string): any {
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
}

export default JwtManager;
