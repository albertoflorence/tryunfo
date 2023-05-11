const range = (min, max) => (input) => Number(input) >= min && Number(input) <= max;
const hasValue = (input) => input.trim().length !== 0;

const MIN_ATTR = 0;
const MAX_ATTR = 90;
const MAX_SUM = 210;

export const validateObject = {
  cardName: hasValue,
  cardImage: hasValue,
  cardDescription: hasValue,
  cardAttr1: range(MIN_ATTR, MAX_ATTR),
  cardAttr2: range(MIN_ATTR, MAX_ATTR),
  cardAttr3: range(MIN_ATTR, MAX_ATTR),
  sum: range(MIN_ATTR, MAX_SUM),
};

export const validate = (inputs) => Object
  .entries(validateObject)
  .every(([key, test]) => test(inputs[key]));
