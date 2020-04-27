import React from 'react';
import { LEAGUES } from 'constants/leagues';
import Nhl from 'components/Main/Hockey/List/Nhl';
import Chl from 'components/Main/Hockey/List/Chl';
import EmptyList from 'components/Main/EmptyList';

const List = ({ league, title }) => (
  <div>
    {title === LEAGUES.NHL.TITLE && <Nhl league={league} title={title} />}
    {title === LEAGUES.CHL.TITLE && <Chl league={league} title={title} />}
    {title === LEAGUES.KHL.TITLE && <EmptyList title={title} logo="https://www.flashscore.com/res/image/data/zDv6cBiU-dpvIrs7K.png" />}
  </div>
);

export default List;
