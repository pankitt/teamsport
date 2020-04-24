import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { SPORTS } from 'constants/pages';
import Menu from 'components/Main/Menu';
import Soccer from 'components/Main/Soccer';
import style from './index.module.css';

const Main = () => (
  <div className={style.container}>
    <Switch>
      <Route exact path="/" component={Menu} />
      <Route exact path={`/${SPORTS.SOCCER}`} component={Soccer} />
      <Route exact path={`/${SPORTS.BASKETBALL}`}><div>{SPORTS.BASKETBALL}</div></Route>
      <Route exact path={`/${SPORTS.HOCKEY}`}><div>{SPORTS.HOCKEY}</div></Route>
      <Route exact path={`/${SPORTS.BASEBALL}`}><div>{SPORTS.BASEBALL}</div></Route>
      <Route exact path={`/${SPORTS.FOOTBALL}`}><div>{SPORTS.FOOTBALL}</div></Route>
      <Route exact path={`/${SPORTS.RUGBY}`}><div>{SPORTS.RUGBY}</div></Route>
    </Switch>
  </div>
);

export default Main;
