/**
 * Create async actions template for Redux
 * @param action
 * @returns {{REQUEST: string, ERROR: string, SUCCESS: string}}
 * @author Samir Amirseidov <famirseidov@gmail.com>
 */
const createAsyncAction = (action) => {
  return {
    REQUEST: `${action}_REQUEST`,
    ERROR: `${action}_ERROR`,
    SUCCESS: `${action}_SUCCESS`
  };
};

export default createAsyncAction;
