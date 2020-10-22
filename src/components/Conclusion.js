import React, { useContext } from 'react';
import UserContext from '../contexts/UserContext'

export default function Conclusion(){

    const { selected,timeSelected } = useContext(UserContext)    

    return(
        <>
        <h3>Pedido feito com sucesso!</h3>
        <h1>{selected.title}</h1>
        <h1>{timeSelected.date} - {timeSelected.time.name}</h1>
        </>
    );
}