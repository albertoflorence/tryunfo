import { PropTypes } from 'prop-types';

import './form.css';
import TextField from '../TextField/TextField';
import { inputs } from './inputs';

export default function Form({
  reamingPoints,
  total,
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
    <label htmlFor="cardTrunfo" className="form-trunfo">
      <input
        type="checkbox"
        data-testid="trunfo-input"
        checked={ cardTrunfo }
        id="cardTrunfo"
        name="cardTrunfo"
        onChange={ onInputChange }
      />
      Super Trybe Trunfo
    </label>
  );

  const renderInputs = inputs.map(({ name, ...props }) => (
    <TextField
      key={ name }
      { ...props }
      name={ name }
      value={ filters[name] }
      onChange={ onInputChange }
      error={ !validate(name, filters[name]) }
    />
  ));

  renderInputs.splice(
    inputs.length - 1,
    0,
    <p key="reamingPoints" className="reaming-points">
      Pontos restantes =
      {' '}
      {reamingPoints}
    </p>,
  );

  return (
    <form className="form" onSubmit={ onSaveButtonClick }>
      <section className="form-content">
        <h1 className="title">adicione nova carta</h1>
        {renderInputs}
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
        <p className="form-total">
          Total de pontos =
          {' '}
          {total}
        </p>
        <div className="form-actions">
          {renderTrunfo}
          <button
            type="submit"
            data-testid="save-button"
            disabled={ isSaveButtonDisabled }
            className="save-btn"
          >
            Salvar
          </button>
        </div>
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
  total: PropTypes.string.isRequired,
  reamingPoints: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  validate: PropTypes.func,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};
