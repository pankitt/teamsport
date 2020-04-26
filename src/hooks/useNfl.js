import { useEffect, useState } from 'react';
import { getNfl } from 'api';

export const useNfl = () => {
  const [teams, seTeams] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let cleanup = false;

    const fetchData = async () => {
      const result = await getNfl({
      });
      if (!cleanup) {
        setIsLoading(false);
        seTeams(result.page);
      }
    };

    fetchData().catch(console.error);

    return () => { cleanup = true; };
  }, []);

  return [teams, isLoading];
};
