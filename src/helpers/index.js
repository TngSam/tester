import * as R from 'ramda';

// Implements a helpers kit for easier work with data

// Find a needed object in the array by property equality
export const findObjByProp = (array, prop, value) => {
  if (!Array.isArray(array)) {
    throw new TypeError('Given `array` argument is not an array');
  }
  if (!prop) {
    throw new Error('Given an incorrect `prop` argument');
  }
  if (!value && typeof(value) !== 'boolean') {
    throw new Error('Given an incorrect `value` argument');
  }

  return R.find(R.propEq(prop, value))(array);
}

// Less verbose implementation of Object.assign
export const assign = (temp = {}, assignee = {}) => R.mergeDeepRight(temp, assignee);
