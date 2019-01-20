const createAsyncAction = (action) => {
  return {
    REQUEST: `${action}_REQUEST`,
    ERROR: `${action}_ERROR`,
    SUCCESS: `${action}_SUCCESS`
  };
};

export default createAsyncAction;
