import React, { useContext } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import UserContext from '../contexts/UserContext';

export default function Main(){

    const { arrayMovies, setSelected, timeSelected, setTimeSelected } = useContext(UserContext);

    if(timeSelected !== "") setTimeSelected("");   

    return(
        <>
            <h1>Selecione o filme</h1>
            <ContainerList>
                {arrayMovies && arrayMovies.map(movie =>                
                    <Link onClick={() => setSelected(movie)} key={movie.id} to={`/movie-session/${movie.id}`}>
                        <img src={movie.posterURL}/>
                    </Link>                
                )}
            </ContainerList>
        </>
    );
};

const ContainerList = styled.div`
    z-index:2;
    display: flex;
    justify-content: space-evenly;
    align-items: flex-start;
    flex-wrap: wrap;
    width: 100%;
    height: auto;
    overflow-y: scroll;    
`;
