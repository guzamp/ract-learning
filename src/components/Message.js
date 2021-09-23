import React from 'react';

class Message extends React.Component {
    
    //constructor(props) {
    //    console.log(props)
    //    super(props);
        // Não chame this.setState() aqui!
    //    this.state = { counter: 0 };
    //  }
    render() {
      return <h1>Hello, {this.props.name}</h1>;
    }
  }

export default Message;