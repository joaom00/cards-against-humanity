import { useEffect, useState } from 'react';
import { socket } from '../../services/socket';
import * as S from './styles';

const Players: React.FC = () => {
  const [countedPlayers, setCountedPlayers] = useState(0);

  useEffect(() => {
    socket.on('countedPlayers', (size) => setCountedPlayers(size));
  }, []);

  return (
    <S.Container>
      <S.Header>
        <p>Jogadores</p>
        <span>{countedPlayers}</span>
      </S.Header>
      <S.Players>
        <li>Negatlv3</li>
        <li>Negatlv3</li>
        <li>Negatlv3</li>
        <li>Negatlv3</li>
      </S.Players>
    </S.Container>
  );
};

export default Players;
