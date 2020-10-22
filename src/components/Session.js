import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import Showtimes from './Showtimes';
import UserContext from '../contexts/UserContext';
import Footer from './Footer';
import styled from 'styled-components';

export default function Session(){

    const { selected } = useContext(UserContext);
    const { days } = selected;    

    let pageId = useParams()

    return(
        <>
            <ContainerSession>
                <h1>Selecione o horario</h1>
                {days && days.map(day => <Showtimes key={day.id} day={day}/>)}
            </ContainerSession>
            <Footer/>
        </>
    );
};

const ContainerSession = styled.div`
    padding: 10px 10px 150px 10px;
    width: 100%;
    height: auto;
    overflow-y: scroll;

    h1{
        margin:85px 0 10px 0;
    }
`;