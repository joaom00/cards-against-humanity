import logoBlack from '../../assets/logo-black.png';
import * as S from './styles';

interface WhiteCardProps {
  title: string;
  user?: string;
}

const WhiteCard: React.FC<WhiteCardProps> = ({ title, user }) => {
  return (
    <S.Container>
      <S.WhiteCard>
        <p>{title}</p>
        <img src={logoBlack} alt="Cards Against Humanity" />
      </S.WhiteCard>
      <span>{user}</span>
    </S.Container>
  );
};

export default WhiteCard;
