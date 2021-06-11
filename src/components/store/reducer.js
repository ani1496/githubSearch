export const reducer = (state, payload) => {
  switch(payload.type) {
    case 'GET_REPOS':
      return {
        ...state, repos: payload.data, 
        initRepos: payload.data, error: false, loading: false
      };
    case 'CLEAR_REPOS':
      return {
        ...state, repos: [], initRepos: [], error: false, loading: false
      };
    case 'ERROR_REPOS':
      return {
        ...state, repos: [], initRepos: [], error: true, loading: false
      };
    case 'FILTERED_REPOS':
      return {
        ...state, repos: payload.data,
      };
    case 'CLEAR_FILTER':
      return {
        ...state, repos: state.initRepos,
      };
    default:
      return { ...state}
  }
}

