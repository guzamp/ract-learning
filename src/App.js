import './App.css';
import Home from './components/Home'
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './theme';
import { GlobalStyles } from './global';

import Home2 from './components/Home2';


function App() {
  const [theme, setTheme] = React.useState('light');
  const toggleTheme = () => {
    console.log(' Change theme')
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }


  return (
    <div className="App">
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <>
          <GlobalStyles />
          <Router>
            <div>
            <button onClick={() => toggleTheme()}>
              Change theme
            </button>
              <nav>
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/home2">About</Link>
                  </li>
                </ul>
              </nav>

              {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
              <Switch>
                <Route path="/home2">
                  <Home2 />
                </Route>
                <Route path="/">
                  <Home />
                </Route>
              </Switch>
            </div>
          </Router>
        </>
      </ThemeProvider>
    </div>
  );
}

export default App;
