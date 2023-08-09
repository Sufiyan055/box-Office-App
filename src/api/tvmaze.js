const BASE_URL = 'https://api.tvmaze.com';
//connecting tvmaze.js to home.jsx searchbar in this way.
const apiGet = async queryString => {
  const response = await fetch(`${BASE_URL}${queryString}`);
  const body = await response.json();

  return body;
};

export const searchForShows = query => apiGet(`/search/shows?q=${query}`);
