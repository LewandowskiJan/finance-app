/**
 * Sort asc by key name
 * @param {string} keyName
 * @return {T[]} sorted array
 */
export function sortByKeyAsc<T>(keyName: string): (first: T, second: T) => -1 | 0 | 1 {
  return (first: T, second: T) => (first[keyName] === second[keyName] ? 0 : first[keyName] < second[keyName] ? -1 : 1);
}

/**
 * Sort desc by key name
 * @param {string} keyName
 * @return {T[]} sorted array
 */
export function sortByKeyDesc<T>(keyName: string): (first: T, second: T) => -1 | 0 | 1 {
  return (first: T, second: T) => (first[keyName] === second[keyName] ? 0 : first[keyName] < second[keyName] ? 1 : -1);
}
