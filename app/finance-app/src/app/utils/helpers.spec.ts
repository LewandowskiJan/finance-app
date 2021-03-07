import { compareAndPickDifference, isNullUndefined, notNull } from './helpers';

interface TestObject {
  name: string;
  age: string;
  hasDog: boolean;
  items: number;
}

fdescribe('Helpers compareAndPickDifference', () => {
  let beforeUpdate: Partial<TestObject>;

  beforeEach(() => {
    beforeUpdate = {
      name: 'Andrew',
      age: '34',
      hasDog: true,
    };
  });

  it('should return hasDog', () => {
    const afterUpdate: Partial<TestObject> = {
      name: 'Andrew',
      age: '34',
      hasDog: false,
    };

    const diff: Partial<TestObject> = compareAndPickDifference<TestObject>(beforeUpdate, afterUpdate);
    expect(diff).toEqual({ hasDog: false });
  });

  it('should return name', () => {
    const afterUpdate: Partial<TestObject> = {
      name: 'Maria',
      age: '34',
      hasDog: true,
    };

    const diff: Partial<TestObject> = compareAndPickDifference<TestObject>(beforeUpdate, afterUpdate);
    expect(diff).toEqual({ name: 'Maria' });
  });

  it('should return name and age', () => {
    const afterUpdate: Partial<TestObject> = {
      name: 'Joe',
      age: '23',
      hasDog: true,
    };

    const diff: Partial<TestObject> = compareAndPickDifference<TestObject>(beforeUpdate, afterUpdate);
    expect(diff).toEqual({ name: 'Joe', age: '23' });
  });

  it('should return name and age', () => {
    const afterUpdate: Partial<TestObject> = {
      hasDog: true,
      items: 23,
    };

    const diff: Partial<TestObject> = compareAndPickDifference<TestObject>(beforeUpdate, afterUpdate);
    expect(diff).toEqual({ items: 23 });
  });

  it('should return empty', () => {
    const afterUpdate: Partial<TestObject> = {
      name: 'Andrew',
    };

    const diff: Partial<TestObject> = compareAndPickDifference<TestObject>(beforeUpdate, afterUpdate);
    expect(diff).toEqual({});
  });

  it('should return name when obj1 is null', () => {
    const beforeUpdating: Partial<TestObject> = null;
    const afterUpdate: Partial<TestObject> = {
      name: 'Andrew',
    };

    const diff: Partial<TestObject> = compareAndPickDifference<TestObject>(beforeUpdating, afterUpdate);
    expect(diff).toEqual({ name: 'Andrew' });
  });

  it('should return empty when obj2 is null', () => {
    const afterUpdate: Partial<TestObject> = null;

    const diff: Partial<TestObject> = compareAndPickDifference<TestObject>(beforeUpdate, afterUpdate);
    expect(diff).toEqual({});
  });
});

describe('Helpers isNullUndefined', () => {
  it('should return true when null', () => {
    // given
    const given = null;
    // when
    const isNullOrUndefined: boolean = isNullUndefined(given);
    // then
    expect(isNullOrUndefined).toBeTrue();
  });

  it('should return true when undefined', () => {
    // given
    const given = undefined;
    // when
    const isNullOrUndefined: boolean = isNullUndefined(given);
    // then
    expect(isNullOrUndefined).toBeTrue();
  });

  it('should return false when string', () => {
    // given
    const given = 'undefined';
    // when
    const isNullOrUndefined: boolean = isNullUndefined(given);
    // then
    expect(isNullOrUndefined).toBeFalse();
  });

  it('should return false when number', () => {
    // given
    const given = 123;
    // when
    const isNullOrUndefined: boolean = isNullUndefined(given);
    // then
    expect(isNullOrUndefined).toBeFalse();
  });
});

describe('Helpers notNull', () => {
  it('should return only name', () => {
    // given
    const initialObject: Partial<TestObject> = {
      name: 'Andrew',
      age: null,
      hasDog: null,
    };
    // when
    const after: Partial<TestObject> = notNull<Partial<TestObject>>(initialObject);
    // then
    expect(after).toEqual({ name: 'Andrew' });
  });

  it('should return empty', () => {
    // given
    const initialObject: Partial<TestObject> = {
      name: undefined,
      age: null,
      hasDog: null,
    };
    // when
    const after: Partial<TestObject> = notNull<Partial<TestObject>>(initialObject);
    // then
    expect(after).toEqual({});
  });

  it('should return age', () => {
    // given
    const initialObject: Partial<TestObject> = {
      name: undefined,
      age: '123',
      hasDog: true,
    };
    // when
    const after: Partial<TestObject> = notNull<Partial<TestObject>>(initialObject);
    // then
    expect(after).toEqual({ age: '123', hasDog: true });
  });

  it('should return age', () => {
    // given
    const initialObject: Partial<TestObject> = null;
    // when
    const after: Partial<TestObject> = notNull<Partial<TestObject>>(initialObject);
    // then
    expect(after).toEqual({});
  });
});
