import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
  render() {
    const { cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;
    return (
      <form>
        <legend>ADICIONE NOVA CARTA</legend>
        <label className="cardName" htmlFor="cardName">
          Nome
          <input
            data-testid="name-input"
            id="cardName"
            name="cardName"
            type="text"
            value={ cardName }
            onChange={ onInputChange }
            required
          />
        </label>
        <label className="cardDescription" htmlFor="cardDescription">
          Descrição
          <textarea
            data-testid="description-input"
            id="cardDescription"
            name="cardDescription"
            value={ cardDescription }
            onChange={ onInputChange }
            required
          />
        </label>
        <section className="attr">
          <label className="cardAttr" htmlFor="cardAttr1">
            POWER
            <input
              className="inputAttr"
              data-testid="attr1-input"
              id="cardAttr1"
              name="cardAttr1"
              type="number"
              value={ cardAttr1 }
              onChange={ onInputChange }
              required
            />
          </label>
          <label className="cardAttr" htmlFor="cardAttr2">
            SKILL
            <input
              className="inputAttr"
              data-testid="attr2-input"
              id="cardAttr2"
              name="cardAttr2"
              type="number"
              value={ cardAttr2 }
              onChange={ onInputChange }
              required
            />
          </label>
          <label className="cardAttr" htmlFor="cardAttr3">
            SPEED
            <input
              className="inputAttr"
              data-testid="attr3-input"
              id="cardAttr3"
              name="cardAttr3"
              type="number"
              value={ cardAttr3 }
              onChange={ onInputChange }
              required
            />
          </label>
        </section>
        <label className="cardImage" htmlFor="cardImage">
          Imagem
          <input
            data-testid="image-input"
            id="cardImage"
            name="cardImage"
            type="text"
            value={ cardImage }
            onChange={ onInputChange }
            required
          />
        </label>
        <section className="select">
          <label className="select-rare" htmlFor="cardRare">
            Raridade
            <select
              data-testid="rare-input"
              name="cardRare"
              id="cardRare"
              value={ cardRare }
              onChange={ onInputChange }
              required
            >
              <option value="normal">normal</option>
              <option value="raro">raro</option>
              <option value="muito raro">muito raro</option>
            </select>
          </label>
        </section>
        { !hasTrunfo ? (
          <label className="has-trunfo" htmlFor="cardTrunfo">
            Super Trybe Trunfo
            <input
              data-testid="trunfo-input"
              id="cardTrunfo"
              name="cardTrunfo"
              type="checkbox"
              checked={ cardTrunfo }
              onChange={ onInputChange }
              required
            />
          </label>
        ) : <p> Você já tem um Super Trunfo em seu baralho </p> }
        <div className="save-button">
          <button
            data-testid="save-button"
            name="buttonSave"
            className="buttonSave"
            disabled={ isSaveButtonDisabled }
            onClick={ onSaveButtonClick }
          >
            Salvar
          </button>
        </div>
      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
