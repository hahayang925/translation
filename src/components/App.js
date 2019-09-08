import React from 'react';
import UserCreate from './UserCreate';

class App extends React.Component {
  state = { language: 'zh-tw' };

  onLanguageChange = (language) => {
    this.setState({ language });
  }

  render() {
    return (
      <div class="ui container">
        <div>
          Select a language:
          <i className="flag us" onClick={() => this.onLanguageChange('en')}></i>
          <i className="flag tw" onClick={() => this.onLanguageChange('zh-TW')}></i>
        </div>
        <UserCreate />
      </div>
    )
  }
}

export default App;