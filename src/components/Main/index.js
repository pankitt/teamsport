import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { SPORTS } from 'constants/pages';
import Menu from 'components/Main/Menu';
import Soccer from 'components/Main/Soccer';
import Basketball from 'components/Main/Basketball';

const Main = () => (
  <div>
    <Switch>
      <Route exact path="/" component={Menu} />
      <Route exact path={`/${SPORTS.SOCCER}`} component={Soccer} />
      <Route exact path={`/${SPORTS.BASKETBALL}`} component={Basketball} />
      <Route exact path={`/${SPORTS.HOCKEY}`}><div>{SPORTS.HOCKEY}</div></Route>
      <Route exact path={`/${SPORTS.BASEBALL}`}><div>{SPORTS.BASEBALL}</div></Route>
      <Route exact path={`/${SPORTS.FOOTBALL}`}><div>{SPORTS.FOOTBALL}</div></Route>
      <Route exact path={`/${SPORTS.RUGBY}`}><div>{SPORTS.RUGBY}</div></Route>
    </Switch>
  </div>
);

export default Main;
