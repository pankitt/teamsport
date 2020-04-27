import React, { useState, useEffect } from 'react';
import { LEAGUES } from 'constants/leagues';
import { useNhl, useChl } from 'hooks';
import { Loader } from 'components/common';
import List from 'components/Main/Hockey/List';
import style from 'components/Main/index.module.css';

const Hockey = () => {
  const nhlTitle = LEAGUES.NHL.TITLE;
  const chlTitle = LEAGUES.CHL.TITLE;

  const [NHL, isLoading] = useNhl();
  const [CHL] = useChl();
  const [league, setLeague] = useState([]);
  const [title, setTitle] = useState(nhlTitle);

  useEffect(() => {
    setLeague(NHL);
  }, [NHL]);

  const nhlLeague = () => {
    setLeague(NHL);
    setTitle(nhlTitle);
  };
  const chlLeague = () => {
    setLeague(CHL);
    setTitle(chlTitle);
  };

  return (
    <div className={style.container}>
      <div className={style.links}>
        <span
          className={style.link}
          onClick={nhlLeague}
        >
          {nhlTitle}
        </span>
        <span
          className={style.link}
          onClick={chlLeague}
        >
          {chlTitle}
        </span>
      </div>
      {isLoading ? <Loader /> : <List league={league} title={title} />}
    </div>
  );
};

export default Hockey;
