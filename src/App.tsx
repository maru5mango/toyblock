import React from 'react';
import './App.css';
import { Route, Switch } from "react-router-dom";
import GridCard from './components/GridCard';
import mainPage from './components/mainPage';

const App = () => {
  return(
    <Switch>
      <Route exact path="/grid" component={GridCard} />
      <Route exact path="/main" component={mainPage} />
    </Switch>
  )
}

export default App;
