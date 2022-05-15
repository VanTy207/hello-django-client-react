import React, { Component } from "react";
import './index.css';
class HeaderAppComponent extends Component {
  state = {
    text: "nguyen van ty",
  };

  render() {
    var tempText = this.state.text;
    return (
      <header className="App-header">
        <div>Hello Django: {tempText}</div>
      </header>
    );
  }
}

export default HeaderAppComponent;
