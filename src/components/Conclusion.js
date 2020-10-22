import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import UserContext from '../contexts/UserContext';
import styled from 'styled-components';

export default function Conclusion(){

    const { selected,timeSelected,arraySeat, } = useContext(UserContext);   

    return(        
        <ContainerCheckout>
            <p>Pedido feito com sucesso!</p>
            <p>{selected.title}</p>
            <p>{timeSelected.date} - {timeSelected.time.name}</p>
            <SeatsCheckout>
                {arraySeat && arraySeat.map(seat => <p key={seat.id}>Assento {seat.name}</p>)}
            </SeatsCheckout>
            <ButtonDiv><Link to="/"><button>Início</button></Link></ButtonDiv>
        </ContainerCheckout>        
    );
}

const ContainerCheckout = styled.div`
    margin-top:120px;
    width:100%;
    display:flex;    
    align-items:flex-start;
    flex-direction:column;
    padding:20px;

    > p:first-child{
        width:100%;
        text-align: center;        
        color: rgb(21, 122, 8);
        font-size: 20px;
        margin-bottom:20px;
    }

    > p:nth-child(2), p:nth-child(3){
        width: 100%;                
        font-size: 20px;
        color: rgb(70, 70, 70);
        margin-bottom:20px;       
    }   
`;

const SeatsCheckout = styled.div`
    display:flex;    
    align-items:flex-start;
    flex-direction:column;

    > p{
        color: rgb(70, 70, 70);
        margin-bottom:8px;
        font-size: 17px;
    }
`;

const ButtonDiv = styled.div`
    margin-top:20px;
    width:100%;
    display:flex;
    justify-content:center;
    align-items:center;

    button{
        text-align:center;
        border: none;
        color: white;
        font-weight: bold;
        margin: 10px;
        width: 80px;
        height: 30px;
        border-radius: 5px;
        background-color: coral;
        box-shadow: 3px 3px 4px 0px rgba(0,0,0,0.7);
    }
`;