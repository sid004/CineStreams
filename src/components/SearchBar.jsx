import { Search } from "lucide-react";
import { useState, useEffect } from "react";
import useFetch from "../hooks/useFetch";
import useDebounce from "../hooks/useDebounce";
import MovieCard from "../components/MovieCard";
import { Link } from "react-router-dom";

const SearchBar = () => {
  const [value, setValue] = useState("");
  const [movieList, setMovieList] = useState([]);
  const debouncedSearch = useDebounce(value, 500);

  useEffect(() => {
    if (!debouncedSearch) return;

    async function movieData() {
      const response = await fetch(
        `${import.meta.env.VITE_BASE_URL}search/movie?query=${value}&api_key=${import.meta.env.VITE_TMDB_API_KEY}`,
      );
      const data = await response.json();
      const searchedMovie = data.results;
      console.log(searchedMovie);
      setMovieList(searchedMovie);
      console.log(movieList);
    }

    movieData();
  }, [debouncedSearch]);

  return (
    <div>
      <h1 className="leading-tight font-bold text-white text-5xl leading-15 tracking-tight text-center z-40 my-4">
        Discover Your Next Watch
      </h1>
      <p className="leading-relaxed text-[#FFFFFF] text-xl text-center leading-6">
        Search across thousands of movies and shows
      </p>

      <div className="flex justify-center items-center my-8 gap-4">
        <input
          placeholder="Search movies, shows ... "
          className="w-3xl bg-[#0F0F1A] px-6 py-4 rounded-4xl color text-[#A1A1A1]"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
        <button
          className="flex bg-[#E50914] text-[#FFFFFF] px-6 py-4 gap-2 rounded-4xl font-bold cursor-pointer"
          onClick={() => {
            setValue(value);
          }}
        >
          {" "}
          <Search /> <span>Search</span>
        </button>
      </div>

      {debouncedSearch.trim() && (
        <div>
          <p className="leading-tight font-bold text-white text-3xl leading-15 tracking-tight text-left z-40 my-4">
            Results for {value}
          </p>
          <div className="flex gap-4 flex-wrap my-4">
            {movieList?.map((item) => {
              return (
                <Link to={`/movie/${item.id}`}>
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
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
