/**
 * Function compare two objects of the same type and return the object difference
 * If first object is null/undefined return second object as the difference
 * If second object is null/undefined return empty object, there is no difference
 * @param {Partial<T>}  obj1
 * @param {Partial<T>} obj2
 * @return {Partial<T>}
 */
export function compareAndPickDifference<T>(obj1: Partial<T>, obj2: Partial<T>): Partial<T> {
  if (isNullUndefined(obj2)) {
    return {};
  }

  if (isNullUndefined(obj1)) {
    return obj2;
  }

  const differences: any[] = Object.keys(obj2)
    .map((key) => {
      return !isNullUndefined(obj2[key]) ? (obj1[key] === obj2[key] ? null : key) : null;
    })
    .filter((key) => key);
  const result = differences.reduce((obj, cur) => {
    return { ...obj, [cur]: obj2[cur] };
  }, {});

  return result;
}

/**
 * Check is object null / undefined
 * @param {any} value
 * @return {boolean}
 */
export function isNullUndefined(value: any): boolean {
  return value === null || value === undefined;
}

/**
 * Function check given object keys, are not null. Is value of key is null function delete this key
 * for example:
 * obj = {
 *  a: 'some value',
 *  b: null
 * }
 * notNull(obj)
 * result:
 * {
 *  a: 'some value'
 * }
 * @param {Partial<T>} object
 * @return {Partial<T>}
 */
export function notNull<T>(object: Partial<T>): Partial<T> {
  if (isNullUndefined(object)) {
    return {};
  }

  const differences: any[] = Object.keys(object)
    .map((key) => {
      return !isNullUndefined(object[key]) ? key : null;
    })
    .filter((key) => key);
  const result = differences.reduce((obj, cur) => {
    return { ...obj, [cur]: object[cur] };
  }, {});

  return result;
}
