import { useEffect, useState } from 'react';
import { getEuroLeague } from 'api';

export const useEuroLeague = (lang, liveDatebetween) => {
  const [teams, seTeams] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let cleanup = false;

    const fetchData = async () => {
      const result = await getEuroLeague({
        lang,
        liveDatebetween
      });
      if (!cleanup) {
        setIsLoading(false);
        seTeams(result);
      }
    };

    fetchData().catch(console.error);

    return () => { cleanup = true; };
  }, [lang, liveDatebetween]);

  return [teams, isLoading];
};
