import {
  Bell,
  Bookmark,
  ChevronRight,
  Clapperboard,
  Film,
  Flame,
  Home,
  Play,
  Plus,
  Search,
  Sparkles,
  Star,
  Tv,
} from "lucide-react";
import { Link } from 'react-router-dom';
import Movies from "../pages/Movies";
import HomePage from "../pages/Home";
import React from "react"

function Header() {
  const child = React.memo(function Child(){
    console.log("Child");
  })
  
  return (
    <>
      
      <header className="sticky z-50 backdrop-blur-md bg-[#0A0A0F]/95 border-white/10 border-t-0 border-r-0 border-b-1 border-l-0 border-solid top-0 w-full">
        <div className="flex px-8 justify-between items-center h-16">
          <div className="flex items-center gap-12">
            <div className="flex items-center gap-2">
              <Clapperboard className="size-6 text-[#E50914]" />
              <span className="bg-gradient-to-r from-[#E50914] to-[#F5C518] bg-clip-text text-transparent font-extrabold text-xl leading-7 tracking-tight">
                Deployment testing
              </span>
            </div>
            <nav className="flex items-center gap-8">
              <Link to="/" className="relative font-semibold text-neutral-50 text-sm leading-5 flex items-center gap-1.5">
                <Home className="size-4 text-[#E50914]" />
                Home
                <span className="rounded-full bg-[#E50914] absolute left-0 -bottom-5.5 w-full h-[3px]" />
              </Link>
              <Link to="/movie" className="transition-colors font-medium text-[#a1a1a1] text-sm leading-5 flex items-center gap-1.5">
                <Film className="size-4" />
                Movies
              </Link>
              <Link to="/tv" className="transition-colors font-medium text-[#a1a1a1] text-sm leading-5 flex items-center gap-1.5">
                <Tv className="size-4" />
                TV Shows
              </Link>
              <a className="transition-colors font-medium text-[#a1a1a1] text-sm leading-5 flex items-center gap-1.5">
                <Flame className="size-4" />
                {`New & Hot`}
              </a>
              <a className="transition-colors font-medium text-[#a1a1a1] text-sm leading-5 flex items-center gap-1.5">
                <Bookmark className="size-4" />
                My List
              </a>
            </nav>
          </div>
          <div className="flex items-center gap-6">
            <Link to="/search">
              <Search className="size-5 transition-colors cursor-pointer text-[#a1a1a1]" />
            </Link>
            <div className="relative">
              <Bell className="size-5 transition-colors cursor-pointer text-[#a1a1a1]" />
              <span className="size-2 rounded-full bg-[#E50914] absolute -right-1 -top-1" />
            </div>
            {/* <Avatar className="size-9 ring-2 ring-[#E50914]/50">
                      <AvatarImage
                        alt="User"
                        data-authorname="luthfi alfarizi"
                        data-authorurl="https://unsplash.com/@luthfialfarizi"
                        data-blurhash="LbQ7VEof|5n%^kayOWayR:fkX4j["
                        data-photoid="jlJpDBK17Hw"
                        src="https://images.unsplash.com/photo-1740252117070-7aa2955b25f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3ODc2NDd8MHwxfHNlYXJjaHwxfHx1c2VyJTIwYXZhdGFyJTIwcG9ydHJhaXQlMjBmYWNlfGVufDF8Mnx8fDE3ODAzODIzNDd8MA&ixlib=rb-4.1.0&q=80&w=400"
                      />
                      <AvatarFallback>U</AvatarFallback>
                    </Avatar> */}
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
