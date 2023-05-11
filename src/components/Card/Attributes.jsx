import { PropTypes } from 'prop-types';

import './card.css';

const attr = (n) => `Attr0${n}${'.'.repeat('23')}`;

export default function Attributes({ cardAttr1, cardAttr2, cardAttr3 }) {
  return (
    <div className="attributes">
      <div>
        <p>{attr('1')}</p>
        <span data-testid="attr1-card">{cardAttr1}</span>
      </div>
      <div>
        <p>{attr('2')}</p>
        <span data-testid="attr2-card">{cardAttr2}</span>
      </div>
      <div>
        <p>{attr('3')}</p>
        <span data-testid="attr3-card">{cardAttr3}</span>
      </div>
    </div>
  );
}

Attributes.propTypes = {
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
};
