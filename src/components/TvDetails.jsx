import { Star, Clapperboard } from "lucide-react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import TvCast from "./TvCast";
import TvWatchProviders from "./TvWatchProviders";

const TvDetails = () => {
  const { id } = useParams();
  const tvData = useFetch(
    `${import.meta.env.VITE_BASE_URL}tv/${id}?api_key=${import.meta.env.VITE_TMDB_API_KEY}`,
  );

  return (
    <section>
      <div
        className="tvBackdrop relative flex px-12 pb-12 items-end bg-cover bg-center"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original${tvData.backdrop_path})`,
        }}
      >
        <div className="absolute top-0 bottom-0 right-0 left-0 opacity-75 z-40 bg-black"></div>
        <div className="flex items-end gap-8 z-40">
          <div className="tvPoster shrink-0 aspect-[2/3] shadow-2xl ring-1 ring-[#F5C518]/20 rounded-xl border-white/10 border-1 border-solid w-57.5 overflow-hidden">
            <img
              src={`https://image.tmdb.org/t/p/w500${tvData.poster_path}`}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="tvDescription max-w-[640px] flex flex-col gap-4 ">
            <h1 className="font-extrabold text-neutral-50 text-5xl leading-12">
              {tvData.name}
            </h1>
            <div className="tv-chips flex flex-wrap items-center gap-2">
              <span className="font-semibold rounded-sm bg-neutral-800 text-neutral-50 text-xs leading-4 border-white/10 border-1 border-solid px-2 py-0.5">
                {tvData?.first_air_date?.slice(0, 4)}
              </span>
              {tvData?.genres?.map((item) => {
                return (
                  <span className="rounded-full bg-neutral-800/80 text-neutral-50 text-xs leading-4 px-3 py-0.5">
                    {item.name}
                  </span>
                );
              })}
            </div>
            <p className="leading-relaxed text-zinc-300 text-sm leading-5">
              {tvData.overview}
            </p>
            <TvCast />
          </div>
        </div>
      </div>

      <TvWatchProviders />
    </section>
  );
};

export default TvDetails;
