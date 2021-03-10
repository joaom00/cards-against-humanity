import BlackCard from '../../components/BlackCard';
import WhiteCard from '../../components/WhiteCard';
import * as S from './styles';

const Game: React.FC = () => {
  return (
    <S.Container>
      <div className="players"></div>

      <S.Main>
        <S.Cards>
          <BlackCard />
          <WhiteCard />
          <WhiteCard />
          <WhiteCard />
        </S.Cards>

        <S.UserCards>
          <WhiteCard />
          <WhiteCard />
          <WhiteCard />
          <BlackCard />
        </S.UserCards>
      </S.Main>
    </S.Container>
  );
};

export default Game;
