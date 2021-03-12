import { socket } from '../../services/socket';
import * as S from './styles';

interface WhiteCardBackProps {
  room: string | null;
}

const WhiteCardBack: React.FC<WhiteCardBackProps> = ({ room }) => {
  const newWhiteCard = () => {
    socket.emit('newWhiteCard', room);
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
