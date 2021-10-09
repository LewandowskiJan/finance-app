import { sortByKeyAsc, sortByKeyDesc } from './sort.functions';

import {} from 'jasmine';
interface TestObject {
  name: string;
  age: string;
  hasDog?: boolean;
  items?: number;
}

describe('Sort function sort array by key asc', () => {
  let testArray: TestObject[];

  beforeEach(() => {
    testArray = [
      {
        name: 'Zac',
        age: '45',
        hasDog: false,
      },
      {
        name: 'Andrew',
        age: '34',
        hasDog: false,
      },
      {
        name: 'Barbra',
        age: '24',
        hasDog: false,
      },
      {
        name: 'Xara',
        age: '34',
        hasDog: false,
      },
      {
        name: 'Sasha',
        age: '64',
        hasDog: false,
      },
    ];
  });

  it('should return sorted array asc by name', () => {
    // given
    const sortingKey: string = 'name';

    // when
    const sortedArray: TestObject[] = testArray.sort(sortByKeyAsc<TestObject>(sortingKey));

    // then
    const sortedArrayResult: TestObject[] = [
      {
        name: 'Andrew',
        age: '34',
        hasDog: false,
      },
      {
        name: 'Barbra',
        age: '24',
        hasDog: false,
      },
      {
        name: 'Sasha',
        age: '64',
        hasDog: false,
      },
      {
        name: 'Xara',
        age: '34',
        hasDog: false,
      },
      {
        name: 'Zac',
        age: '45',
        hasDog: false,
      },
    ];

    expect(sortedArray).toEqual(sortedArrayResult);
  });

  it('should return sorted array desc by name', () => {
    // given
    const sortingKey: string = 'name';

    // when
    const sortedArray: TestObject[] = testArray.sort(sortByKeyDesc<TestObject>(sortingKey));

    // then
    const sortedArrayResult: TestObject[] = [
      {
        name: 'Zac',
        age: '45',
        hasDog: false,
      },
      {
        name: 'Xara',
        age: '34',
        hasDog: false,
      },
      {
        name: 'Sasha',
        age: '64',
        hasDog: false,
      },
      {
        name: 'Barbra',
        age: '24',
        hasDog: false,
      },
      {
        name: 'Andrew',
        age: '34',
        hasDog: false,
      },
    ];

    expect(sortedArray).toEqual(sortedArrayResult);
  });
});
