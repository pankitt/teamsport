import { useEffect, useState } from 'react';
import { getMls } from 'api';

export const useMls = (conference) => {
  const [teams, seTeams] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let cleanup = false;

    const fetchData = async () => {
      const result = await getMls({
        conference
      });
      if (!cleanup) {
        setIsLoading(false);
        seTeams(result);
      }
    };

    fetchData().catch(console.error);

    return () => { cleanup = true; };
  }, [conference]);

  return [teams, isLoading];
};
