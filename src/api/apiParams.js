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

export const getUefa = ({
  league,
  language = 'EN'
}) => {
  const formData = {
    language
  };
  const formattedData = new URLSearchParams(formData).toString();
  const url = `https://comp.uefa.com/v1/competitions/${league}/seasons/current/teams?${formattedData}`;

  return makeRequest(url)();
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

export const getChl = ({
  q = 'statistic-teams-21ec9dad81abe2e0240460d0-8f7d5c9a161f121955e7a148.json'
}) => {
  const formData = {
    q
  };
  const formattedData = new URLSearchParams(formData).toString();
  const url = `/api/s3?${formattedData}`;

  return makeRequest(url)();
};
