import * as S from './styles';

const Home: React.FC = () => {
  return (
    <S.Background>
      <S.Container>
        <S.Title>
          Cards <br />
          Against <br />
          Humanity.
        </S.Title>

        <S.BottomContainer>
          <S.Buttons>
            <button className="new-game-btn">Novo Jogo</button>
            <button className="code-btn">Inserir Código</button>
          </S.Buttons>

          <span>
            10 pessoas jogando neste
            <br /> momento
          </span>
        </S.BottomContainer>
      </S.Container>
    </S.Background>
  );
};

export default Home;
