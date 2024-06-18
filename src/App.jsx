import React, { Component } from 'react';
import faker from 'faker'; // Asegúrate de importar faker correctamente


//creamos un nuevo componente para renderizar los mensajes
class Chat extends Component {
  render() {
    return (
      <div>
        {this.props.list.map(item => (
          <div key={item.id}>{/* Contenido del elemento div */}
          <p>{item.mensaje}</p>
          <div>
            {item.name}
          </div>

          <img
          src={item.avatar}
          alt='Avatar'
          />
          
          </div>
        ))}
      </div>
    );
  }
}






class App extends Component {
  state = {
    list: []
  };

  addMessage = () => {
    // Crear mensaje falso
    const message = {
      id: faker.random.uuid(),
      name: faker.name.findName(),
      avatar: faker.image.avatar(),
      message: faker.hacker.phrase()
    };

    // Agregar a la lista
    this.setState(state => ({
      list: [...state.list, message]
    }), () => {
      
    });
  };

  render() {
    return (
      <div>
        <h3>Get SnapShot</h3>

        <Chat
        list={this.state.list}
        />
        <button onClick={this.addMessage}>Mostrar mensaje</button>
      </div>
    );
  }
}

export default App;
