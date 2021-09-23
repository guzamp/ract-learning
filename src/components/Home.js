import React, { useState } from 'react';
import Message from './Message'
import Field from './Field'
import Example from './Function'

class Home extends React.Component {
    
    constructor(props) {
        super(props);
        // Não chame this.setState() aqui!
        console.log(props)
        this.state = { name: props.name ? props.name : 'constructor' };
        this.changeField = this.changeField.bind(this); 
    }
    
    componentDidMount() {
        //this.setState({ name: 'componentDidMount' });
    }

    changeField(value) {
       this.setState({ name: value });
       console.log(this.state)
    }
    
    render() {

        return (
            <div>
                <Field onchange={this.changeField}></Field>
                <Message name={this.state.name}/>
                <Example></Example>
            </div>
        )
    }
  }

export default Home;