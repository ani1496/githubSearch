import { mergeRepos } from '../utils/methods';

const clearAllRepos = {
  repos: [],
  initRepos: [],
  sortedRepos: [],
  filteredRepos: [],
}

export const reducer = (state, payload) => {
  switch(payload.type) {
    case 'LOADING_REPOS':
      return { ...state, loading: true, error: false, searchVal: payload.searchVal, ...clearAllRepos }
    case 'GET_REPOS':
      return {
        ...state, ...clearAllRepos, repos: payload.data,
        initRepos: payload.data, error: false, loading: false
      };
    case 'CLEAR_REPOS':
      return {
        ...state, ...clearAllRepos, searchVal: '', error: false, loading: false,
      };
    case 'ERROR_REPOS':
      return {
        ...state, ...clearAllRepos, error: true, loading: false
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
      };
    case 'SET_SELECTED_REPO':
      return { ...state, selectedRepo: payload.repo };
    default:
      return { ...state}
  }
}

