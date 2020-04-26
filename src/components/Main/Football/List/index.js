import React from 'react';
import { LEAGUES } from 'constants/leagues';
import Nfl from 'components/Main/Football/List/Nfl';

const List = ({ league, title }) => (
  <div>
    {title === LEAGUES.NFL.TITLE && <Nfl league={league} title={title} />}
  </div>
);

export default List;
