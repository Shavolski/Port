import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';


import Greetings from './components/greetings';
import Home from './components/home';

function App() {
  return (
    <main>
        <Switch>
          <Route path="/" component={Greetings} exact />
          <Route path="/Home" component={Home} />
        </Switch>
    </main>
  );
}

export default App;
