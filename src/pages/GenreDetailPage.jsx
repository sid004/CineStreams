import Header from "../components/Header";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import GenreCards from "../components/GenreCards";

const GenreDetailPage = () => {
  const { name, id } = useParams();
  const data = useFetch(
    `${import.meta.env.VITE_BASE_URL}discover/movie?api_key=${import.meta.env.VITE_TMDB_API_KEY}&with_genres=${id}`,
  );
  const genre = data.results;
  console.log(genre);

  return (
    <div>
      <Header />

      <h2 className="font-bold text-neutral-50 text-4xl leading-10 tracking-tight p-8">
        {name} Movies
      </h2>
      <div className="flex flex-wrap gap-4 p-8">
        {genre?.map((item) => {
          return <GenreCards title={name} movie={item} />;
        })}
      </div>
    </div>
  );
};

export default GenreDetailPage;
