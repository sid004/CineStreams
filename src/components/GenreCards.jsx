import MovieCard from "./MovieCard";
import { Play } from "lucide-react";

const GenreCards = (props) => {
  console.log(props.movie);
  return (
    <div className="p-8">
      

      <div className="group relative flex-shrink-0 cursor-pointer flex flex-col gap-2 w-57">
        <div className="relative aspect-[2/3] rounded-lg overflow-hidden">
          <img
            src={`https://image.tmdb.org/t/p/w500${props.movie.poster_path}`}
            className="object-cover transition-transform duration-300 w-full h-full"
          />
          <div className="bg-gradient-to-t from-[#0A0A0F]/80 via-transparent to-transparent transition-opacity opacity-0 absolute inset-0" />
          <div className="transition-opacity opacity-0 flex absolute inset-0 justify-center items-center">
            <div className="size-12 rounded-full bg-[#E50914] flex justify-center items-center">
              <Play className="size-5 fill-white text-white" />
            </div>
          </div>
          {/* <span className="font-bold rounded-sm bg-[#0A0A0F]/80 text-[#F5C518] text-[10px] absolute left-2 top-2 px-1.5 py-0.5">
                       {ratingText}
                     </span> */}
        </div>
        <div className="flex flex-col gap-0.5">
          <p className="truncate font-semibold text-neutral-50 text-sm leading-5">
            {props.movie.title}
          </p>
          <p className="text-[#a1a1a1] text-xs leading-4">
            Sci-Fi ·
            {/* <span>{props.movie.releaseDate?.split("-")[0]}</span> */}
          </p>
        </div>
      </div>
    </div>
  );
};

export default GenreCards;
