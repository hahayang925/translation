import React from 'react';

class LanguageSelector extends React.Component {
  render() {
    return (
      <div>
        Select a language:
        <i className="flag us" onClick={() => this.props.onLanguageChange('en')}></i>
        <i className="flag tw" onClick={() => this.props.onLanguageChange('zh-TW')}></i>
      </div>
    )
  }
}

export default LanguageSelector;