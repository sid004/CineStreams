import { Flame, ChevronRight } from "lucide-react";
import useFetch from "../hooks/useFetch";
import MovieCards from "../components/MovieCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";



const TrendingMovie = () => {
  const data = useFetch(
    `${import.meta.env.VITE_BASE_URL}trending/movie/day?api_key=${import.meta.env.VITE_TMDB_API_KEY}`,
  );
  const movies = data?.results || [];

  return (
    <div className="flex justify-between items-center flex-col p-8">
      <div className="flex justify-between mb-8 w-full">
        <h2 className="font-bold text-neutral-50 text-2xl leading-8 flex items-center gap-2">
          Trending Now
          <Flame className="size-6 text-[#E50914]" />
        </h2>
        <a className="cursor-pointer font-medium text-[#a1a1a1] text-sm leading-5 flex items-center gap-1">
          See all
          <ChevronRight className="size-4" />
        </a>
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

export default TrendingMovie;
