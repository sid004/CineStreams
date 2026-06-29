import useFetch from "../hooks/useFetch";
import { useParams } from "react-router-dom";
import { MonitorPlay } from "lucide-react";

const TvWatchProviders = () => {
  const { id } = useParams();
  const data = useFetch(
    `${import.meta.env.VITE_BASE_URL}tv/${id}/watch/providers?api_key=${import.meta.env.VITE_TMDB_API_KEY}`,
  );

  const providers = data?.results?.IN?.flatrate;
  return (
    <div className=" streaming-providers flex flex-col gap-4 p-8">
      <div className="flex items-center gap-2">
        <MonitorPlay className="size-5 text-[#F5C518]" />
        <h2 className="font-bold text-neutral-50 text-xl leading-7">
          Streaming Providers
        </h2>
      </div>
      <p className="text-[#a1a1a1] text-xs leading-4">
        Available to stream and rent on the following platforms
      </p>

      <div className="flex flex-wrap gap-4">
        {providers?.map((item) => {
          return(
            <div className="rounded-xl bg-neutral-900 border-white/10 border-1 border-solid flex px-4 py-3 items-center gap-3">
            <span className="size-9 rounded-lg bg-[#E50914] flex justify-center items-center">
              {/* <Clapperboard className="size-5 text-white" /> */}
              <img
                src={`https://media.themoviedb.org/t/p/original/${item.logo_path}`}
              />
            </span>
            <div className="flex flex-col">
              <span className="font-semibold text-neutral-50 text-sm leading-5">
                {item.provider_name}
              </span>
            </div>
          </div>
          )
        })}
      </div>
    </div>
  );
};

export default TvWatchProviders;
