import React from 'react';

// export default React.createContext('zh-TW'); 

const Context = React.createContext('zh-TW');

export class LanguageStore extends React.Component {
  state = { language: 'zh-TW'};

  onLanguageChange = (language) => {
    this.setState({language});
  }

  render() {
    return (
      <Context.Provider value={{ ...this.state, onLanguageChange: this.onLanguageChange }}>
        {this.props.children}
      </Context.Provider>
    )
  }
}

export default Context;