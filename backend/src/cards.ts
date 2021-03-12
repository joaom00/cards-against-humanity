import whiteCards from '../cards/white';

interface Deck {
  room: string;
  deck: string[];
}

const decks = [] as Deck[];

export const createDeckOfRoom = (room: string) => {
  const deck = {
    room,
    deck: [...whiteCards],
  };

  decks.push(deck);

  return decks;
};

export const deckAlreadyExists = (room: string) =>
  decks.some((deck) => deck.room === room);

export const pickFourCards = (room: string) => {
  const roomDeck = decks.find((deck) => deck.room === room);
  const fourCards = [];

  if (roomDeck) {
    for (let i = 0; i < 4; i++) {
      const randomIndex = Math.floor(Math.random() * roomDeck.deck.length - 1);
      const card = roomDeck.deck.splice(randomIndex, 1)[0];
      fourCards.push(card);
    }

    return {
      fourCards,
      roomDeck,
    };
  }
};
