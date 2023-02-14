import React from 'react';
import PropTypes from 'prop-types';
import HeaderLogo from '../image/Marvelogo.png';
import Power from '../image/power.png';
import Skill from '../image/skill.png';
import Speed from '../image/speed.png';

class SavedCards extends React.Component {
  render() {
    const { saveStates, removeCard } = this.props;
    return (
      <ul className="saved-cards">
        <h2 className="h2-card">Todas as Cartas</h2>
        <section className="saved-card">
          { saveStates.map((card, index) => (
            <li key={ index } className="li-card">
              <div className="card">
                <img className="card-logo" src={ HeaderLogo } alt="logo" />
                <h2 className="name-card" data-testid="name-card">{card.cardName}</h2>
                <img
                  className="image-card"
                  data-testid="image-card"
                  src={ card.cardImage }
                  alt={ card.cardName }
                />
                <p
                  className="description"
                  data-testid="description-card"
                >
                  {card.cardDescription}
                </p>
                <section className="attr-card">
                  <p className="attrType">
                    <img className="icon-power" src={ Power } alt="powe" />
                    POWER
                    <div data-testid="attr1-card">{card.cardAttr1}</div>
                  </p>
                  <p className="attrType">
                    <img className="icon-power" src={ Skill } alt="skill" />
                    SKILL
                    <div data-testid="attr2-card">{card.cardAttr2}</div>
                  </p>
                  <p className="attrType">
                    <img className="icon-power" src={ Speed } alt="speed" />
                    SPEED
                    <div data-testid="attr3-card">{card.cardAttr3}</div>
                  </p>
                </section>
                <p className="rare-saved" data-testid="rare-card">{card.cardRare}</p>
              </div>
              <button
                className="delete-button"
                data-testid="delete-button"
                onClick={ () => removeCard(card) }
              >
                Excluir
              </button>
            </li>
          ))}
        </section>
      </ul>
    );
  }
}

SavedCards.propTypes = {
  saveStates: PropTypes.arrayOf.isRequired,
  removeCard: PropTypes.func.isRequired,
};

export default SavedCards;
