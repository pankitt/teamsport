import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import { LEAGUES } from 'constants/leagues';
import { useUefa, useRouter } from 'hooks';
import List from 'components/Main/Soccer/List';
import style from './index.module.css';

const Soccer = () => {
  const router = useRouter();
  const UEFAChampionsLeague = useUefa(LEAGUES.UEFA_CHAMPIONS_LEAGUE.ID);
  const UEFAEuropaLeague = useUefa(LEAGUES.UEFA_EUROPA_LEAGUE.ID);
  const linkCL = `${router.pathname}?league=${LEAGUES.UEFA_CHAMPIONS_LEAGUE.LINK}`;
  const linkEL = `${router.pathname}?league=${LEAGUES.UEFA_EUROPA_LEAGUE.LINK}`;

  return (
    <div className={style.container}>
      <div>
        <Link
          to={linkCL}
          className={style.link}
        >
          {LEAGUES.UEFA_CHAMPIONS_LEAGUE.TITLE}
        </Link>
        <Link
          to={linkEL}
          className={style.link}
        >
          {LEAGUES.UEFA_EUROPA_LEAGUE.TITLE}
        </Link>
      </div>
      <Switch>
        <Route exact path={linkCL}>
          <List league={UEFAChampionsLeague} />
        </Route>
        <Route exact path={linkEL}>
          <List league={UEFAEuropaLeague} />
        </Route>
      </Switch>
    </div>
  );
};

export default Soccer;
