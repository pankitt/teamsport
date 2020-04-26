import React, { useState, useEffect } from 'react';
import { LEAGUES } from 'constants/leagues';
import { useNhl } from 'hooks';
import { Loader } from 'components/common';
import List from 'components/Main/Hockey/List';
import style from 'components/Main/index.module.css';

const Hockey = () => {
  const nhlTitle = LEAGUES.NHL.TITLE;
  const [NHL, isLoading] = useNhl();
  const [league, setLeague] = useState([]);
  const [title, setTitle] = useState(nhlTitle);

  useEffect(() => {
    setLeague(NHL);
  }, [NHL]);

  const NHLeague = () => {
    setLeague(NHL);
    setTitle(nhlTitle);
  };

  return (
    <div className={style.container}>
      <div className={style.links}>
        <span
          className={style.link}
          onClick={NHLeague}
        >
          {nhlTitle}
        </span>
      </div>
      {isLoading ? <Loader /> : <List league={league} title={title} />}
    </div>
  );
};

export default Hockey;
