import React from 'react';
import { LEAGUES } from 'constants/leagues';
import Nba from 'components/Main/Basketball/List/Nba';
import EmptyList from 'components/Main/EmptyList';

const List = ({ league, title }) => (
  <div>
    {title === LEAGUES.NBA.TITLE && <Nba league={league} title={title} />}
    {title === LEAGUES.EURO_LEAGUE.TITLE
    && <EmptyList title={title} logo="https://www.flashscore.com/res/image/data/bTE9GzCO-4UukMJVC.png" />}
  </div>
);

export default List;
