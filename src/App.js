import React, { Component } from 'react';
import './App.css';
import GoblinContainer from "./Containers/GoblinContainer.js"


class App extends Component {

  state = {
    goblinList: []

  }

  componentDidMount() {
    fetch("http://localhost:3000/goblins")
      .then(res => res.json())
      .then(data => this.setState({
        goblinList: data
      }))
  }

  render() {
    return (
      <div className = "App">
        <h1 className = 'title'> GOBS GOBS GOBS GOBS GOBS GOBS GOBS  </h1>
        <GoblinContainer
            goblins = {this.state.goblinList}
        />
      </div>
    );
  }
}

export default App;
