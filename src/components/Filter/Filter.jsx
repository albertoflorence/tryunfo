import { PropTypes } from 'prop-types';

import './filter.css';

export default function Filter({ onChange, ...filters }) {
  return (
    <div className="filter-container">
      <label htmlFor="byName">Filtro de busca</label>
      <input
        data-testid="name-filter"
        type="text"
        name="byName"
        id="byName"
        value={ filters.byName }
        onChange={ onChange }
        disabled={ filters.byTrunfo }
        placeholder="Nome da carta"
      />
      <select
        data-testid="rare-filter"
        name="byRarity"
        value={ filters.byRarity }
        onChange={ onChange }
        disabled={ filters.byTrunfo }
        className="filter-rarity"
      >
        <option value="todas">Raridade</option>
        <option value="normal">Normal</option>
        <option value="raro">Raro</option>
        <option value="muito raro">Muito Raro</option>
      </select>
      <div className="filter-trunfo">
        <input
          data-testid="trunfo-filter"
          type="checkbox"
          name="byTrunfo"
          id="byTrunfo"
          checked={ filters.byTrunfo }
          onChange={ onChange }
        />
        <label htmlFor="byTrunfo">Super Trybe Trunfo</label>
      </div>
    </div>
  );
}

Filter.propTypes = {
  byName: PropTypes.string.isRequired,
  byRarity: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
