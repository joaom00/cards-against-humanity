import logoBlack from '../../assets/logo-black.png';
import * as S from './styles';

interface WhiteCardProps {
  title: string;
}

const WhiteCard: React.FC<WhiteCardProps> = ({ title }) => {
  return (
    <S.Container>
      <p>{title}</p>
      <img src={logoBlack} alt="Cards Against Humanity" />
    </S.Container>
  );
};

export default WhiteCard;
