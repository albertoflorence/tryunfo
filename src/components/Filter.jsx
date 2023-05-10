import { PropTypes } from 'prop-types';

export default function Filter({ onChange, ...filters }) {
  const handleChange = (event) => {
    const { name, value } = event.target;
    onChange({
      ...filters,
      [name]: value,
    });
  };
  return (
    <div>
      <input
        type="text"
        data-testid="name-filter"
        value={ filters.byName }
        name="byName"
        onChange={ handleChange }
      />
      <select
        data-testid="rare-filter"
        name="byRarity"
        onChange={ handleChange }
        value={ filters.byRarity }
      >
        <option value="todas">todas</option>
        <option value="normal">normal</option>
        <option value="raro">raro</option>
        <option value="muito raro">muito raro</option>
      </select>
    </div>
  );
}

Filter.propTypes = {
  byName: PropTypes.string.isRequired,
  byRarity: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
