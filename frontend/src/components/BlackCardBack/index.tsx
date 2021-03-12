import { socket } from '../../services/socket';
import * as S from './styles';

interface BlackCardBackProps {
  room: string | null;
}

const BlackCardBack: React.FC<BlackCardBackProps> = ({ room }) => {
  const newBlackCard = () => {
    socket.emit('newBlackCard', room);
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
