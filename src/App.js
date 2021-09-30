import './App.css';
import { Component } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Menu from './Menu.js';
import Footer from './Footer';
import Formulario from './Formulario';
import Listarpersonajes from './listapersonajes';
import Personajes from './personajes';



class App extends Component {
  render() {
    <h1>Test</h1>

    return (
      <Router>
        <Switch>
          <Route path="/" exact component >
            <Footer/>
          </Route>
          <Route path="/Personajes" exact component >
            <Personajes />
          </Route>
          <Route path="/Formulario" exact component >
            <Formulario />
          </Route>
          <Route>
            <h1> Error 404, URL desconocida</h1>
          </Route>        
        </Switch>
      </Router>
    )
  }
}

export default App;

