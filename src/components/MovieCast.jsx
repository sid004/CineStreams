import useFetch from "../hooks/useFetch";
import { useParams } from "react-router-dom";

const MovieCast = () => {
  const { id } = useParams();
  const data = useFetch(
    `${import.meta.env.VITE_BASE_URL}movie/${id}/credits?api_key=${import.meta.env.VITE_TMDB_API_KEY}`,
  );
  const castCrew = data?.cast;
  return (
    <section className="flex gap-8">
      {castCrew?.slice(0, 4).map((item) => (
        <div className="flex flex-col items-center gap-2">
          <span key={item.id} className="rounded-4xl bg-gradient-to-r from-red-500 via-yellow-500 p-[1px]">
            <img
              src={`https://image.tmdb.org/t/p/w185${item.profile_path}`}
              alt={item.name}
              className="w-15 h-15 rounded-full object-cover "
            />
          </span>
          <span className="text-[#a1a1a1] text-[11px]">{item.name}</span>
          <span className="text-[#a1a1a1] text-[11px] truncate w-[75px] text-center">{item.character}</span>
        </div>
      ))}
    </section>
  );
};

export default MovieCast;
