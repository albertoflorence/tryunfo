import { PropTypes } from 'prop-types';

import './textField.css';

export default function TextField({ icon = null, multiline = false, ...props }) {
  const { label, name } = props;
  const Element = multiline ? 'textarea' : 'input';
  return (
    <div className="wrapper">
      <label className="label" htmlFor={ name }>
        {label}
      </label>
      <Element className="input" type="text" id={ name } { ...props } />
      {icon && <span className="iconWrapper">{icon}</span>}
    </div>
  );
}

TextField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  multiline: PropTypes.bool,
  icon: PropTypes.node,
  onChange: PropTypes.func.isRequired,
};
