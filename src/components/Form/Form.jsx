import { PropTypes } from 'prop-types';

import './form.css';
import TextField from '../TextField/TextField';
import { inputs } from './inputs';

export default function Form({
  cardRare,
  cardTrunfo,
  hasTrunfo,
  isSaveButtonDisabled,
  onInputChange,
  onSaveButtonClick,
  validate = () => true,
  ...filters
}) {
  const renderTrunfo = hasTrunfo ? (
    <p>Você já tem um Super Trunfo em seu baralho</p>
  ) : (
    <TextField
      type="checkbox"
      data-testid="trunfo-input"
      label="Super Trunfo"
      checked={ cardTrunfo }
      name="cardTrunfo"
      onChange={ onInputChange }
    />
  );
  return (
    <form className="form" onSubmit={ onSaveButtonClick }>
      <section className="form-content">
        <h1 className="title">adicione uma nova carta</h1>
        {inputs.map(({ name, ...props }) => (
          <TextField
            key={ name }
            { ...props }
            name={ name }
            value={ filters[name] }
            onChange={ onInputChange }
            error={ !validate(name, filters[name]) }
          />
        ))}
        <div>
          <label htmlFor="cardRare">Raridade</label>
          <select
            data-testid="rare-input"
            value={ cardRare }
            name="cardRare"
            id="cardRare"
            onChange={ onInputChange }
            className="input"
          >
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </div>
        {renderTrunfo}
        <button
          type="submit"
          data-testid="save-button"
          disabled={ isSaveButtonDisabled }
        >
          Salvar
        </button>
      </section>
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
  hasTrunfo: PropTypes.bool.isRequired,
  validate: PropTypes.func,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};
