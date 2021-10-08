/* eslint-disable class-methods-use-this */
import Service from '../../service';
import ArrayUtils from '../../utils/arrayUtil';
import config from '../../config/config';

class PoliciesService extends Service {
  private arrayUtil: ArrayUtils;

  constructor() {
    super();
    this.arrayUtil = new ArrayUtils();
  }

  public async getAllPolicies(authToken: any, props: Array<string>) {
    const policies = await this.getResource(config.DARE_API.POLICIES_PATH, authToken);
    return Promise.resolve(this.arrayUtil.extractProperties(policies, props));
  }

  public async getPolicyById(authToken: any, id:string, props: Array<string>) {
    const allPolicies = await this.getAllPolicies(authToken, props);
    const policy = allPolicies.find((ele: any) => ele.id === id);
    return Promise.resolve(this.arrayUtil.pickProps(policy, props));
  }
}
export default PoliciesService;
