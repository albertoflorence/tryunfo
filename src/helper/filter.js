const test = {
  byName: (card, filter) => card.cardName.includes(filter),
  byRarity: (card, filter) => (filter === 'todas'
    ? card
    : card.cardRare === filter),
};

const applyFilter = (cards, [filterName, input]) => cards
  .filter((card) => test[filterName](card, input));

export const filterCards = (cards, filters) => Object
  .entries(filters)
  .reduce(applyFilter, cards);
