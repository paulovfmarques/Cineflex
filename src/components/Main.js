import React, { useContext } from 'react';
import { Link } from 'react-router-dom'
import UserContext from '../contexts/UserContext'

export default function Main(){

    const { arrayMovies, setSelected } = useContext(UserContext);
    

    return(
        <>
            <h1>Selecione o filme</h1>
            <main className="movie-container">
                {arrayMovies && arrayMovies.map(movie =>                
                    <Link onClick={() => setSelected(movie)} key={movie.id} to={`/movie-session/${movie.id}`}>
                        <img src={movie.posterURL}/>
                    </Link>                
                )}
            </main>
        </>
    );
}