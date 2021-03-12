import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';
import { addUser, getUsersInRoom } from './users';

import whiteCards from '../cards/white';
import blackCards from '../cards/black';
import { createDeckOfRoom, deckAlreadyExists, pickFourCards } from './cards';

const app = express();
const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
  },
});

io.on('connection', (socket) => {
  console.log('new user connected');

  let blackCardsClone = [...blackCards];

  socket.on('joinRoom', ({ name, room }) => {
    addUser(socket.id, name, room);

    socket.join(room);

    if (deckAlreadyExists(room)) return;

    const decks = createDeckOfRoom(room);
  });

  socket.on('getFourWhiteCards', (room) => {
    if (!room) return;
    const fourCards = pickFourCards(room);

    console.log(fourCards?.roomDeck.deck.length);

    socket.emit('fourWhiteCards', fourCards?.fourCards);
  });

  socket.on('getUsersInRoom', (room) => {
    const users = getUsersInRoom(room);

    io.to(room).emit('usersInRoom', users);
  });

  // socket.on('newWhiteCard', () => {
  //   const randomIndex = Math.floor(Math.random() * whiteCardsClone.length - 1);
  //   const card = whiteCardsClone.splice(randomIndex, 1);
  //   socket.emit('whiteCard', card);
  // });

  socket.on('newBlackCard', (room) => {
    const randomIndex = Math.floor(Math.random() * blackCardsClone.length - 1);
    const card = blackCardsClone.splice(randomIndex, 1);
    io.to(room).emit('blackCard', card);
  });

  socket.on('newWhiteCardSelected', (data) => {
    const card = data.card[0];
    io.to(data.room).emit('whiteCardSelected', card);
  });

  socket.on('disconnect', () => {
    console.log('user had left!!!');
  });
});

server.listen(3333, () => {
  console.log('🚀 Server started on port 3333!');
});
