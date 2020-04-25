const makeRequest = (endpoint) => async () => {
  try {
    const response = await fetch(endpoint);
    const json = await response.json();
    const { error } = json;

    if (error === 'yes') {
      throw new Error(json);
    }
    return json;
  } catch (error) {
    return error;
  }
};

export const getNba = () => {
  const url = 'https://data.nba.net/prod/v2/2019/teams.json';
  return makeRequest(url)();
};
