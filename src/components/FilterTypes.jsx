import useFetch from "../hooks/useFetch";

const FilterTypes = () => {
  const data = useFetch(
    `${import.meta.env.VITE_BASE_URL}genre/movie/list?api_key=${import.meta.env.VITE_TMDB_API_KEY}`,
  );
  const filterMovies = data?.genres || [];
  return (
    <div>
      <section className="filter flex mb-8 justify-between items-center gap-4">
        <div className="flex flex-wrap items-center gap-2">
          {filterMovies.map((item) => {
            return (
              <button className="transition-colors font-medium rounded-full bg-neutral-900 text-[#a1a1a1] text-sm leading-5 border-white/10 border-1 border-solid px-4 py-1.5">
                {item.name}
              </button>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default FilterTypes;

// genres
// :
// Array(19)
// 0
// :
// {id: 28, name: 'Action'}
// 1
// :
// {id: 12, name: 'Adventure'}
// 2
// :
// {id: 16, name: 'Animation'}
// 3
// :
// {id: 35, name: 'Comedy'}
// 4
// :
// {id: 80, name: 'Crime'}
// 5
// :
// {id: 99, name: 'Documentary'}
// 6
// :
// {id: 18, name: 'Drama'}
// 7
// :
// {id: 10751, name: 'Family'}
// 8
// :
// {id: 14, name: 'Fantasy'}
// 9
// :
// {id: 36, name: 'History'}
// 10
// :
// {id: 27, name: 'Horror'}
// 11
// :
// {id: 10402, name: 'Music'}
// 12
// :
// {id: 9648, name: 'Mystery'}
// 13
// :
// {id: 10749, name: 'Romance'}
// 14
// :
// {id: 878, name: 'Science Fiction'}
// 15
// :
// {id: 10770, name: 'TV Movie'}
// 16
// :
// {id: 53, name: 'Thriller'}
// 17
// :
// {id: 10752, name: 'War'}
// 18
// :
// {id: 37, name: 'Western'}
