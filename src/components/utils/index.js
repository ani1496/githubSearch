import axios from 'axios';

export const searchGitHubRepos = async (searchVal) => {
  try {
    const { status, data } = await axios.get(`https://api.github.com/search/repositories?q=${searchVal}`);

    if(status ===  200) {
      return ({ status, data: data.items, error: false })
    }
    return { status, error: true, data: []}
  } catch {
    return { status: 422, error: true, data: [] }
  }
}

