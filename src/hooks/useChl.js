import { useEffect, useState } from 'react';
import { getChl } from 'api';

export const useChl = (q) => {
  const [teams, seTeams] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let cleanup = false;

    const fetchData = async () => {
      const result = await getChl({
        q
      });
      if (!cleanup) {
        setIsLoading(false);
        seTeams(result.data);
      }
    };

    fetchData().catch(console.error);

    return () => { cleanup = true; };
  }, [q]);

  return [teams, isLoading];
};
