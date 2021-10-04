/* eslint-disable class-methods-use-this */
import axios from 'axios';

class PoliciesService {
  public async getAllDataService(authToken: any): Promise<any> {
    return (
      await axios.get(
        'https://dare-nodejs-assessment.herokuapp.com/api/policies',
        {
          headers: {
            Authorization: authToken,
          },
        },
      )
    ).data;
  }
}
export default PoliciesService;
