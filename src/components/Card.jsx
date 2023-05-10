import { PropTypes } from 'prop-types';

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
  return (
    <section>
      <h3 data-testid="name-card">{cardName}</h3>
      <img data-testid="image-card" src={ cardImage } alt={ cardName } />
      <p data-testid="description-card">{cardDescription}</p>
      <p data-testid="attr1-card">{cardAttr1}</p>
      <p data-testid="attr2-card">{cardAttr2}</p>
      <p data-testid="attr3-card">{cardAttr3}</p>
      <p data-testid="rare-card">{cardRare}</p>
      {cardTrunfo && <span data-testid="trunfo-card">Super Trunfo</span>}
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
