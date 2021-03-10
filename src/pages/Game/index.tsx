import { useEffect, useState } from 'react';

import Players from '../../components/Players';
import WhiteCard from '../../components/WhiteCard';
import BlackCard from '../../components/BlackCard';
import WhiteCardBack from '../../components/WhiteCardBack';
import BlackCardBack from '../../components/BlackCardBack';

import * as S from './styles';
import { socket } from '../../services/socket';

interface GameProps {
  room: string;
}

const Game: React.FC<GameProps> = ({ room }) => {
  const [whiteCards, setWhiteCards] = useState<string[]>([]);
  const [blackCard, setBlackCard] = useState('');
  const [whiteCardsSelected, setWhiteCardsSelected] = useState<string[]>([]);

  const whiteCardSelected = (index: number) => {
    const card = whiteCards.splice(index, 1);
    setWhiteCardsSelected([...whiteCardsSelected, card[0]]);
  };

  useEffect(() => {
    socket.on('whiteCards', (cards) => {
      setWhiteCards(cards);
    });
    socket.on('blackCard', (card) => setBlackCard(card));
  }, []);

  return (
    <>
      <S.Container>
        <Players />

        <S.Main>
          <S.Cards>
            <BlackCard title={blackCard} />
            {whiteCardsSelected.map((card, index) => (
              <WhiteCard title={card} key={index} />
            ))}
          </S.Cards>

          <S.UserCards>
            {whiteCards.map((card, index) => (
              <div onClick={() => whiteCardSelected(index)}>
                <WhiteCard title={card} key={index} />
              </div>
            ))}
          </S.UserCards>
        </S.Main>
      </S.Container>
      <WhiteCardBack />
      <BlackCardBack />
    </>
  );
};

export default Game;
