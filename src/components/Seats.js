import React, { useContext } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { MdEventSeat } from 'react-icons/md';
import { IoIosHappy,IoMdSquare,IoIosSad } from 'react-icons/io';
import UserContext from '../contexts/UserContext';
import Footer from './Footer';

export default function Seats(){

    const { timeSelected } = useContext(UserContext);

    const { seats } = timeSelected.time;

    return(
        <>
        <ContainerSeats>

            <h1>Selecione o assento</h1>

            <ContainerSeatsSelection>
                {seats && seats.map(seat =>
                    <div key={seat.id} className="seat-box">
                        <MdEventSeat className={seat.isAvailable ? "seat" : "seat not-available"} />
                        <p>{seat.name}</p>
                    </div>
                )}
            </ContainerSeatsSelection>

            <Selection className="seatSelection"><IoIosHappy/>Selecionado</Selection>
            <Selection><IoMdSquare/>Disponivel</Selection>
            <Selection className="seatTaken"><IoIosSad/>Ocupado</Selection>

            <BookSeatButton><Link to="/conclusion"><button>Reservar assento(s)</button></Link></BookSeatButton>

        </ContainerSeats>
        
        <Footer/>
        </>
    );
};

const ContainerSeats = styled.div`
    padding: 10px 10px 150px 10px;
    width: 100%;
    height: auto;
    overflow-y: scroll;    

    .seat-box{
        margin: 3px;
        text-align: center;
    }

    .seat{
        font-size: 30px;
        cursor: pointer;
    }   

    .not-available{
        color: rgb(146, 0, 0);
    }
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
        background-color: coral;
        box-shadow: 3px 3px 4px 0px rgba(0,0,0,0.7);
    }    
`;