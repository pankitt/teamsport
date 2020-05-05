import React, { useState, useEffect } from 'react';
import { LEAGUES } from 'constants/leagues';
import { useUefa, useMls } from 'hooks';
import { Loader } from 'components/common';
import List from 'components/Main/Soccer/List';
import style from 'components/Main/index.module.css';

const Soccer = () => {
  const uefaCLTitle = LEAGUES.UEFA_CL.TITLE;
  const uefaELTitle = LEAGUES.UEFA_EL.TITLE;
  const mlsTitle = LEAGUES.MLS.TITLE;

  const [UEFAChampionsLeague, isLoading] = useUefa(1);
  const [UEFAEuropaLeague] = useUefa(14);
  const [MLSWest] = useMls(1);
  const [MLSEast] = useMls(2);
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
  const mlsLeague = () => {
    const mls = [...MLSWest, ...MLSEast];
    setLeague(mls);
    setTitle(mlsTitle);
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
        <span
          className={style.link}
          onClick={mlsLeague}
        >
          {mlsTitle}
        </span>
      </div>
      {isLoading ? <Loader /> : <List league={league} title={title} />}
    </div>
  );
};

export default Soccer;
