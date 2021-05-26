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

export function isNullUndefined(value: any): boolean {
  return value === null || value === undefined;
}

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
