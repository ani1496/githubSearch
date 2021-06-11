import { mergeRepos } from '../utils/methods';

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
        ...state, filteredRepos: payload.data, repos: mergeRepos(payload.data, state.sortedRepos),
      };
    case 'CLEAR_FILTER':
      return {
        ...state, filteredRepos: [], repos: state.sortedRepos.length === 0 ? state.initRepos : state.sortedRepos,
      };
    case 'SORTED_REPOS':
      return {
        ...state, sortedRepos: payload.data, repos: mergeRepos(state.filteredRepos, payload.data),
      }
    default:
      return { ...state}
  }
}

