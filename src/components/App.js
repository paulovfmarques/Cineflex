import React from 'react';
import styled from 'styled-components';

import { UserProvider } from '../contexts/UserContext';

import {
  BrowserRouter as Router,
  Switch,
  Route  
} from "react-router-dom";

import Session from './Session';
import Seats from './Seats';
import Conclusion from './Conclusion';
import Main from './Main';

export default function App(){
  
  return (

    <Router>

      <ContainerHeader>CINEFLEX</ContainerHeader>

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

const ContainerHeader = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  text-align: center;
  width: 100%;
  font-size: 40px;
  padding: 20px 0;
  color: orangered;
  background-color: rgb(224, 224, 224);
  box-shadow: 0px 5px 5px 0px rgba(0,0,0,0.55);
`;