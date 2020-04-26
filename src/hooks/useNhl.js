import { useEffect, useState } from 'react';
import { getNhl } from 'api';

export const useNhl = (season) => {
  const [teams, seTeams] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let cleanup = false;

    const fetchData = async () => {
      const result = await getNhl({
        season
      });
      if (!cleanup) {
        setIsLoading(false);
        seTeams(
          result.records.map(({ teamRecords }) => teamRecords).flat().map(({ team }) => team)
        );
      }
    };

    fetchData().catch(console.error);

    return () => { cleanup = true; };
  }, [season]);

  return [teams, isLoading];
};
