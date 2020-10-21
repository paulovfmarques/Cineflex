import React from 'react';
import { Link } from 'react-router-dom'


export default function Showtimes(props){    

    const {weekday,date,showtimes} = props.day

    console.log(showtimes)

    return(
        <div className="showtime">
            <h2>{weekday} - {date}</h2>
            <div>
                {showtimes && showtimes.map(time => <Link to="/seats"><button key={time.id}>{time.name}</button></Link> )}
            </div>
        </div>
    );
}