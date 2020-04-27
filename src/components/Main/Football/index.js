import React, { useState, useEffect } from 'react';
import { LEAGUES } from 'constants/leagues';
import { useNfl, useCfl } from 'hooks';
import { Loader } from 'components/common';
import List from 'components/Main/Football/List';
import style from 'components/Main/index.module.css';

const Football = () => {
  const nflTitle = LEAGUES.NFL.TITLE;
  const cflTitle = LEAGUES.CFL.TITLE;

  const [NFL, isLoading] = useNfl();
  const [CFL] = useCfl();
  const [league, setLeague] = useState([]);
  const [title, setTitle] = useState(nflTitle);

  useEffect(() => {
    setLeague(NFL);
  }, [NFL]);

  const nflLeague = () => {
    setLeague(NFL);
    setTitle(nflTitle);
  };
  const cflLeague = () => {
    setLeague(CFL);
    setTitle(cflTitle);
  };

  return (
    <div className={style.container}>
      <div className={style.links}>
        <span
          className={style.link}
          onClick={nflLeague}
        >
          {nflTitle}
        </span>
        <span
          className={style.link}
          onClick={cflLeague}
        >
          {cflTitle}
        </span>
      </div>
      {isLoading ? <Loader /> : <List league={league} title={title} />}
    </div>
  );
};

export default Football;
