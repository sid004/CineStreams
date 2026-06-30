import { Routes, Route,Link } from "react-router-dom";
import Header from "./components/Header.jsx";
import HomePage from "./pages/Home.jsx";
import Movies from "./pages/Movies.jsx";
import Tv from "./pages/Tv.jsx"
import MovieDetailsPage from "./pages/MovieDetailsPage.jsx";
import TvDetailsPage from "./pages/TvDetailsPage.jsx";
import SearchPage from "./pages/SearchPage.jsx";
import GenreDetailPage from "./pages/GenreDetailPage.jsx";
import {recentlyViewedContext} from "./context/recentlyViewedContext.jsx";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movie" element={<Movies />} />
        <Route path="/tv" element={<Tv />} />
        <Route path="/movie/:id" element={<MovieDetailsPage />}/>
        <Route path="/tv/:id" element={<TvDetailsPage />}/>
        <Route path="/search" element={<SearchPage />} />
        <Route path="/:name/:id" element={<GenreDetailPage />} />
      </Routes>
    </div>
  );
};

export default App;
