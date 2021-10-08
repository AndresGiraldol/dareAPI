/* eslint-disable max-len */
import config from '../../config/config';
import Service from '../../service';
import ArrayUtils from '../../utils/arrayUtil';
import { ClientPolicie } from '../policies/policies.model';
import { ClientModel } from './client.model';

class ClientService extends Service {
  private arrayUtil: ArrayUtils;

  constructor() {
    super();
    this.arrayUtil = new ArrayUtils();
  }

  public async getAllClients(authToken: any, props: Array<string>): Promise<ClientModel[]> {
    const clients: ClientModel[] = await this.getResource(config.DARE_API.CLIENT_PATH, authToken);
    if (clients.length > 0) {
      const policies: ClientPolicie[] = await this.getResource(config.DARE_API.POLICIES_PATH, authToken);
      const policiesGroupByClient: Array<any> = this.arrayUtil.groupBy(policies, 'clientId');
      const mixed: ClientModel[] = clients.map((x:any) => ({
        ...x,
        policies: this.arrayUtil.extractProperties(policiesGroupByClient[x.id] || [], props),
      }));
      return Promise.resolve(mixed);
    }
    return Promise.resolve(clients);
  }

  public async getClientById(authToken: any, id: string, props: Array<string>): Promise<any> {
    const clientWithPolicies: any = this.arrayUtil.indexArray(await this.getAllClients(authToken, props), 'id');
    return Promise.resolve(clientWithPolicies[id]);
  }
}
export default ClientService;
