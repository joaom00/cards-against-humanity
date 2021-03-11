import { socket } from '../../services/socket';
import * as S from './styles';

const BlackCardBack: React.FC = () => {
  const newBlackCard = () => {
    socket.emit('newBlackCard', 'room');
  };

  return (
    <S.Container>
      <S.BlackCard onClick={newBlackCard}>
        <p>
          Cards <br />
          Against <br />
          Humanity.
        </p>
      </S.BlackCard>
    </S.Container>
  );
};

export default BlackCardBack;
