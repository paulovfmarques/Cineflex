import React, { useContext, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { MdEventSeat } from 'react-icons/md';
import { IoIosHappy,IoMdSquare,IoIosSad } from 'react-icons/io';
import UserContext from '../contexts/UserContext';
import Footer from './Footer';

export default function Seats(){

    const { timeSelected,arraySeat,setArraySeat } = useContext(UserContext);
    const { seats } = timeSelected.time;
    
    function sendRequest(){
        const arrayIds = arraySeat.map(seat => seat = seat.id)
        const req = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v1/cineflex/seats/book_many/",{"ids":arrayIds})
    }

    function selectSeat(seat){        

        if(!seat.isAvailable){
            alert("Assento não disponível!")
            return;
        }        

        const isSelected = arraySeat.some(s => s.name === seat.name);

        if(isSelected){
            setArraySeat([...arraySeat.filter(s => s.name !== seat.name)])
        }else{
            setArraySeat([...arraySeat,seat])
        }       
    }    

    return(
        <>
        <ContainerSeats>

            <h1>Selecione o assento</h1>

            <ContainerSeatsSelection>
                {seats && seats.map(seat =>
                    <SeatBox onClick={() => selectSeat(seat)} key={seat.id}>
                        <Icone 
                        available={(seat.isAvailable).toString()}
                        isselected={(arraySeat && arraySeat.some(s => s.name === seat.name)).toString()} />
                        <p>{seat.name}</p>
                    </SeatBox>
                )}
            </ContainerSeatsSelection>

            <Selection className="seatSelection"><IoIosHappy/>Selecionado</Selection>
            <Selection><IoMdSquare/>Disponivel</Selection>
            <Selection className="seatTaken"><IoIosSad/>Ocupado</Selection>

            <BookSeatButton arrSeat={arraySeat}>
                <Link to="/conclusion">
                    <button 
                    disabled={arraySeat && arraySeat.length > 0 ? false : true}
                    onClick={() => sendRequest()}>
                        Reservar assento(s)
                    </button>
                </Link>
            </BookSeatButton>

        </ContainerSeats>
        
        <Footer/>
        </>
    );
};

const Icone = styled(MdEventSeat)`
    color: ${props => 
    props.available === "true" 
    ? (props.isselected === "true" ? "coral" : "black") 
    : "rgb(146, 0, 0)"};

    font-size: 30px;
    cursor: pointer;
`;

const ContainerSeats = styled.div`
    padding: 10px 10px 150px 10px;
    width: 100%;
    height: auto;
    overflow-y: scroll;

    .selected{
        color: coral;
    }
    
    h1{
        margin:85px 0 10px 0;
    }       
`;

const SeatBox = styled.div`
    margin: 3px;
    text-align: center;
`;

const ContainerSeatsSelection = styled.div`
    height: auto;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`;

const Selection = styled.div`
    margin-top: 5px;
    font-size: 15px;
    display: flex;
    align-items: center;
    justify-content: flex-start;

    &.seatSelection{
        color: coral;
    }

    &.seatTaken{
        color: rgb(146, 0, 0);
    }
`;

const BookSeatButton = styled.div`
    margin-top:20px;
    width:100%;
    display:flex;
    justify-content:center;
    align-items:center;

    button{        
        border: none;
        color: white;
        font-weight: bold;
        margin: 10px;
        padding: 5px;
        width: auto;
        height: 30px;
        border-radius: 5px;
        background-color: ${props => props.arrSeat && props.arrSeat.length > 0 ? "coral" : "slategray"};
        box-shadow: 3px 3px 4px 0px rgba(0,0,0,0.7);
    }    
`;