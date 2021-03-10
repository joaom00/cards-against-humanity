import WhiteCard from '../../components/WhiteCard';
import BlackCard from '../../components/BlackCard';
import WhiteCardBack from '../../components/WhiteCardBack';
import * as S from './styles';

const Game: React.FC = () => {
  return (
    <>
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
      <WhiteCardBack />
    </>
  );
};

export default Game;
