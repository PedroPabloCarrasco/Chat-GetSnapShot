import React, { Component } from 'react';
import faker from 'faker'; // Asegúrate de importar faker correctamente

const chatStyle = {
  width: 230,
  height: 300,
  border: '1px solid gray',
  overflow: 'auto',
  fontFamily: 'monospace'
};

const messageStyle = {
  padding: '1em',
  borderBottom: '1px solid #DDD'
};

const avatarStyle = {
  width: 50,
  height: 50,
  borderRadius: '50%'
};

// Creamos un nuevo componente para renderizar los mensajes
class Chat extends Component {
  box = React.createRef();

  componentDidUpdate() {
    this.box.current.scrollTop = this.box.current.scrollHeight;
  }

  render() {
    return (
      <div style={chatStyle} ref={this.box}>
        {this.props.list.map(item => (
          <div key={item.id} style={messageStyle}>
            <p>{item.message}</p>
            <div>{item.name}</div>
            <img src={item.avatar} alt='Avatar' style={avatarStyle} />
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
      id: faker.datatype.uuid(),
      name: faker.name.findName(),
      avatar: `https://robohash.org/${faker.datatype.uuid()}.png?size=50x50`,
      message: faker.hacker.phrase()
    };

    // Agregar a la lista
    this.setState(state => ({
      list: [...state.list, message]
    }));
  };

  render() {
    return (
      <div>
        <h3>Get SnapShot</h3>
        <Chat list={this.state.list} />
        <button onClick={this.addMessage}>Mostrar mensaje</button>
      </div>
    );
  }
}

export default App;
