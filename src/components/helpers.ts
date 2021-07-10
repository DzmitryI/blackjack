import { Chips } from '../types/casino';

const changeChipSize = (chips: Chips, chosenBet: number): number => {
  const curIdx = chips.findIndex((chip) => chip.value === chosenBet);
  let value: number | null = null;
  if (curIdx > 0) {
    value = chips[curIdx - 1].value;
  } else {
    value = chips[chips.length - 1].value;
  }
  return value;
};

export { changeChipSize };
