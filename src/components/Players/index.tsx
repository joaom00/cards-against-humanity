import * as S from './styles';

const Players: React.FC = () => {
  return (
    <S.Container>
      <S.Header>
        <p>Jogadores</p>
        <span>4</span>
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
