import { useContext } from "react";
import { recentlyViewedContext } from "../context/recentlyViewedContext";
import MovieCard from "./MovieCard";
import { TimerReset } from 'lucide-react';

const RecentlyViewed = () => {
  const { recentlyViewed, clearRecentlyViewed } = useContext(recentlyViewedContext);

  return (
    <div className="recently-viewed p-8">
        <div className="flex gap-4 items-center mb-4 justify-between">
          <div className="flex gap-4 items-center mb-4">
              <TimerReset style={{ color: "#F5C518" }}/>
        
            <h2 className="font-bold text-neutral-50 text-2xl leading-8 flex items-center gap-2">
                Recently Viewed
            </h2>
          </div>
            

            <button onClick={clearRecentlyViewed} className="text-neutral-50 cursor-pointer">
              Clear All
            </button>
        </div>

      <div className="flex flex-wrap gap-8 pt-4">
        {recentlyViewed?.map((item) => (
        <MovieCard
          title={item.title}
          overview={item.overview}
          posterPath={item.posterPath}
          releaseDate={item.release_date}
          rating={Math.floor(item.rating)}
          id={item.id}
        />
      ))}
      </div>
      
    </div>
  );
};

export default RecentlyViewed;
