import casual from 'casual-browserify';
import { findObjByProp } from 'helpers/index';

describe("`findObjByProp` should not throw an error during call", () => {
  test('`findObjByProp` correctly finds an object', () => {
    const obj = {
      name: casual.name,
      number: casual.random
    };
    const result = findObjByProp([
      {
        a: 1,
        b: [obj.name]
      },
      obj,
      {
        a: 4,
        [obj.name]: 'qwe'
      }
    ], 'name', obj.name);
    expect(result).toEqual(obj);
  });
  test('`findObjByProp` throws a TypeError if an invalid type was provided', () => {
    expect(() => findObjByProp({}, 'foo', 'bar')).toThrow(TypeError);
  });
  test('`findObjByProp` throws an error if an undefined argument was passed', () => {
    expect(() => findObjByProp([], undefined, 'foo')).toThrow();
  });
});
