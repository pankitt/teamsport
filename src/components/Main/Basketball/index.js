import React, { useState, useEffect } from 'react';
import { LEAGUES } from 'constants/leagues';
import { useNba } from 'hooks';
import { Loader } from 'components/common';
import List from 'components/Main/Basketball/List';
import style from 'components/Main/index.module.css';

const Basketball = () => {
  const [NBA, isLoading] = useNba();
  const [league, setLeague] = useState([]);
  const [title, setTitle] = useState(LEAGUES.NBA.TITLE);

  useEffect(() => {
    setLeague(NBA);
  }, [NBA]);

  const championsLeague = () => {
    setLeague(NBA);
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
      {isLoading ? <Loader /> : <List league={league} title={title} />}
    </div>
  );
};

export default Basketball;
