import React, { useEffect, useState } from 'react';
import { validate } from './helper/validate';
import Form from './components/Form';
import Card from './components/Card';

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

const formatValue = (value) => {
  if (value === 'on') return true;
  if (value === 'off') return false;
  return value;
};

const sumAttrs = ({
  cardAttr1,
  cardAttr2,
  cardAttr3 }) => Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3);

function App() {
  const [inputs, setInputs] = useState(initialInput);
  const [isValid, setIsValid] = useState(false);
  const [hasTrunfo, setHasTrunfo] = useState(false);
  const [cards, setCards] = useState([]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInputs({ ...inputs, [name]: formatValue(value) });
  };

  useEffect(() => {
    if (validate({ ...inputs, sum: sumAttrs(inputs) })) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [inputs]);

  const handleSaveButton = () => {
    setCards([...cards, inputs]);
    setInputs(initialInput);
    if (inputs.cardTrunfo) setHasTrunfo(true);
  };

  const handleDeleteCard = (card) => {
    if (card.cardTrunfo) setHasTrunfo(false);
    setCards(cards.filter(({ cardName }) => card.cardName !== cardName));
  };

  return (
    <div>
      <Form
        { ...inputs }
        hasTrunfo={ hasTrunfo }
        onInputChange={ handleInputChange }
        onSaveButtonClick={ handleSaveButton }
        isSaveButtonDisabled={ !isValid }
      />
      <Card { ...inputs } />
      <div>
        {cards.map((card) => (
          <div key={ card.cardName }>
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
    </div>
  );
}

export default App;
