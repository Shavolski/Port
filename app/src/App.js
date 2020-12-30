import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AnimatePresence } from "framer-motion"
import './App.css';

import Greetings from './components/greetings';
import Home from './components/home';

function App() {
  return (
    <main>
      <AnimatePresence>
        <Switch>
          <Route path="/" component={Greetings} exact />
          <Route path="/Home" component={Home} />
        </Switch>
      </AnimatePresence>
    </main>
  );
}

export default App;
