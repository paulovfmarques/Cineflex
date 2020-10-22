import React, { useContext } from 'react';
import styled from 'styled-components';
import UserContext from '../contexts/UserContext';


export default function Footer(){

    const { selected, timeSelected } = useContext(UserContext);

    return(
        <Container>
            <img src={selected.posterURL}></img>
            <div>
                <p>{selected.title}</p>
                {timeSelected ? <p>{timeSelected.weekday} - {timeSelected.time.name}</p> : ""}
            </div>
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    align-items: center;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 5px;
    background-color: rgb(224, 224, 224);    
    box-shadow: 3px -3px 4px 0px rgba(0,0,0,0.4);
    color: rgb(70, 70, 70);

    img{
        width: 60px;
        height: auto;
        cursor: none;
    }

    > div{
        padding: 5px;
    }

    p{
        margin-bottom: 5px;
    }
`;