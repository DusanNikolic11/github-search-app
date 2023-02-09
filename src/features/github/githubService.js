const GITHUB_URL = 'https://api.github.com';

const getUsers = async (searchData) => {
  const params = new URLSearchParams({
    q: searchData,
  });

  const res = await fetch(`${GITHUB_URL}/search/users?${params}`);
  
  const { items } = await res.json();

  return items;
};

const getUser = async (userLogin) => {
  const res = await fetch(`${GITHUB_URL}/users/${userLogin}`);
  if (res.status === 404) {
    window.location = '/not-found';
  } else {
    const user = await res.json();
    return user;
  }
};

const githubService = {
  getUsers,
  getUser,
};

export default githubService;
