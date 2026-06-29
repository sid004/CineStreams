import MovieCards from "../components/MovieCard";
import { useState, useEffect } from "react";
import useFetch from "../hooks/useFetch";
import { Link } from "react-router-dom";
import {Popcorn} from "lucide-react";

const UpcomingMovies = () => {
  const data = useFetch(
    `${import.meta.env.VITE_BASE_URL}movie/upcoming?api_key=${import.meta.env.VITE_TMDB_API_KEY}`,
  );
  const movies = data?.results || [];
  return (
    <div className="flex justify-between items-start flex-col p-8">
      <div className="flex">
        <h2 className="font-bold text-neutral-50 text-2xl leading-8 flex items-center gap-2 mb-8">
          Upcoming Movies
          <Popcorn className="size-6 text-[#E50914]"/>
        </h2>

        
      </div>
      <div className="flex gap-4 flex-wrap">
        {movies.map((item) => {
          return (
            <Link to={`/movie/${item.id}`}>
              <MovieCards
              title={item.title}
              overview={item.overview}
              posterPath={item.poster_path}
              releaseDate={item.release_date}
              rating={Math.floor(item.vote_average)}
              id={item.id}
            />
            </Link>
            
          );
        })}
      </div>
    </div>
  );
};

export default UpcomingMovies;
