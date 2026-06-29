import useFetch from "../hooks/useFetch";
import {
  Swords,
  Compass,
  Laugh,
  Drama,
  Ghost,
  Music,
  ShieldAlert,
  BookOpen,
  Clapperboard,
  Users,
  Grid2x2,
} from "lucide-react";
import {Link} from "react-router-dom"
import SearchBar from "./SearchBar";

export const genreConfig = {
  Action: {
    icon: Swords,
    gradient: "from-red-900 to-orange-900",
    iconBg: "bg-red-950",
  },
  Adventure: {
    icon: Compass,
    gradient: "from-blue-900 to-cyan-900",
    iconBg: "bg-blue-950",
  },
  Comedy: {
    icon: Laugh,
    gradient: "from-yellow-700 to-orange-700",
    iconBg: "bg-yellow-900",
  },
  Drama: {
    icon: Drama,
    gradient: "from-purple-900 to-pink-900",
    iconBg: "bg-purple-950",
  },
  Horror: {
    icon: Ghost,
    gradient: "from-gray-900 to-black",
    iconBg: "bg-black",
  },
  Music: {
    icon: Music,
    gradient: "from-pink-900 to-rose-900",
    iconBg: "bg-pink-950",
  },
  Crime: {
    icon: ShieldAlert,
    gradient: "from-slate-800 to-zinc-900",
    iconBg: "bg-slate-950",
  },
  Documentary: {
    icon: BookOpen,
    gradient: "from-green-900 to-emerald-900",
    iconBg: "bg-green-950",
  },
  Family: {
    icon: Users,
    gradient: "from-teal-800 to-green-800",
    iconBg: "bg-teal-950",
  },
  Fantasy: {
    icon: Clapperboard,
    gradient: "from-violet-900 to-indigo-900",
    iconBg: "bg-violet-950",
  },
};

const GenreBrowser = () => {
  const data = useFetch(
    `${import.meta.env.VITE_BASE_URL}genre/movie/list?api_key=${import.meta.env.VITE_TMDB_API_KEY}`,
  );
  const genre = data.genres;

  return (
    <div className="p-8">
      <SearchBar />
      <div className="flex gap-4 items-center mb-4">
        <Grid2x2 style={{ color: "#F5C518" }} />
        <h2 className="font-bold text-neutral-50 text-2xl leading-8 flex items-center gap-2">
          {" "}
          Browse by Genre
        </h2>
      </div>

      <div className="genreCards flex flex-wrap gap-10">
        {genre?.map((item) => {
          return (
            <Link to={`/${item.name}/${item.id}`}>
              <div className="w-[450px] h-[100px] rounded-3xl bg-gradient-to-r from-[#6B0D16] to-[#6B330D] border border-[#2A2A2A] flex items-center gap-6 px-4 cursor-pointer hover:scale-[1.02] transition-all duration-300">
                <div className="w-16 h-16 rounded-2xl bg-[#4A0710] flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m14.5 12.5-5-5" />
                    <path d="m9.5 12.5 5-5" />
                    <path d="m7 21 10-10" />
                    <path d="m17 21-10-10" />
                  </svg>
                </div>

                <h3 className="text-white text-2xl font-bold">{item.name}</h3>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default GenreBrowser;
