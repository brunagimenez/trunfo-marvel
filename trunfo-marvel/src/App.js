import './App.css';
import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import SavedCards from './components/SavedCards';
import HeaderLogo from './image/Marvelogo.png';

class App extends React.Component {
  state = {
    cardName: '',
    cardDescription: '',
    cardAttr1: '',
    cardAttr2: '',
    cardAttr3: '',
    cardImage: '',
    cardRare: '',
    cardTrunfo: false,
    hasTrunfo: false,
    isSaveButtonDisabled: true,
    saveStates: [],
  };

  onInputChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value }, () => {
      if (this.validateInput(this.state)
         && this.validateAttr(this.state)) {
        this.setState({
          isSaveButtonDisabled: false,
        });
      } else {
        this.setState({
          isSaveButtonDisabled: true,
        });
      }
    });
  };

  validateInput = ({ cardName,
    cardDescription,
    cardImage,
    cardRare }) => (cardName.length !== 0
      && cardDescription.length !== 0
      && cardImage.length !== 0
      && cardRare.length !== 0);

  validateAttr = ({ cardAttr1,
    cardAttr2,
    cardAttr3 }) => {
    const sumAttr = Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3);
    const numberMax = 90;
    return (
      (sumAttr <= Number('210'))
      && (Number(cardAttr1) <= numberMax)
      && (Number(cardAttr2) <= numberMax)
      && (Number(cardAttr3) <= numberMax)
      && (Number(cardAttr1) >= 0)
      && (Number(cardAttr2) >= 0)
      && (Number(cardAttr3) >= 0)
    );
  };

  onSaveButtonClick = () => {
    const { cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
    } = this.state;

    if (cardTrunfo) this.setState({ hasTrunfo: true });
    const saveStates = {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
    };
    this.setState((previousState) => ({
      saveStates: [...previousState.saveStates, saveStates],
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
    }));
  };

  removeCard = (cardButton) => {
    const { saveStates, hasTrunfo } = this.state;
    this.setState(() => ({
      saveStates: saveStates.filter((card) => card !== cardButton),
      hasTrunfo: hasTrunfo && !cardButton.cardTrunfo,
    }));
  };

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
      saveStates,
    } = this.state;
    return (
      <div>
        <header>
          <img src={ HeaderLogo } alt="logo marvel" className="header" />
          <h1 className="h1-header">TRYUNFO</h1>
        </header>
        <section className="add-card">
          <Form
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardImage={ cardImage }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
            hasTrunfo={ hasTrunfo }
            onInputChange={ this.onInputChange }
            isSaveButtonDisabled={ isSaveButtonDisabled }
            onSaveButtonClick={ this.onSaveButtonClick }
          />
          <Card
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardImage={ cardImage }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
            hasTrunfo={ hasTrunfo }
          />
        </section>
        <SavedCards saveStates={ saveStates } removeCard={ this.removeCard } />
        <footer>
          by Bruna Gimenez
        </footer>
      </div>
    );
  }
}

export default App;
