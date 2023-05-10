const cardFilters = {
  byName: (card, filter) => card.cardName.includes(filter),
  byRarity: (card, filter) => (filter === 'todas'
    ? card
    : card.cardRare === filter),
  byTrunfo: (card, filter) => card.cardTrunfo === filter,
};

const applyFilter = (cards, [filterName, input]) => cards
  .filter((card) => cardFilters[filterName](card, input));

export const filterCards = (cards, filters) => Object
  .entries(filters)
  .reduce(applyFilter, cards);
