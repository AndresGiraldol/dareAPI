/* eslint-disable class-methods-use-this */
import { pick } from 'lodash';

class ArrayUtils {
  /**
   * This method groups an array of objects according to an index
   * @param obj source Object
   * @param index Index to group
   * @returns new Object grouped
   */
  public groupBy(obj: Array<Object>, index: string): Array<any> {
    return obj.reduce((acc: any, current: any) => {
      acc[current[index]] = acc[current[index]] || [];
      acc[current[index]].push(current);
      return acc;
    }, Object.create(null));
  }

  /**
   * This method indexes an array of objects based on an index
   * @param obj source Object
   * @param index index
   * @returns new Object indexed
   */
  public indexArray(obj: Array<Object>, index: string): Array<any> {
    return obj.reduce((acc: any, current: any) => {
      acc[current[index]] = current;
      return acc;
    }, {});
  }

  public extractProperties(obj: Array<any>, props: Array<string>): Array<any> {
    return obj.map((el: Object) => this.pickProps(el, props));
  }

  public pickProps(obj: Object, props: Array<string> | string): any {
    return pick(obj, props);
  }
}

export default ArrayUtils;
