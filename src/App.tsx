import { useEffect, useState } from 'react';
import Game from './pages/Game';
import { socket } from './services/socket';
import GlobalStyles from './styles/global';

const App: React.FC = () => {
  const [room, setRoom] = useState('room');

  useEffect(() => {
    socket.emit('joinRoom', room);
  }, [room]);

  return (
    <>
      <Game room={room} />
      <GlobalStyles />
    </>
  );
};

export default App;
