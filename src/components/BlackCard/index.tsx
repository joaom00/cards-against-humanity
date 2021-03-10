import logoWhite from '../../assets/logo-white.png';
import * as S from './styles';

const BlackCard: React.FC = () => {
  return (
    <S.Container>
      <p>Resolução da ANAC agora proíbe _______ em aeronaves.</p>
      <img src={logoWhite} alt="Cards Against Humanity" />
    </S.Container>
  );
};

export default BlackCard;
