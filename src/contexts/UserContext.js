import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios'

const UserContext = createContext();
export default UserContext;

export function UserProvider(props){

    const [arrayMovies,setArrayMovies] = useState();
    const [selected,setSelected] = useState();
    const [timeSelected, setTimeSelected] = useState();
    const [arraySeat,setArraySeat] = useState([]);

    useEffect(() => {
      const request = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v1/cineflex/movies ");
      request.then(response => {      
        setArrayMovies(response.data);
      })
    }, []);    
  
    return (
      <UserContext.Provider value={{arrayMovies,selected,setSelected,timeSelected, setTimeSelected,arraySeat,setArraySeat}}>
        {props.children}
      </UserContext.Provider>
    );
  
  }