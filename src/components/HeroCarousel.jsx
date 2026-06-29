import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import useFetch from "../hooks/useFetch";
import {Star} from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const HeroCarousel = () => {
  const data = useFetch(
    `${import.meta.env.VITE_BASE_URL}movie/popular?api_key=${import.meta.env.VITE_TMDB_API_KEY}`,
  );
  const movies = data?.results || [];
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      autoplay={{
        delay: 3000,
      }}
    //   navigation
    //   pagination={{
    //     clickable: true,
    //   }}
      loop
    >
      {movies.slice(0,5).map((item) => {
        return (
          <SwiperSlide>
            <div
              style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`,
              }}
              className="h-[650px] bg-cover bg-center p-8"
            >
                <div className="absolute top-0 bottom-0 right-0 left-0 opacity-75 z-40 bg-black"></div>
              <div className="absolute top-[40%] z-40">
                <span className="font-semibold text-[#F5C518] text-sm leading-5 flex items-center gap-1">
                    <Star className="size-4 fill-[#F5C518] text-[#F5C518]"/>{Math.floor(item.vote_average)}
                </span>
                
                <h2 className="leading-tight font-extrabold text-white text-6xl leading-15 tracking-tight w-[550px] z-40">
                  {item.title}
                </h2>

                <div className="font-medium text-[#a1a1a1] text-sm leading-5 flex items-center gap-3">
                    <span className="size-1 rounded-full bg-[#a1a1a1]" />
                    <span>{item.release_date?.split("-")[0]}</span>
                </div>
                
                <p className="max-w-lg leading-relaxed text-[#C4C4CC] text-base leading-6">
                  {item.overview}
                </p>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default HeroCarousel;
