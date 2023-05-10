import { PropTypes } from 'prop-types';

export default function Filter({ onChange, ...filters }) {
  return (
    <div>
      <input
        data-testid="name-filter"
        type="text"
        name="byName"
        value={ filters.byName }
        onChange={ onChange }
        disabled={ filters.byTrunfo }
      />
      <select
        data-testid="rare-filter"
        name="byRarity"
        value={ filters.byRarity }
        onChange={ onChange }
        disabled={ filters.byTrunfo }
      >
        <option value="todas">todas</option>
        <option value="normal">normal</option>
        <option value="raro">raro</option>
        <option value="muito raro">muito raro</option>
      </select>
      <input
        data-testid="trunfo-filter"
        type="checkbox"
        name="byTrunfo"
        checked={ filters.byTrunfo }
        onChange={ onChange }
      />
    </div>
  );
}

Filter.propTypes = {
  byName: PropTypes.string.isRequired,
  byRarity: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
