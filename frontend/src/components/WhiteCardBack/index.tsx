import { socket } from '../../services/socket';
import * as S from './styles';

const WhiteCardBack: React.FC = () => {
  const newWhiteCard = () => {
    socket.emit('newWhiteCard', 'room');
  };

  return (
    <S.Container>
      <S.WhiteCard onClick={newWhiteCard}>
        <p>
          Cards <br />
          Against <br />
          Humanity.
        </p>
      </S.WhiteCard>
    </S.Container>
  );
};

export default WhiteCardBack;
