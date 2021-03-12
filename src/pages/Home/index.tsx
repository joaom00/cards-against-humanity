import { Link } from 'react-router-dom';
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
            <Link to="/newgame">
              <button className="new-game-btn">Novo Jogo</button>
            </Link>
            <Link to="/insertcode">
              <button className="code-btn">Inserir Código</button>
            </Link>
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
