import { useEffect, useState } from 'react';
import { getMlb } from 'api';

export const useMlb = (season) => {
  const [teams, seTeams] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let cleanup = false;

    const fetchData = async () => {
      const result = await getMlb({
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
console.log(teams);
  return [teams, isLoading];
};
