import React from 'react';
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
            <Switch>
              
                <Route path="/session">          
                  <Session />
                </Route>
  
                <Route path="/seats">
                  <Seats />
                </Route>

                <Route path="/conclusion">
                  <Conclusion />
                </Route>
  
                <Route path="/">
                  <Main />
                </Route>
              
            </Switch>
        </Router>    
    );
}