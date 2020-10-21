import React from 'react';

import { UserProvider } from '../contexts/UserContext'

import {
  BrowserRouter as Router,
  Switch,
  Route  
} from "react-router-dom";

import Session from './Session'
import Seats from './Seats'
import Conclusion from './Conclusion'
import Main from './Main'

export default function App(){
  
  return (

    <Router>

      <header>CINEFLEX</header>

      <UserProvider>
        <Switch>

          <Route path="/movie-session/:id" component={Session} />
          <Route path="/seats" component={Seats} />
          <Route path="/conclusion" component={Conclusion} />
          <Route path="/" component={Main} />

        </Switch>
      </UserProvider>

    </Router>
  );
}