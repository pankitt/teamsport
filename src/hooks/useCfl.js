import { useEffect, useState } from 'react';
import { getCfl } from 'api';

export const useCfl = () => {
  const [teams, seTeams] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let cleanup = false;

    const fetchData = async () => {
      const result = await getCfl({
      });
      if (!cleanup) {
        setIsLoading(false);
        seTeams(result.Divisions.map(({ Teams }) => Teams).flat());
      }
    };

    fetchData().catch(console.error);

    return () => { cleanup = true; };
  }, []);

  return [teams, isLoading];
};
