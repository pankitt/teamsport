import React from 'react';
import { LEAGUES } from 'constants/leagues';
import Mlb from 'components/Main/Baseball/List/Mlb';

const List = ({ league, title }) => (
  <div>
    {title === LEAGUES.MLB.TITLE && <Mlb league={league} title={title} />}
  </div>
);

export default List;
