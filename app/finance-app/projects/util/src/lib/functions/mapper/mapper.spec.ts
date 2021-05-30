import { mapObjectToArray } from './mapper.functions';

import {} from 'jasmine';

type TestObjectAccumulator = {
  [key in string | number]: TestObject;
};

interface TestObject {
  name: string;
}

const testData: TestObjectAccumulator = {
  1: {
    name: '1',
  },
  2: {
    name: '2',
  },
  3: {
    name: '3',
  },
  4: {
    name: '4',
  },
  '5': {
    name: '5',
  },
  '6': {
    name: '6',
  },
};

describe('Helpers compareAndPickDifference', () => {
  let beforeMap: TestObjectAccumulator;

  beforeEach(() => {
    beforeMap = testData;
  });

  it('should return hasDog', () => {
    const afterUpdate: TestObject[] = [{ name: '1' }, { name: '2' }, { name: '3' }, { name: '4' }, { name: '5' }, { name: '6' }];

    const diff: TestObject[] = mapObjectToArray<TestObject>(beforeMap);
    expect(diff).toEqual(afterUpdate);
  });
});
