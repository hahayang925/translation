import React from 'react';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

class Button extends React.Component {
  // static contextType = LanguageContext;
  renderSubmit(language) {
    return language === 'en' ? 'Submit' : '送出';
  }

  renderButton(color) {
    return (
      <button className={`ui button ${color}`}>
        <LanguageContext.Consumer>
          {({ language }) => this.renderSubmit(language)} 
        </LanguageContext.Consumer>
      </button>
    )
  }

  render() {
    // const text = this.context === 'en' ? 'Submit' : '送出';
    return (
      <ColorContext.Consumer>
        {color => this.renderButton(color)}
      </ColorContext.Consumer>
    )
  }
}

export default Button;