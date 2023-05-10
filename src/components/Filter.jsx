import { PropTypes } from 'prop-types';

export default function Filter({ filter, onChange }) {
  const handleChange = (event) => {
    onChange(event.target.value);
  };
  return (
    <input
      type="text"
      data-testid="name-filter"
      value={ filter }
      onChange={ handleChange }
    />
  );
}

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
