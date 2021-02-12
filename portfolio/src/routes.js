import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


//--Pages/Containers--


const routes = ()=>{
return(
  <BrowserRouter>
  <Switch>
    <Route exact path= '/'/>
  </Switch>
  </BrowserRouter>
);
};

export default routes;