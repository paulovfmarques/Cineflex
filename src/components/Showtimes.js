import React, { useContext } from 'react';
import { Link } from 'react-router-dom'
import UserContext from '../contexts/UserContext'


export default function Showtimes(props){    

    const {weekday,date,showtimes} = props.day;
    const { setTimeSelected } = useContext(UserContext)

    return(
        
        <div className="showtime">
            <h2>{weekday} - {date}</h2>
            <div>
                {showtimes && showtimes.map(time =>
                    <Link onClick={() => setTimeSelected({time,weekday,date})} key={time.id} to="/seats">
                        <button>{time.name}</button>
                    </Link>)}
            </div>
        </div>            
        
    );
}