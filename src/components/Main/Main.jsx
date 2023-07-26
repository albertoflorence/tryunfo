import React, { useEffect, useState } from 'react';

import { filterCards } from '../../helper/filter';
import { validate, validateObject } from '../../helper/validate';
import Card from '../Card';
import Filter from '../Filter/Filter';
import Form from '../Form';
import wait from '../../helper/wait';
import { initialCards } from './cards';
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

const DIGITS = 3;
const MAX_SUM = 210;

const initialFilters = { byName: '', byRarity: 'todas', byTrunfo: false };

const formatValue = ({ value, type, checked }) => (type === 'checkbox' ? checked : value);

const handleChange = ({ target }, callback) => {
  callback((inputs) => ({ ...inputs, [target.name]: formatValue(target) }));
};

const sumAttrs = ({
  cardAttr1,
  cardAttr2,
  cardAttr3 }) => Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3);

const reamingPoints = (inputs) => MAX_SUM - sumAttrs(inputs);

const formatNumber = (number) => number.toString().padStart(DIGITS, '0');

function Main() {
  const [inputs, setInputs] = useState(initialInput);
  const [isValid, setIsValid] = useState(false);
  const [hasTrunfo, setHasTrunfo] = useState(false);
  const [cards, setCards] = useState(initialCards);
  const [filters, setFilters] = useState(initialFilters);
  const [animation, setAnimation] = useState(false);

  const handleInputChange = (event) => handleChange(event, setInputs);
  const handleFilterChange = (event) => handleChange(event, setFilters);

  useEffect(() => {
    setIsValid(validate({ ...inputs, total: sumAttrs(inputs) }));
  }, [inputs]);

  const handleSaveButton = async (event) => {
    event.preventDefault();
    if (!isValid) return;
    const TIMER = 600;
    setAnimation(true);
    await wait(TIMER);
    setAnimation(false);
    setCards([...cards, inputs]);
    setInputs(initialInput);
    if (inputs.cardTrunfo) setHasTrunfo(true);
    console.log(cards);
  };

  const handleDeleteCard = (card) => {
    if (card.cardTrunfo) setHasTrunfo(false);
    setCards(cards.filter(({ cardName }) => card.cardName !== cardName));
  };

  return (
    <main className="container">
      <section className="content">
        <Form
          { ...inputs }
          hasTrunfo={ hasTrunfo }
          onInputChange={ handleInputChange }
          onSaveButtonClick={ handleSaveButton }
          isSaveButtonDisabled={ !isValid }
          total={ formatNumber(sumAttrs(inputs)) }
          reamingPoints={ formatNumber(reamingPoints(inputs)) }
          validate={ (key, value) => validateObject[key] && validateObject[key](value) }
        />
        <section className="card-content">
          <h1 className="title">pré-visualização</h1>
          <div className={ animation ? 'dropDown' : '' }>
            <Card { ...inputs } />
          </div>
        </section>

      </section>
      <section className="showCase">
        <h1 className="title">todas as cartas</h1>
        <Filter { ...filters } onChange={ handleFilterChange } />
        <div className="grid">
          {filterCards(cards, filters).map((card) => (
            <div className="card-showCase" key={ card.cardName }>
              <Card { ...card } />
              <button
                data-testid="delete-button"
                onClick={ () => handleDeleteCard(card) }
              >
                Excluir
              </button>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Main;
