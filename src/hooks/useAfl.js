import { useEffect, useState } from 'react';
import { getAfl } from 'api';

export const useAfl = () => {
  const [teams, seTeams] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let cleanup = false;

    const fetchData = async () => {
      const result = await getAfl({
      });
      if (!cleanup) {
        setIsLoading(false);
        seTeams(
          result
        );
      }
    };

    fetchData().catch(console.error);

    return () => { cleanup = true; };
  }, []);

  return [teams, isLoading];
};
