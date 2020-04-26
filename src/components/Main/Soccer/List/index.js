import React from 'react';
import { LEAGUES } from 'constants/leagues';
import Uefa from 'components/Main/Soccer/List/Uefa';

const List = ({ league, title }) => (
  <div>
    {(title === LEAGUES.UEFA_CHAMPIONS_LEAGUE.TITLE || title === LEAGUES.UEFA_EUROPA_LEAGUE.TITLE)
    && <Uefa league={league} title={title} />}
  </div>
);

export default List;
