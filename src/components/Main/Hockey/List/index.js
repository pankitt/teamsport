import React from 'react';
import { LEAGUES } from 'constants/leagues';
import Nhl from 'components/Main/Hockey/List/Nhl';
import Chl from 'components/Main/Hockey/List/Chl';

const List = ({ league, title }) => (
  <div>
    {title === LEAGUES.NHL.TITLE && <Nhl league={league} title={title} />}
    {title === LEAGUES.CHL.TITLE && <Chl league={league} title={title} />}
  </div>
);

export default List;
