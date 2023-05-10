import React, { useEffect, useState } from 'react';

import { filterCards } from '../../helper/filter';
import { validate } from '../../helper/validate';
import Card from '../Card';
import Filter from '../Filter';
import Form from '../Form';
import './main.css';

const initialInput = {
  cardName: '',
  cardImage: '',
  cardDescription: '',
  cardAttr1: '0',
  cardAttr2: '0',
  cardAttr3: '0',
  cardRare: 'normal',
  cardTrunfo: false,
};

const initialFilters = { byName: '', byRarity: 'todas', byTrunfo: false };

const formatValue = ({ value, type, checked }) => (type === 'checkbox' ? checked : value);

const handleChange = ({ target }, callback) => {
  callback((inputs) => ({ ...inputs, [target.name]: formatValue(target) }));
};

const sumAttrs = ({
  cardAttr1,
  cardAttr2,
  cardAttr3 }) => Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3);

function Main() {
  const [inputs, setInputs] = useState(initialInput);
  const [isValid, setIsValid] = useState(false);
  const [hasTrunfo, setHasTrunfo] = useState(false);
  const [cards, setCards] = useState([]);
  const [filters, setFilters] = useState(initialFilters);

  const handleInputChange = (event) => handleChange(event, setInputs);
  const handleFilterChange = (event) => handleChange(event, setFilters);

  useEffect(() => {
    setIsValid(validate({ ...inputs, sum: sumAttrs(inputs) }));
  }, [inputs]);

  const handleSaveButton = (event) => {
    event.preventDefault();
    if (!isValid) return;
    setCards([...cards, inputs]);
    setInputs(initialInput);
    if (inputs.cardTrunfo) setHasTrunfo(true);
  };

  const handleDeleteCard = (card) => {
    if (card.cardTrunfo) setHasTrunfo(false);
    setCards(cards.filter(({ cardName }) => card.cardName !== cardName));
  };

  return (
    <div className="container">
      <Filter { ...filters } onChange={ handleFilterChange } />
      <Form
        { ...inputs }
        hasTrunfo={ hasTrunfo }
        onInputChange={ handleInputChange }
        onSaveButtonClick={ handleSaveButton }
        isSaveButtonDisabled={ !isValid }
      />
      <Card { ...inputs } />
      <div>
        {filterCards(cards, filters).map((card) => (
          <div key={ card.cardName }>
            <Card { ...card } />
            <button data-testid="delete-button" onClick={ () => handleDeleteCard(card) }>
              Excluir
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Main;
