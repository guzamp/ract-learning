import React, { useState } from 'react';
import Home from './Home'

class Home2 extends Home {
    
    constructor(props) {

        super(props);
        this.state = {
            name: 'test'
          }
    }
    
    render() {

        return (
            <div>
                {super.render()}
                Extends from Home
            </div>
        )
    }
  }

export default Home2;