import React from 'react';
import { LEAGUES } from 'constants/leagues';
import { useUefa } from 'hooks';
import List from 'components/Main/Soccer/List';
import style from './index.module.css';

const Soccer = () => {
  const UEFAChampionsLeague = useUefa(LEAGUES.UEFA_CHAMPIONS_LEAGUE);
  // const UEFAEuropaLeague = useUefa(LEAGUES.UEFA_EUROPA_LEAGUE);

  return (
    <div className={style.container}>
      <List league={UEFAChampionsLeague} />
    </div>
  );
};

export default Soccer;
