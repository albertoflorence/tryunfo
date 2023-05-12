import { PropTypes } from 'prop-types';

import './card.css';
import Attributes from './Attributes';

export default function Card({
  cardName,
  cardImage,
  cardDescription,
  cardAttr1,
  cardAttr2,
  cardAttr3,
  cardRare,
  cardTrunfo,
}) {
  const handleDefaultImage = ({ currentTarget }) => {
    currentTarget.onerror = null;
    currentTarget.src = '/images/default.svg';
  };
  return (
    <section className="card">
      <div className="card-inner">
        <div>
          <h3 data-testid="name-card">{cardName}</h3>
          <div className="card-image">
            <img
              data-testid="image-card"
              src={ cardImage }
              alt={ cardName }
              onError={ handleDefaultImage }
            />
          </div>
          <span className="description" data-testid="description-card">
            <p>{cardDescription}</p>
          </span>
          <Attributes
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
          />
          <p data-testid="rare-card" className="card-rare">{cardRare}</p>
        </div>
      </div>
      {cardTrunfo && (
        <span className="card-trunfo" data-testid="trunfo-card">
          <p>Super Trunfo</p>
          <img src="./images/logo_tryunfo.svg" alt="Super Trunfo" />
        </span>
      )}
    </section>
  );
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};
