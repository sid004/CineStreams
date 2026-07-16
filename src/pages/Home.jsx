import Header from "../components/Header.jsx"
import HeroCarousel from "../components/HeroCarousel.jsx";
import Shimmer from "../components/Shimmer.jsx";
import TrendingMovie from "../components/Trending.jsx";
import UpcomingMovies from "../components/UpcomingMovies";

const HomePage = () =>{
    return(
        <div>
            
            <Header />
            <HeroCarousel />
            <TrendingMovie />
            <UpcomingMovies />
        </div>
    )
}

export default HomePage;