const createActionTypes = (module, apiName) => {
  return {
    FETCH: `${module}/${apiName}_FETCH`,
    SUCCESS: `${module}/${apiName}_FETCH_SUCCESS`,
    FAILURE: `${module}/${apiName}_FETCH_FAILURE`,
  };
};

export const ActionHelper = {
  createActionTypes,
};
