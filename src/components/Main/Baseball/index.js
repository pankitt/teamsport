import React, { useState, useEffect } from 'react';
import { LEAGUES } from 'constants/leagues';
import { useMlb } from 'hooks';
import { Loader } from 'components/common';
import List from 'components/Main/Baseball/List';
import style from 'components/Main/index.module.css';

const Basketball = () => {
  const nbaTitle = LEAGUES.MLB.TITLE;
  const [MLB, isLoading] = useMlb();
  const [league, setLeague] = useState([]);
  const [title, setTitle] = useState(nbaTitle);

  useEffect(() => {
    setLeague(MLB);
  }, [MLB]);

  const NBALeague = () => {
    setLeague(MLB);
    setTitle(nbaTitle);
  };

  return (
    <div className={style.container}>
      <div className={style.links}>
        <span
          className={style.link}
          onClick={NBALeague}
        >
          {nbaTitle}
        </span>
      </div>
      {isLoading ? <Loader /> : <List league={league} title={title} />}
    </div>
  );
};

export default Basketball;
