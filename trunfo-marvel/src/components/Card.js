import React from 'react';
import PropTypes from 'prop-types';
import HeaderLogo from '../image/Marvelogo.png';
import Power from '../image/power.png';
import Skill from '../image/skill.png';
import Speed from '../image/speed.png';

class Card extends React.Component {
  render() {
    const { cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.props;

    return (
      <section className="card">
        <img className="card-logo" src={ HeaderLogo } alt="logo" />
        <h2 className="name-card" data-testid="name-card">{cardName}</h2>
        <img
          className="image-card"
          data-testid="image-card"
          src={ cardImage }
          alt={ cardName }
        />
        <p className="description" data-testid="description-card">{cardDescription}</p>
        <section className="attr-card">
          <p className="attrType">
            <img className="icon-power" src={ Power } alt="powe" />
            POWER
            <div data-testid="attr1-card">{cardAttr1}</div>
          </p>
          <p className="attrType">
            <img className="icon-power" src={ Skill } alt="skill" />
            SKILL
            <div data-testid="attr2-card">{cardAttr2}</div>
          </p>
          <p className="attrType">
            <img className="icon-power" src={ Speed } alt="speed" />
            SPEED
            <div data-testid="attr3-card">{cardAttr3}</div>
          </p>
        </section>
        <section className="rare-trunfo">
          <p className="rare" data-testid="rare-card">{cardRare}</p>
          <div className="trunfo">
            {
              cardTrunfo === true && (
                <p data-testid="trunfo-card">Super Trunfo</p>)
            }
          </div>
        </section>
      </section>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};

export default Card;
