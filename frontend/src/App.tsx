import { useEffect } from 'react';
import Game from './pages/Game';
import { socket } from './services/socket';
import GlobalStyles from './styles/global';

const App: React.FC = () => {
  const room = 'room';

  useEffect(() => {
    socket.emit('joinRoom', room);
  }, []);

  return (
    <>
      <Game room={room} />
      <GlobalStyles />
    </>
  );
};

export default App;
