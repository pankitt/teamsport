// https://comp.uefa.com/v1/competitions/1/seasons/current/teams?language=EN
// https://comp.uefa.com/v1/competitions/undefined/seasons/current/teams?language=EN

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
