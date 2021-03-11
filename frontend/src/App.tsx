import { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { socket } from './services/socket';

import Routes from './routes';

import GlobalStyles from './styles/global';

const App: React.FC = () => {
  const room = 'room';

  useEffect(() => {
    socket.emit('joinRoom', room);
  }, []);

  return (
    <Router>
      <Routes />
      <GlobalStyles />
    </Router>
  );
};

export default App;
