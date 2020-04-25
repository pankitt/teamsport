import { useEffect, useState } from 'react';
import { getNba } from 'api';

export const useNba = (league) => {
  const [teams, seTeams] = useState([]);

  useEffect(() => {
    let cleanup = false;

    const fetchData = async () => {
      const result = await getNba();
      if (!cleanup) {
        seTeams(result.league.standard.filter(({ isNBAFranchise }) => isNBAFranchise === true));
      }
    };

    fetchData().catch(console.error);

    return () => { cleanup = true; };
  }, [league]);

  return teams;
};
