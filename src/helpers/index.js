import * as R from 'ramda';

// Find a needed object in the array by property equality
export const findObjByProp = (array, prop, value) => {
  if (!Array.isArray(array)) {
    throw new Error('Given `array` argument is not an array');
  }
  if (!prop) {
    throw new Error('Given an incorrect `prop` argument');
  }
  if (!value && typeof(value) !== 'boolean') {
    throw new Error('Given an incorrect `value` argument');
  }

  return R.find(R.propEq(prop, value))(array);
}
