import React from 'react';
import { LEAGUES } from 'constants/leagues';
import Nba from 'components/Main/Basketball/List/Nba';
import EuroLeague from 'components/Main/Basketball/List/EuroLeague';

const List = ({ league, title }) => (
  <div>
    {title === LEAGUES.NBA.TITLE && <Nba league={league} title={title} />}
    {title === LEAGUES.EURO_LEAGUE.TITLE && <EuroLeague league={league} title={title} />}
  </div>
);

export default List;
