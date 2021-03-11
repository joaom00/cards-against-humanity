import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';

import whiteCards from '../cards/white';
import blackCards from '../cards/black';

const app = express();
const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
  },
});

io.on('connection', (socket) => {
  let whiteCardsClone = [...whiteCards];
  let blackCardsClone = [...blackCards];
  const cards = [];

  socket.on('joinRoom', async (roomId) => {
    socket.join(roomId);
    console.log(`User join in ${roomId}`);
    const countedPlayers = await io.to(roomId).allSockets();
    io.to(roomId).emit('countedPlayers', countedPlayers.size);
  });

  for (let i = 0; i < 4; i++) {
    const randomIndex = Math.floor(Math.random() * whiteCardsClone.length - 1);
    const card = whiteCardsClone.splice(randomIndex, 1);
    cards.push(card);
  }

  socket.emit('whiteCards', cards);

  socket.on('newWhiteCard', (room) => {
    const randomIndex = Math.floor(Math.random() * whiteCardsClone.length - 1);
    const card = whiteCardsClone.splice(randomIndex, 1);
    socket.emit('whiteCard', card);
  });

  socket.on('newBlackCard', (room) => {
    const randomIndex = Math.floor(Math.random() * blackCardsClone.length - 1);
    const card = blackCardsClone.splice(randomIndex, 1);
    io.to(room).emit('blackCard', card);
  });

  socket.on('newWhiteCardSelected', (data) => {
    const card = data.card[0];
    io.to(data.room).emit('whiteCardSelected', card);
  });
});

server.listen(3333, () => {
  console.log('🚀 Server started on port 3333!');
});
