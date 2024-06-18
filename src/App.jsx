import React, { Component } from 'react'; // Cambia "React" a "react"

class App extends Component {
  state = {
    text: 'Hola'
  };

  dispatch = () => {
    this.setState({
      text: 'Adios'
    });
  };

  render() {
    return (
      <div>
        <h3>Get SnapShot</h3>
        <h2>{this.state.text}</h2>
        <button onClick={this.dispatch}>Cambiar texto</button>
      </div>
    );
  }
}

export default App; // No olvides exportar el componente
