import { PropTypes } from 'prop-types';

import './textField.css';
import clsx from '../../helper/clsx';

export default function TextField({
  icon = null,
  multiline = false,
  error = '',
  hasError = false,
  outlined = false,
  ...props
}) {
  const { label, name } = props;
  const Element = multiline ? 'textarea' : 'input';
  const renderError = error ? (
    <img src="/images/error.svg" alt="error" />
  ) : (
    <img src="/images/ok.svg" alt="error" />
  );

  return (
    <div className={ clsx('wrapper', outlined && 'outlined') }>
      <label htmlFor={ name }>
        {label}
      </label>
      <div>
        <div className="inputWrapper">
          <Element
            className="input"
            type="text"
            id={ name }
            { ...props }
          />
          {icon && <span className="iconWrapper">{icon}</span>}
        </div>
        {hasError && <div className="errorWrapper">{renderError}</div>}
      </div>
    </div>
  );
}

TextField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  error: PropTypes.bool,
  hasError: PropTypes.bool,
  multiline: PropTypes.bool,
  outlined: PropTypes.bool,
  icon: PropTypes.node,
  onChange: PropTypes.func.isRequired,
};
