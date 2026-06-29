import GenreBrowser from "../components/GenreBrowser";
import Header from "../components/Header";
import {useState} from "react";

const SearchPage = () =>{
    const[count,setCount] = useState(0);

    return(
        <div>
            <Header />
            <GenreBrowser />
        </div>
    )
}

export default SearchPage;