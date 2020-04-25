const makeRequest = async () => {
  const url = '/prod/v2/2019/teams.json';
  const options = {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'get'
  };

  try {
    const response = await fetch(url, options);
    const json = await response.json();
    const { error } = json;

    if (error) {
      const { message, code } = error;
      throw new Error(message || code);
    }

    return json;
  } catch (error) {
    throw new Error(error);
  }
};

export const getNba = () => makeRequest();
