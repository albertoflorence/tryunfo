import { PropTypes } from 'prop-types';

import './textField.css';

export default function TextField(props) {
  const { label, name } = props;
  return (
    <div>
      <label htmlFor={ name }>{label}</label>
      <input type="text" { ...props } />
    </div>
  );
}

TextField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
