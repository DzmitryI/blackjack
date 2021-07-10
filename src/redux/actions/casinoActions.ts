import {
  CasinoTypes, Deck, CasinoAction, PayloadDeck,
} from '../../types/casino';

export function madeDeck({ values, suits }: PayloadDeck): CasinoAction {
  const deck: Deck = [];
  for (let i = 0; i < suits.length; i += 1) {
    for (let j = 0; j < values.length; j += 1) {
      let count = 0;
      if (+values[j]) {
        count = +values[j];
      } else {
        count = values[j] === 'A' ? 11 : 10;
      }
      deck.push({ value: values[j], suit: suits[i], count });
    }
  }
  return {
    type: CasinoTypes.MADE_DECK,
    payload: deck,
  };
}

export function shuffleDeck(deck: Deck): CasinoAction {
  for (let i = 0; i < 1000; i += 1) {
    const loc1 = Math.floor((Math.random() * deck.length));
    const loc2 = Math.floor((Math.random() * deck.length));
    const tmp = deck[loc1];
    deck[loc1] = deck[loc2];
    deck[loc2] = tmp;
  }
  return {
    type: CasinoTypes.SHUFFLE_DECK,
    payload: deck,
  };
}
