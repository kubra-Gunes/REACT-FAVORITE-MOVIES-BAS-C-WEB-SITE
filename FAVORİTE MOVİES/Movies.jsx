import React from 'react'
import './css/Movies.css';
function Movies({ movie }) {
    const { title, description, imdb, image } = movie;
    console.log(movie)
    return (
        <div className='movie'>
            <img src={image} width={250} height={350} />
            <h2 >{title} </h2>
            <h3>{description}</h3>
            <h1>IMBD:{imdb}</h1>
        </div>
    )
}

export default Movies