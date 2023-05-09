import { PropTypes } from 'prop-types';

export default function Form({
  cardName,
  cardDescription,
  cardAttr1,
  cardAttr2,
  cardAttr3,
  cardImage,
  cardRare,
  cardTrunfo,
  isSaveButtonDisabled,
  onInputChange,
  onSaveButtonClick,
}) {
  return (
    <form>
      <input
        type="text"
        data-testid="name-input"
        value={ cardName }
        onChange={ onInputChange }
      />
      <textarea
        data-testid="description-input"
        value={ cardDescription }
        onChange={ onInputChange }
      />
      <input
        type="number"
        data-testid="attr1-input"
        value={ cardAttr1 }
        onChange={ onInputChange }
      />
      <input
        type="number"
        data-testid="attr2-input"
        value={ cardAttr2 }
        onChange={ onInputChange }
      />
      <input
        type="number"
        data-testid="attr3-input"
        value={ cardAttr3 }
        onChange={ onInputChange }
      />
      <input
        type="text"
        data-testid="image-input"
        value={ cardImage }
        onChange={ onInputChange }
      />
      <select data-testid="rare-input" value={ cardRare } onChange={ onInputChange }>
        <option value="normal">normal</option>
        <option value="raro">raro</option>
        <option value="muito raro">muito raro</option>
      </select>
      <input
        type="checkbox"
        data-testid="trunfo-input"
        checked={ cardTrunfo }
        onChange={ onInputChange }
      />
      <button
        onClick={ onSaveButtonClick }
        data-testid="save-button"
        disabled={ isSaveButtonDisabled }
      >
        Salvar
      </button>
    </form>
  );
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};
