import React, { useContext } from 'react';
import { Link } from 'react-router-dom'
import { MdEventSeat } from 'react-icons/md'
import { IoIosHappy,IoMdSquare,IoIosSad } from 'react-icons/io'
import UserContext from '../contexts/UserContext'
import Footer from './Footer'

export default function Seats(){

    const { timeSelected } = useContext(UserContext)

    const { seats } = timeSelected.time

    return(
        <>
        <main className="session-container">
            <h1>Selecione o assento</h1>
            <div className="seats-container">
            {seats && seats.map(seat =>
                <div key={seat.id} className="seat-box">
                    <MdEventSeat className={seat.isAvailable ? "seat" : "seat not-available"} />
                    <p>{seat.name}</p>
                </div>
            )}
            </div>
            <div className="seatSelection"><IoIosHappy/>Selecionado</div>
            <div className="seatAvailable"><IoMdSquare/>Disponivel</div>
            <div className="seatTaken"><IoIosSad/>Ocupado</div>
            <Link to="/conclusion"><button className="bookSeats">Reservar assento(s)</button></Link>
        </main>
        
        <Footer/>
        </>
    );
}