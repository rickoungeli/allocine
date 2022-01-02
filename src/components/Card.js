import React from 'react';

const Card = (props) => {
    const movie = props.movie
    const url = "https://image.tmdb.org/t/p/w370_and_h556_bestv2" + movie.backdrop_path

    return (
        <div className='card'>
            <div className="card__img-container">
                <img src={url}  alt="" />
            </div>
            <div className="card__body">
                <h4>{movie.original_title}</h4>
                <span>{movie.release_date}</span>
                <p>{movie.overview}</p>

            </div>
        </div>
    );
};

export default Card;