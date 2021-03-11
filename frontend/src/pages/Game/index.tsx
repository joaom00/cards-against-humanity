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

  console.log(whiteCardsSelected);

  const whiteCardSelected = (index: number) => {
    const card = whiteCards.splice(index, 1);
    socket.emit('newWhiteCardSelected', { room: 'room', card });
  };

  useEffect(() => {
    socket.on('whiteCardSelected', (card) => {
      setWhiteCardsSelected([...whiteCardsSelected, card[0]]);
    });
  }, [whiteCardsSelected]);

  useEffect(() => {
    socket.on('whiteCards', (cards) => {
      setWhiteCards(cards);
    });
  }, []);

  socket.on('whiteCard', (card) => setWhiteCards([...whiteCards, card]));
  socket.on('blackCard', (card) => setBlackCard(card));

  return (
    <>
      <S.Container>
        <Players />

        <S.Main>
          <S.Cards>
            {blackCard && <BlackCard title={blackCard} />}
            {whiteCardsSelected.map((card, index) => (
              <WhiteCard title={card} key={index} />
            ))}
          </S.Cards>

          <S.UserCards>
            {whiteCards.map((card, index) => (
              <div
                key={Math.floor(Math.random() * 999999)}
                onClick={() => whiteCardSelected(index)}
              >
                <WhiteCard title={card} />
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
