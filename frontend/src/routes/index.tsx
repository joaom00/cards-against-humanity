import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Game from '../pages/Game';
import NewGame from '../pages/NewGame';
import InsertCode from '../pages/InsertCode';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/app" component={Game} />
    <Route path="/newgame" component={NewGame} />
    <Route path="/insertcode" component={InsertCode} />
  </Switch>
);

export default Routes;
