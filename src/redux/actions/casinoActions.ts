import {
  casino, Deck, MadeDeck, PayloadDeck,
} from '../../types/casino';

export function madeDeck({ values, suits }: PayloadDeck): MadeDeck {
  const deck: Deck = [];
  for (let i = 0; i < suits.length; i += 1) {
    for (let j = 0; j < values.length; j += 1) {
      deck.push({ value: values[j], suit: suits[i] });
    }
  }
  for (let i = 0; i < 1000; i += 1) {
    const loc1 = Math.floor((Math.random() * deck.length));
    const loc2 = Math.floor((Math.random() * deck.length));
    const tmp = deck[loc1];
    deck[loc1] = deck[loc2];
    deck[loc2] = tmp;
  }
  return {
    type: casino.MADE_DECK,
    payload: deck,
  };
}
