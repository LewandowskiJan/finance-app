/**
 *
 * @param {any} object - any object, default {}
 * @return {ElementArrayType[]} array, if object empty, return []
 */
export function mapObjectToArray<ElementArrayType>(object: any = {}): ElementArrayType[] {
  if (typeof object !== 'object' || object === null) {
    return [];
  }

  return Object.keys(object).reduce((resultArray, key: string | number) => {
    resultArray.push(object[key]);
    return resultArray;
  }, []);
}
