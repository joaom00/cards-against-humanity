import WhiteCard from '../../components/WhiteCard';
import BlackCard from '../../components/BlackCard';
import WhiteCardBack from '../../components/WhiteCardBack';
import BlackCardBack from '../../components/BlackCardBack';
import * as S from './styles';
import Players from '../../components/Players';

const Game: React.FC = () => {
  return (
    <>
      <S.Container>
        <Players />

        <S.Main>
          <S.Cards>
            <BlackCard />
            <WhiteCard />
            <WhiteCard />
            <WhiteCard />
            <WhiteCard />
          </S.Cards>

          <S.UserCards>
            <WhiteCard />
            <WhiteCard />
            <WhiteCard />
            <WhiteCard />
            <BlackCard />
          </S.UserCards>
        </S.Main>
      </S.Container>
      <WhiteCardBack />
      <BlackCardBack />
    </>
  );
};

export default Game;
