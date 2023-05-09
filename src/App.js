import React, { useState } from 'react';
import Form from './components/Form';
import Card from './components/Card';

const initialInput = {
  cardName: '',
  cardImage: '',
  cardDescription: '',
  cardAttr1: '',
  cardAttr2: '',
  cardAttr3: '',
  cardRare: '',
  cardTrunfo: false,
};

const formatValue = (value) => {
  if (value === 'on') return true;
  if (value === 'off') return false;
  return value;
};

function App() {
  const [inputs, setInputs] = useState(initialInput);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInputs({ ...inputs, [name]: formatValue(value) });
  };

  const handleSaveButton = () => {};

  return (
    <div>
      <Form
        { ...inputs }
        onInputChange={ handleInputChange }
        onSaveButtonClick={ handleSaveButton }
        isSaveButtonDisabled
      />
      <Card { ...inputs } />
    </div>
  );
}

export default App;
