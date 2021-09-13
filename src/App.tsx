import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import Login from './Login/index'
import './App.css';

import 'primereact/resources/themes/saga-blue/theme.css'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'

const App = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Switch>
          <Route path={"/login"} component={() => <Login />}></Route>
          <Route path={"*"}>
            <Redirect to={"/login"} />
          </Route>
        </Switch>
      </BrowserRouter>
    </React.Fragment>

  )
}

export default App;
