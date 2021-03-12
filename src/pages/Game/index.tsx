import { useEffect, useState } from 'react';
import { socket } from '../../services/socket';

import Players from '../../components/Players';
import WhiteCard from '../../components/WhiteCard';
import BlackCard from '../../components/BlackCard';
import WhiteCardBack from '../../components/WhiteCardBack';
import BlackCardBack from '../../components/BlackCardBack';

import * as S from './styles';

interface User {
  id: string;
  name: string;
  room: string;
}

const Game: React.FC = () => {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const nameParam = urlParams.get('name');
  const roomParam = urlParams.get('room');

  const [name, setName] = useState<string | null>('');
  const [room, setRoom] = useState<string | null>('');
  const [users, setUsers] = useState<User[]>([]);
  const [whiteCards, setWhiteCards] = useState<string[]>([]);
  const [blackCard, setBlackCard] = useState('');
  const [whiteCardsSelected, setWhiteCardsSelected] = useState<string[]>([]);

  useEffect(() => {
    setName(nameParam);
    setRoom(roomParam);

    socket.emit('joinRoom', { name, room });
    socket.emit('getFourWhiteCards', room);

    socket.on('usersInRoom', (users) => setUsers(users));
    socket.on('fourWhiteCards', (cards) => setWhiteCards(cards));
    socket.on('blackCard', (card) => setBlackCard(card));
    socket.on('newRound', () => setWhiteCardsSelected([]));
  }, [name, room]);

  useEffect(() => {
    socket.emit('getUsersInRoom', room);
  }, [room]);

  useEffect(() => {
    socket.on('whiteCard', (card) => setWhiteCards([...whiteCards, card]));
  }, [whiteCards]);

  useEffect(() => {
    socket.on('whiteCardSelected', (card) => {
      setWhiteCardsSelected([...whiteCardsSelected, card]);
    });
  }, [whiteCardsSelected]);

  const whiteCardSelected = (index: number) => {
    const card = whiteCards.splice(index, 1);
    socket.emit('newWhiteCardSelected', { room, card });
  };

  return (
    <>
      <S.Container>
        <Players users={users} />

        <S.Main>
          <button
            onClick={() => socket.emit('setNewRound', room)}
            className="new-round-btn"
          >
            Nova rodada
          </button>

          <S.Cards>
            {blackCard && <BlackCard title={blackCard} />}
            {whiteCardsSelected.map((card, index) => (
              <WhiteCard key={index} title={card} />
            ))}
          </S.Cards>

          <S.UserCards>
            {whiteCards.map((card, index) => (
              <div key={index} onClick={() => whiteCardSelected(index)}>
                <WhiteCard title={card} />
              </div>
            ))}
          </S.UserCards>
        </S.Main>
      </S.Container>

      {whiteCards.length < 4 && <WhiteCardBack room={room} />}
      <BlackCardBack room={room} />
    </>
  );
};

export default Game;
