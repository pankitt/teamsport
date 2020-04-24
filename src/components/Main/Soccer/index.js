import React, { useState } from 'react';
import { LEAGUES } from 'constants/leagues';
import { useUefa } from 'hooks';
import List from 'components/Main/Soccer/List';
import style from './index.module.css';

const Soccer = () => {
  const [league, setLeague] = useState(0);

  const UEFAChampionsLeague = useUefa(LEAGUES.UEFA_CHAMPIONS_LEAGUE.ID);
  const UEFAEuropaLeague = useUefa(LEAGUES.UEFA_EUROPA_LEAGUE.ID);

  return (
    <div className={style.container}>
      <div className={style.links}>
        <span
          className={style.link}
          onClick={() => setLeague(UEFAChampionsLeague)}
        >
          {LEAGUES.UEFA_CHAMPIONS_LEAGUE.TITLE}
        </span>
        <div
          className={style.link}
          onClick={() => setLeague(UEFAEuropaLeague)}
        >
          {LEAGUES.UEFA_EUROPA_LEAGUE.TITLE}
        </div>
      </div>
      <List league={league} />
    </div>
  );
};

export default Soccer;
