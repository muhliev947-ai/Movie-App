import React from "react";



export const MovieCard =({movie})=>{


    const url  =  "https://image.tmdb.org/t/p/w500";

     return(
        <div className="text-center">   
                <img className="mx-auto w-62" src={url+movie.poster_path} alt={movie.title}/>
                <h1>{movie.title}</h1>
                <p>{movie.vote_average}</p>
                <p>{movie.release_date}</p>
        </div>
     );
}