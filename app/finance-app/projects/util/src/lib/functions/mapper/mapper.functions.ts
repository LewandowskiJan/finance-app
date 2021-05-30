/**
 *
 * @param {any} object - any object, default {}
 * @return {ElementArrayType[]} array, if object empty, return []
 */
export function mapObjectToArray<ElementArrayType>(object: any = {}): ElementArrayType[] {
  return Object.keys(object).reduce((resultArray, key: string | number) => {
    resultArray.push(object[key]);
    return resultArray;
  }, []);
}
