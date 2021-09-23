import React from 'react';

import {TextField, Toolbar, Typography} from '@material-ui/core';
class Field extends React.Component {
    
    //constructor(props) {
    //    console.log(props)
    //    super(props);
        // Não chame this.setState() aqui!
    //    this.state = { counter: 0 };
    //  }
    render() {
      return <div>
      <TextField 
        id="text" 
        onChange={(e) => { this.props.onchange(e.target.value) }}
                
        >

        </TextField>
    </div>;
    }
  }

export default Field;