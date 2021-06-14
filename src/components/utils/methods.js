import axios from 'axios';

export const searchGitHubRepos = async (searchVal) => {
  try {
    const { status, data } = await axios.get(`https://api.github.com/search/repositories?q=${searchVal}`);

    if (status ===  200) {
      return ({ status, data: data.items, error: false })
    }
    return { status, error: true, data: []}
  } catch {
    return { status: 422, error: true, data: [] }
  }
}

export const filterRepos = (repos, filter) => repos.filter(repo => repo?.language?.toLowerCase().includes(filter.toLowerCase()));

export const sortRepos = (repos, sortType) => {
  const sortedRepos = [...repos];
  return sortedRepos.sort((repoA, repoB) =>  repoB[sortType] - repoA[sortType])
}

export const mergeRepos = (filteredRepos, sortedRepos) => {
  if (filteredRepos.length === 0) return [...sortedRepos];
  if (sortedRepos.length === 0) return [...filteredRepos];

  return sortedRepos.filter(sortedRepo => filteredRepos.some(({id}) => sortedRepo.id === id))
}
