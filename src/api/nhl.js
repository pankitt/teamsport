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

export const getNhl = ({
  season = 20192020,
  hydrate = 'record(overall),division,conference,team(nextSchedule(team),previousSchedule(team))'
}) => {
  const formData = {
    hydrate,
    season
  };
  const formattedData = new URLSearchParams(formData).toString();
  const url = `https://statsapi.web.nhl.com/api/v1/standings?${formattedData}`;

  return makeRequest(url)();
};