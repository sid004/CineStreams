import MovieDetails from "../components/MovieDetails";
import Header from "../components/Header";
import WatchProviders from "../components/WatchProviders";
import useFetch from "../hooks/useFetch";

const MovieDetailsPage = () => {
    return(
        <section className="movieDetails">
            <Header />
            <MovieDetails />
            <WatchProviders />
        </section>
    )
}

export default MovieDetailsPage;