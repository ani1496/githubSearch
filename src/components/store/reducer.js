export const reducer = (state, payload) => {
  switch(payload.type) {
    case 'GET_REPOS':
      return {
        ...state, repos: payload.data, error: false, loading: false
      };
    case 'CLEAR_REPOS':
      return {
        ...state, repos: [], error: false, loading: false
      };
    case 'ERROR_REPOS':
      return {
        ...state, repos: [], error: true, loading: false
      };
    default:
      return { ...state}
  }
}

