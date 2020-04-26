import React from 'react';
import { LEAGUES } from 'constants/leagues';
import Nba from 'components/Main/Basketball/List/Nba';

const List = ({ league, title }) => (
  <div>
    {title === LEAGUES.NBA.TITLE && <Nba league={league} title={title} />}
  </div>
);

export default List;
