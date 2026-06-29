import { ChevronLeft, ChevronRight } from "lucide-react";
import useFetch from "../hooks/useFetch";
import FilterTypes from "./FilterTypes";
import MovieCard from "./MovieCard";
import {useState} from "react";
import {Link} from "react-router-dom"

const MovieListing = () => {
  const [page, setPage] = useState(1);
  const data = useFetch(
    `${import.meta.env.VITE_BASE_URL}movie/popular?api_key=${import.meta.env.VITE_TMDB_API_KEY}&page=${page}`
  );
  const movies = data?.results || [];

  return (
    <div className="movieListing p-8">
      <section className="flex mb-8 justify-between items-end">
        <div className="flex flex-col gap-1">
          <h1 className="font-bold text-neutral-50 text-4xl leading-10 tracking-tight">
            All Movies
          </h1>
          <p className="text-[#a1a1a1] text-sm leading-5">
            Explore our full catalog of films, from blockbusters to hidden gems.
          </p>
        </div>
        <span className="text-[#a1a1a1] text-sm leading-5">
          {data.total_results}
        </span>
      </section>

      <FilterTypes />
      <section className="flex gap-4 flex-wrap">
        {movies.map((item) => {
          return (
            <Link to = {`/movie/${item.id}`}>
              <MovieCard
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
      </section>

      <section className="pagination flex mt-4 mb-8 justify-center items-center gap-2">
        {<button onClick={()=>setPage((prev) => prev - 1)} disabled={page===1} className="size-9 transition-colors rounded-lg bg-neutral-900 text-[#a1a1a1] border-white/10 border-1 border-solid flex justify-center items-center">
          <ChevronLeft className="size-4" />
        </button>}
        
        <span className="size-9 font-semibold rounded-lg bg-[#E50914] text-white text-sm leading-5 flex justify-center items-center">
            {page}    
        </span>
        

        <button onClick={() => setPage((next) => next + 1)} className="size-9 transition-colors rounded-lg bg-neutral-900 text-[#a1a1a1] border-white/10 border-1 border-solid flex justify-center items-center">
          <ChevronRight className="size-4" />
        </button>
      </section>
    </div>
  );
};

export default MovieListing;
