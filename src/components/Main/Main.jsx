import React, { useEffect, useState } from 'react';

import { filterCards } from '../../helper/filter';
import { validate, validateObject } from '../../helper/validate';
import Card from '../Card';
import Filter from '../Filter/Filter';
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

const initialCards = Array.from({ length: 9 }, (_, i) => ({ cardName: 'Javascript' + i,
  cardImage: 'https://arquivo.devmedia.com.br/noticias/artigos/artigo_javascript-reduce-reduzindo-uma-colecao-em-um-unico-objeto_37981.jpg',
  cardDescription: 'JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma. Juntamente com HTML e CSS.',
  cardAttr1: '90',
  cardAttr2: '90',
  cardAttr3: '90',
  cardRare: 'normal',
  cardTrunfo: true }));

  console.log(initialCards)

function Main() {
  const [inputs, setInputs] = useState(initialInput);
  const [isValid, setIsValid] = useState(false);
  const [hasTrunfo, setHasTrunfo] = useState(false);
  const [cards, setCards] = useState(initialCards);
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
    <main className="container">
      <section className="content">
        <Form
          { ...inputs }
          hasTrunfo={ hasTrunfo }
          onInputChange={ handleInputChange }
          onSaveButtonClick={ handleSaveButton }
          isSaveButtonDisabled={ !isValid }
          validate={ (key, value) => validateObject[key] && validateObject[key](value) }
        />
        <section className="card-content">
          <h1 className="title">pré-visualização</h1>
          <Card { ...inputs } />
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
