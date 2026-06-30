import {createContext, useState} from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export const recentlyViewedContext = createContext();

export const RecentlyViewedProvider = ({children}) => {
    const [recentlyViewed, setrecentlyViewed] = useLocalStorage("recentlyViewed", []);
    const addMovie = (movie) => {
        console.log("Movie clicked:", movie);
        setrecentlyViewed((prev) => {
            const filtered = prev.filter((item) => item.id !== movie.id);

            return [movie, ...filtered].slice(0,5);
        })
    }

    return (
        <recentlyViewedContext.Provider value = {{recentlyViewed, addMovie}}>
            {children}
        </recentlyViewedContext.Provider>
    )
}

