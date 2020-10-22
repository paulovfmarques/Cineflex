import React, { useContext } from 'react';
import { useParams } from 'react-router-dom'
import Showtimes from './Showtimes'
import UserContext from '../contexts/UserContext'
import Footer from './Footer'

export default function Session(){

    const { selected } = useContext(UserContext);
    const { days } = selected;    

    let pageId = useParams()

    return(
        <>
            <main className="session-container">
                <h1>Selecione o horario</h1>
                {days && days.map(day => <Showtimes key={day.id} day={day}/>)}
            </main>
            <Footer/>
        </>
    );
}