import { useEffect, useState } from 'react';
import { getNba } from 'api';

export const useNba = (league) => {
  const [teams, seTeams] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let cleanup = false;

    const fetchData = async () => {
      const result = await getNba();
      if (!cleanup) {
        setIsLoading(false);
        seTeams(result.league.standard.filter(({ isNBAFranchise }) => isNBAFranchise === true));
      }
    };

    fetchData().catch(console.error);

    return () => { cleanup = true; };
  }, [league]);

  return [teams, isLoading];
};
