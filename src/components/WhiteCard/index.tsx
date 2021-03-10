import logoBlack from '../../assets/logo-black.png';
import * as S from './styles';

interface WhiteCardProps {
  user?: string;
}

const WhiteCard: React.FC<WhiteCardProps> = ({ user }) => {
  return (
    <S.Container>
      <S.WhiteCard>
        <p>Uma maldição cigana.</p>
        <img src={logoBlack} alt="Cards Against Humanity" />
      </S.WhiteCard>
      <span>{user}</span>
    </S.Container>
  );
};

export default WhiteCard;
