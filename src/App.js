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
    setInputs(initialInput);
    if (inputs.cardTrunfo) setHasTrunfo(true);
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
    </div>
  );
}

export default App;
