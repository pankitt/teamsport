import React, { useState, useEffect } from 'react';
import { LEAGUES } from 'constants/leagues';
import { useNba } from 'hooks';
import List from 'components/Main/Basketball/List';
import style from 'components/Main/index.module.css';

const Basketball = () => {
  const UEFAChampionsLeague = useNba();
  const [league, setLeague] = useState([]);
  const [title, setTitle] = useState('');

  useEffect(() => {
    setLeague(UEFAChampionsLeague);
    setTitle(LEAGUES.NBA.TITLE);
  }, [UEFAChampionsLeague]);

  const championsLeague = () => {
    setLeague(UEFAChampionsLeague);
    setTitle(LEAGUES.NBA.TITLE);
  };

  return (
    <div className={style.container}>
      <div className={style.links}>
        <span
          className={style.link}
          onClick={championsLeague}
        >
          {LEAGUES.NBA.TITLE}
        </span>
      </div>
      <List league={league} title={title} />
    </div>
  );
};

export default Basketball;
