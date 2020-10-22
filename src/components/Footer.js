import React, { useContext } from 'react';
import UserContext from '../contexts/UserContext'


export default function Footer(){

    const { selected, timeSelected } = useContext(UserContext);

    return(
        <footer>
            <img src={selected.posterURL}></img>
            <div>
                <p>{selected.title}</p>
                {timeSelected ? <p>{timeSelected.weekday} - {timeSelected.time.name}</p> : ""}
            </div>
        </footer>
    );
}