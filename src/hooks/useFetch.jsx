import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {

    const options = { 
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MjRhNTc3NjAxNjc3MDI3OWE5ODIyZTE4NzcwNWEzNSIsIm5iZiI6MTc4MDE1MTUwMS45NDQsInN1YiI6IjZhMWFmNGNkYTA2MTIxOWU1NGY5NzRmMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6eWwO6CpqwOwZM8x5IKmuFje0gWN8_UeQbjwXJeS7Mg",
      },
    };
    
    async function fetchMovies() {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setMovies(data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchMovies();
  }, [url]);

  return movies;
};

export default useFetch;
