import React from 'react';
import './App.css';
import { Route, Switch } from "react-router-dom";
import GridCard from './components/GridCard';

const App = () => {
  return(
    <Switch>
      <Route exact path="/" component={GridCard} />
    </Switch>
  )
}

export default App;
