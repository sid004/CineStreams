import GenreBrowser from "../components/GenreBrowser";
import Header from "../components/Header";
import {useState} from "react";
import RecentlyViewed from "../components/RecentlyViewed";
import SearchBar from "../components/SearchBar";

const SearchPage = () =>{
    const[count,setCount] = useState(0);

    return(
        <div>
            <Header />
            <SearchBar />
            <GenreBrowser />
            <RecentlyViewed />
        </div>
    )
}

export default SearchPage;