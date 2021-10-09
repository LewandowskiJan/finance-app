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

describe('Helpers mapObjectToArray', () => {
  let beforeMap: TestObjectAccumulator;

  beforeEach(() => {
    beforeMap = testData;
  });

  it('should return array of {name: value} object', () => {
    const afterUpdate: TestObject[] = [{ name: '1' }, { name: '2' }, { name: '3' }, { name: '4' }, { name: '5' }, { name: '6' }];

    const diff: TestObject[] = mapObjectToArray<TestObject>(beforeMap);
    expect(diff).toEqual(afterUpdate);
  });

  it('should return empty [] if map empty object {}', () => {
    const testObj: any = {};
    const afterUpdate: TestObject[] = [];

    const diff: TestObject[] = mapObjectToArray<TestObject>(testObj);
    expect(diff).toEqual(afterUpdate);
  });

  it('should return empty [] if map string', () => {
    const testObj: any = 'abc';
    const afterUpdate: TestObject[] = [];

    const diff: TestObject[] = mapObjectToArray<TestObject>(testObj);
    expect(diff).toEqual(afterUpdate);
  });

  it('should return empty [] if map number', () => {
    const testObj: any = 2;
    const afterUpdate: TestObject[] = [];

    const diff: TestObject[] = mapObjectToArray<TestObject>(testObj);
    expect(diff).toEqual(afterUpdate);
  });

  it('should return empty [] if map true value', () => {
    const testObj: any = true;
    const afterUpdate: TestObject[] = [];

    const diff: TestObject[] = mapObjectToArray<TestObject>(testObj);
    expect(diff).toEqual(afterUpdate);
  });

  it('should return empty [] if map false value', () => {
    const testObj: any = false;
    const afterUpdate: TestObject[] = [];

    const diff: TestObject[] = mapObjectToArray<TestObject>(testObj);
    expect(diff).toEqual(afterUpdate);
  });
});
