import logoWhite from '../../assets/logo-white.png';
import * as S from './styles';

interface BlackCardProps {
  title: string;
}

const BlackCard: React.FC<BlackCardProps> = ({ title }) => {
  return (
    <S.Container>
      <p>{title}</p>
      <img src={logoWhite} alt="Cards Against Humanity" />
    </S.Container>
  );
};

export default BlackCard;
