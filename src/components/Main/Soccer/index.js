import React, { useState, useEffect } from 'react';
import { LEAGUES } from 'constants/leagues';
import { useUefa } from 'hooks';
import { Loader } from 'components/common';
import List from 'components/Main/Soccer/List';
import style from 'components/Main/index.module.css';

const Soccer = () => {
  const uefaCLTitle = LEAGUES.UEFA_CHAMPIONS_LEAGUE.TITLE;
  const uefaELTitle = LEAGUES.UEFA_EUROPA_LEAGUE.TITLE;
  const [UEFAChampionsLeague, isLoading] = useUefa(LEAGUES.UEFA_CHAMPIONS_LEAGUE.ID);
  const [UEFAEuropaLeague] = useUefa(LEAGUES.UEFA_EUROPA_LEAGUE.ID);
  const [league, setLeague] = useState([]);
  const [title, setTitle] = useState(uefaCLTitle);

  useEffect(() => {
    setLeague(UEFAChampionsLeague);
  }, [UEFAChampionsLeague]);

  const championsLeague = () => {
    setLeague(UEFAChampionsLeague);
    setTitle(uefaCLTitle);
  };
  const europaLeague = () => {
    setLeague(UEFAEuropaLeague);
    setTitle(uefaELTitle);
  };

  return (
    <div>
      <div className={style.links}>
        <span
          className={style.link}
          onClick={championsLeague}
        >
          {uefaCLTitle}
        </span>
        <span
          className={style.link}
          onClick={europaLeague}
        >
          {uefaELTitle}
        </span>
      </div>
      {isLoading ? <Loader /> : <List league={league} title={title} />}
    </div>
  );
};

export default Soccer;
