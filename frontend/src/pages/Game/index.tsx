import { useEffect, useState } from 'react';

import Players from '../../components/Players';
import WhiteCard from '../../components/WhiteCard';
import BlackCard from '../../components/BlackCard';
import WhiteCardBack from '../../components/WhiteCardBack';
import BlackCardBack from '../../components/BlackCardBack';

import * as S from './styles';
import { socket } from '../../services/socket';

const Game: React.FC = () => {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const nameParam = urlParams.get('name');
  const roomParam = urlParams.get('room');

  const [name, setName] = useState<string | null>('');
  const [room, setRoom] = useState<string | null>('');
  const [users, setUsers] = useState([]);
  const [whiteCards, setWhiteCards] = useState<string[]>([]);
  // const [blackCard, setBlackCard] = useState('');
  // const [whiteCardsSelected, setWhiteCardsSelected] = useState<string[]>([]);

  useEffect(() => {
    setName(nameParam);
    setRoom(roomParam);

    socket.emit('joinRoom', { name, room });
    socket.emit('getFourWhiteCards', room);
    socket.on('usersInRoom', (users) => setUsers(users));
  }, [name, room]);

  useEffect(() => {
    socket.on('fourWhiteCards', (cards) => setWhiteCards(cards));
  }, []);

  useEffect(() => {
    socket.emit('getUsersInRoom', room);
  }, [room]);

  // useEffect(() => {
  //   socket.on('blackCard', (card) => setBlackCard(card));
  // }, []);

  // useEffect(() => {
  //   socket.on('whiteCards', (cards) => {
  //     setWhiteCards(cards);
  //   });
  // }, []);

  // useEffect(() => {
  //   socket.on('whiteCardSelected', (card) => {
  //     setWhiteCardsSelected([...whiteCardsSelected, card[0]]);
  //   });
  // }, [whiteCardsSelected]);

  // const whiteCardSelected = (index: number) => {
  //   const card = whiteCards.splice(index, 1);
  //   socket.emit('newWhiteCardSelected', { room, card });
  // };

  // useEffect(() => {
  //   socket.on('whiteCardSelected', (card) => {
  //     setWhiteCardsSelected([...whiteCardsSelected, card[0]]);
  //   });
  // }, [whiteCardsSelected]);

  // useEffect(() => {
  //   socket.on('whiteCards', (cards) => {
  //     setWhiteCards(cards);
  //   });
  // }, []);

  return (
    <>
      <S.Container>
        <Players users={users} />

        <S.Main>
          <S.Cards>
            {/* {blackCard && <BlackCard title={blackCard} />}
            {whiteCardsSelected.map((card, index) => (
              <WhiteCard title={card} key={index} />
            ))} */}
          </S.Cards>

          <S.UserCards>
            {whiteCards.map((card, index) => (
              <div
                key={index}
                // onClick={() => whiteCardSelected(index)}
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
