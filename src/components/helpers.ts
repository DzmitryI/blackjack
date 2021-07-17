import { Chips } from '../types/casino';

const changeChipSize = (chips: Chips, chosenBet: number, direction: string): number => {
  const curIdx = chips.findIndex((chip) => chip.value === chosenBet);
  let value: number | null = null;
  if (direction === 'dec') {
    if (curIdx > 0) {
      value = chips[curIdx - 1].value;
    } else {
      value = chips[chips.length - 1].value;
    }
  } else if (curIdx < chips.length - 1) {
    value = chips[curIdx + 1].value;
  } else {
    value = chips[0].value;
  }
  return value;
};

const checkColor = (chips: Chips, bet: number): string => {
  let curColor = '';
  chips.forEach((chip) => {
    if (bet >= chip.value) {
      curColor = chip.color;
    }
  });
  return curColor;
};

export { changeChipSize, checkColor };
