import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Game from '../pages/Game';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/app" component={Game} />
  </Switch>
);

export default Routes;
