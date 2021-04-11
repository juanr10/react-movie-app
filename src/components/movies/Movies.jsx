import axios from 'axios';
import React, { useState, useEffect } from 'react';
// components
import Movie from "./Movie";

const Movies = (props) => {
    const movieType = props.match.params.movieType;
    const [movies, saveMovies] = useState([]);

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/${movieType}?api_key=2656ce575e5209919310d68ef9ecfefb&language=en-EN`)
        .then(res => saveMovies(res.data.results))
        .catch(console.error);

    }, [movieType]);

    return ( 
        <div>
            <h2 className="text-white text-2xl font-bold p-8 ml-8 uppercase">{movieType} movies</h2>

            <div className="w-full">
                {movies?.map(movie => <Movie key={movie.id} movie={movie} />)}
            </div>
        </div>
     );
}
 
export default Movies;