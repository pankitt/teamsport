import React from 'react';
import { LEAGUES } from 'constants/leagues';
import Nfl from 'components/Main/Football/List/Nfl';
import Cfl from 'components/Main/Football/List/Cfl';
import Afl from 'components/Main/Football/List/Afl';

const List = ({ league, title }) => (
  <div>
    {title === LEAGUES.NFL.TITLE && <Nfl league={league} title={title} />}
    {title === LEAGUES.CFL.TITLE && <Cfl league={league} title={title} />}
    {title === LEAGUES.AFL.TITLE && <Afl league={league} title={title} />}
  </div>
);

export default List;
