const makeRequest = (endpoint) => async () => {
  const options = {
    headers: {
      Accept: 'application/json'
    }
  };

  try {
    const response = await fetch(endpoint, options);
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
// https://www.uefa.com/
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
// https://scores.prosoccerusa.com/soccer/mls/teams
export const getMls = ({
  conference,
  c = undefined,
  module = 'football',
  type = 'standing'
}) => {
  const formData = {
    conference,
    c,
    module,
    type
  };
  const formattedData = new URLSearchParams(formData).toString();
  const url = `https://sportapi.widgets.sports.gracenote.com/football/gettable/phaseid/14308${conference}/languagecode/2.json?${formattedData}`;

  return makeRequest(url)();
};
// https://www.nhl.com/
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
// https://www.championshockeyleague.com/
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
// https://www.mlb.com/
export const getMlb = ({
  season = 2019,
  date = '2019-09-29',
  leagueId = '103,104',
  standingsTypes = 'regularSeason,springTraining,firstHalf,secondHalf',
  hydrate = 'division,conference,sport,league,team(nextSchedule(team,gameType=[R,F,D,L,W,C],inclusive=false),previousSchedule(team,gameType=[R,F,D,L,W,C],inclusive=true))'
}) => {
  const formData = {
    season,
    date,
    leagueId,
    standingsTypes,
    hydrate
  };
  const formattedData = new URLSearchParams(formData).toString();
  const url = `https://statsapi.mlb.com/api/v1/standings?${formattedData}`;

  return makeRequest(url)();
};
// https://www.foxsports.com/
export const getNfl = ({
  apikey = 'jE7yBJVRNAwdDesMgTzTXUUSx1It41Fq'
}) => {
  const formData = {
    apikey
  };
  const formattedData = new URLSearchParams(formData).toString();
  const url = `https://api.foxsports.com/sportsdata/v1/football/nfl/teams.json?${formattedData}`;

  return makeRequest(url)();
};
// https://www.tsn.ca/
export const getCfl = ({
  type = 'json'
}) => {
  const formData = {
    type
  };
  const formattedData = new URLSearchParams(formData).toString();
  const url = `https://stats.tsn.ca/GET/urn:tsn:cfl:teams?${formattedData}`;

  return makeRequest(url)();
};
// https://www.dratings.com/sports/australian-football-league-ratings/
export const getAfl = ({
  seasonId = 'c462d801-23d5-5024-ba51-f5aa906b54ea'
}) => {
  const formData = {
    season_id: seasonId
  };
  const formattedData = new URLSearchParams(formData).toString();
  const url = `/sports/australian-football-league-ratings/?${formattedData}`;

  return makeRequest(url)();
};
