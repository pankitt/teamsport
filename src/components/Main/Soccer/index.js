import React, { useState, useEffect } from 'react';
import { LEAGUES } from 'constants/leagues';
import { useUefa } from 'hooks';
import { Loader } from 'components/common';
import List from 'components/Main/Soccer/List';
import style from 'components/Main/index.module.css';

const Soccer = () => {
  const [UEFAChampionsLeague, isLoadingLC] = useUefa(LEAGUES.UEFA_CHAMPIONS_LEAGUE.ID);
  const [UEFAEuropaLeague, isLoadingLE] = useUefa(LEAGUES.UEFA_EUROPA_LEAGUE.ID);
  const [league, setLeague] = useState([]);
  const [title, setTitle] = useState(LEAGUES.UEFA_CHAMPIONS_LEAGUE.TITLE);

  useEffect(() => {
    setLeague(UEFAChampionsLeague);
  }, [UEFAChampionsLeague]);

  const championsLeague = () => {
    setLeague(UEFAChampionsLeague);
    setTitle(LEAGUES.UEFA_CHAMPIONS_LEAGUE.TITLE);
  };
  const europaLeague = () => {
    setLeague(UEFAEuropaLeague);
    setTitle(LEAGUES.UEFA_EUROPA_LEAGUE.TITLE);
  };

  return (
    <div>
      <div className={style.links}>
        <span
          className={style.link}
          onClick={championsLeague}
        >
          {LEAGUES.UEFA_CHAMPIONS_LEAGUE.TITLE}
        </span>
        <span
          className={style.link}
          onClick={europaLeague}
        >
          {LEAGUES.UEFA_EUROPA_LEAGUE.TITLE}
        </span>
      </div>
      {isLoadingLC || isLoadingLE ? <Loader /> : <List league={league} title={title} />}
    </div>
  );
};

export default Soccer;
