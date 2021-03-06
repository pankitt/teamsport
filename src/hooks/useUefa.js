import { useEffect, useState } from 'react';
import { getUefa } from 'api';

export const useUefa = (league) => {
  const [teams, seTeams] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let cleanup = false;

    const fetchData = async () => {
      const result = await getUefa({
        league
      });
      if (!cleanup) {
        setIsLoading(false);
        seTeams(result);
      }
    };

    fetchData().catch(console.error);

    return () => { cleanup = true; };
  }, [league]);

  return [teams, isLoading];
};
