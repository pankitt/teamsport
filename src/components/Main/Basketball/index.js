import React, { useState, useEffect } from 'react';
import { LEAGUES } from 'constants/leagues';
import { useNba } from 'hooks';
import { euroLeagueMock } from 'mock';
import { Loader } from 'components/common';
import List from 'components/Main/Basketball/List';
import style from 'components/Main/index.module.css';

const Basketball = () => {
  const nbaTitle = LEAGUES.NBA.TITLE;
  const elTitle = LEAGUES.EURO_LEAGUE.TITLE;

  const [NBA, isLoading] = useNba();
  const el = euroLeagueMock.data.standings.map(({ team }) => team).flat();
  const [league, setLeague] = useState([]);
  const [title, setTitle] = useState(nbaTitle);

  useEffect(() => {
    setLeague(NBA);
  }, [NBA]);

  const nbaLeague = () => {
    setLeague(NBA);
    setTitle(nbaTitle);
  };
  const euroLeague = () => {
    setLeague(el);
    setTitle(elTitle);
  };

  return (
    <div className={style.container}>
      <div className={style.links}>
        <span
          className={style.link}
          onClick={nbaLeague}
        >
          {nbaTitle}
        </span>
        <span
          className={style.link}
          onClick={euroLeague}
        >
          {elTitle}
        </span>
      </div>
      {isLoading ? <Loader /> : <List league={league} title={title} />}
    </div>
  );
};

export default Basketball;
