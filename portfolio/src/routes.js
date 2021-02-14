import React from 'react';
import Home from './Components/Home/index';
import About from './Components/About/index';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

export default function Routes(){
  return(
    <BrowserRouter>
    
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/about' component={About}/>
      </Switch>
    
    </BrowserRouter>
  );
};