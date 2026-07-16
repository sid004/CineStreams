import MovieCards from "../components/MovieCard";
import { useState, useEffect } from "react";
import useFetch from "../hooks/useFetch";

const PopularMovies = () => {
  const { moviesdata, loading} = useFetch(`${import.meta.env.VITE_BASE_URL}movie/popular?api_key=${import.meta.env.VITE_TMDB_API_KEY}`);
  const movies = moviesdata?.results || [];
  return (
    <div>
      <h2 className="font-bold text-neutral-50 text-2xl leading-8 flex items-center gap-2">Popular Movies</h2>

      <div className="flex gap-4 flex-wrap">
        {movies.map((item) => {
          return (
            <MovieCards
              title={item.title}
              overview={item.overview}
              posterPath={item.poster_path}
              releaseDate={item.release_date}
            />
          );
        })}
      </div>
    </div>
  );
};

export default PopularMovies;
