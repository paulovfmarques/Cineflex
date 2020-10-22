import React, { useContext } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import UserContext from '../contexts/UserContext';


export default function Showtimes(props){    

    const {weekday,date,showtimes} = props.day;
    const { setTimeSelected } = useContext(UserContext);

    return(
        
        <ContainerTime>
            <h2>{weekday} - {date}</h2>
            <div>
                {showtimes && showtimes.map(time =>
                    <Link onClick={() => setTimeSelected({time,weekday,date})} key={time.id} to="/seats">
                        <button>{time.name}</button>
                    </Link>)}
            </div>
        </ContainerTime>            
        
    );
};

const ContainerTime = styled.div`
    margin-bottom: 20px;

    button{
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

    > div{
        display: flex;
        justify-content: space-evenly;
        flex-wrap: wrap;
    }
`;