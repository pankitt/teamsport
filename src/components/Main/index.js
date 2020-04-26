import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { SPORTS } from 'constants/pages';
import Menu from 'components/Main/Menu';
import Soccer from 'components/Main/Soccer';
import Basketball from 'components/Main/Basketball';
import Hockey from 'components/Main/Hockey';
import Baseball from 'components/Main/Baseball';
import Football from 'components/Main/Football';

const Main = () => (
  <div>
    <Switch>
      <Route exact path="/" component={Menu} />
      <Route exact path={`/${SPORTS.SOCCER}`} component={Soccer} />
      <Route exact path={`/${SPORTS.BASKETBALL}`} component={Basketball} />
      <Route exact path={`/${SPORTS.HOCKEY}`} component={Hockey} />
      <Route exact path={`/${SPORTS.BASEBALL}`} component={Baseball} />
      <Route exact path={`/${SPORTS.FOOTBALL}`} component={Football} />
      <Route exact path={`/${SPORTS.RUGBY}`}><div>{SPORTS.RUGBY}</div></Route>
    </Switch>
  </div>
);

export default Main;
