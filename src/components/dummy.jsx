import { useEffect } from "react";
import {
  Bell,
  Bookmark,
  ChevronRight,
  Clapperboard,
  Download,
  Film,
  Flame,
  Home,
  MessageSquare,
  MonitorPlay,
  PenLine,
  Play,
  Plus,
  Search,
  Sparkles,
  Star,
  StarHalf,
  Tv,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function App() {
  return (
    <div>
      <div className="bg-neutral-950 text-neutral-50 w-full h-fit h-fit min-h-screen w-screen min-w-screen max-w-screen overflow-visible">
        <header className="sticky z-50 backdrop-blur-md bg-[#0A0A0F]/90 border-white/10 border-t-0 border-r-0 border-b-1 border-l-0 border-solid top-0 w-full">
          <div className="flex px-12 py-4 justify-between items-center">
            <div className="flex items-center gap-12">
              <div className="flex items-center gap-2">
                <Clapperboard className="size-6 text-[#E50914]" />
                <span className="font-extrabold text-neutral-50 text-xl leading-7 tracking-tight">
                  Cine<span className="text-[#E50914]">Stream</span>
                </span>
              </div>
              <nav className="flex items-center gap-8">
                <a className="transition-colors font-medium text-[#a1a1a1] text-sm leading-5 flex items-center gap-2">
                  <Home className="size-4" />
                  Home
                </a>
                <a className="transition-colors font-medium text-[#a1a1a1] text-sm leading-5 flex items-center gap-2">
                  <Film className="size-4" />
                  Movies
                </a>
                <a className="transition-colors font-medium text-[#a1a1a1] text-sm leading-5 flex items-center gap-2">
                  <Tv className="size-4" />
                  TV Shows
                </a>
                <a className="transition-colors font-medium text-[#a1a1a1] text-sm leading-5 flex items-center gap-2">
                  <Flame className="size-4" />
                  {`New & Hot`}
                </a>
                <a className="transition-colors font-medium text-[#a1a1a1] text-sm leading-5 flex items-center gap-2">
                  <Bookmark className="size-4" />
                  My List
                </a>
              </nav>
            </div>
            <div className="flex items-center gap-6">
              <Search className="size-5 transition-colors text-[#a1a1a1]" />
              <div className="relative">
                <Bell className="size-5 transition-colors text-[#a1a1a1]" />
                <span className="size-2 rounded-full bg-[#E50914] absolute -right-1 -top-1" />
              </div>
              <Avatar className="size-8 ring-2 ring-border">
                <AvatarImage
                  src="https://images.unsplash.com/photo-1714750977930-e7a7f4611257?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3ODc2NDd8MHwxfHNlYXJjaHwxfHxhY3RvciUyMHBvcnRyYWl0JTIwaGVhZHNob3QlMjBtYW58ZW58MXwyfHx8MTc4MDM4MjMzOXww&ixlib=rb-4.1.0&q=80&w=400"
                  data-photoid="kwKAvFdfWg8"
                  data-authorname="Michael Proctor"
                  data-authorurl="https://unsplash.com/@mproctor"
                  data-blurhash="LB8p$2Nu0gxGIBf6xaNGEhoL-Uog"
                />
                <AvatarFallback>U</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </header>
        <section className="relative w-full h-140 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3ODc2NDd8MHwxfHNlYXJjaHwxfHxjaW5lbWF0aWMlMjBtb3ZpZSUyMHNjZW5lJTIwZGFyayUyMGRyYW1hdGljJTIwYmFja2Ryb3B8ZW58MXwwfHx8MTc4MDM4MjMzOHww&ixlib=rb-4.1.0&q=80&w=1600"
            alt="Backdrop"
            className="object-cover absolute inset-0 w-full h-full"
            data-photoid="G9i_plbfDgk"
            data-authorname="Jeremy Bishop"
            data-authorurl="https://unsplash.com/@jeremybishop"
            data-blurhash="L50A^VZze8k@lVZ}eSk?ksemeng4"
          />
          <div className="bg-[linear-gradient(to_right,#0A0A0F_15%,transparent_80%)] absolute inset-0" />
          <div className="bg-[linear-gradient(to_top,#0A0A0F_5%,transparent_55%)] absolute inset-0" />
          <div className="relative flex px-12 pb-12 items-end h-full">
            <div className="flex items-end gap-8">
              <div className="shrink-0 aspect-[2/3] shadow-2xl ring-1 ring-[#F5C518]/20 rounded-xl border-white/10 border-1 border-solid w-57.5 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1759829381324-f3d2b5ed7f6d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3ODc2NDd8MHwxfHNlYXJjaHwxfHxmaWxtJTIwbm9pciUyMG1vdmllJTIwc3RpbGwlMjBjaXR5JTIwbmlnaHR8ZW58MXwxfHx8MTc4MDM4MjMzOHww&ixlib=rb-4.1.0&q=80&w=400"
                  alt="Poster"
                  className="object-cover w-full h-full"
                  data-photoid="cgtIPOHHBak"
                  data-authorname="ALEKSEI MAKAREVICH"
                  data-authorurl="https://unsplash.com/@alexey_caddesi"
                  data-blurhash="L33[xTRj00%M_3Rj9F%Mt7RjRjxu"
                />
              </div>
              <div className="max-w-[640px] flex flex-col gap-4">
                <span className="font-semibold uppercase text-[#F5C518] text-xs leading-4 tracking-[3.2px]">
                  CineStream Original
                </span>
                <h1 className="font-extrabold text-neutral-50 text-5xl leading-12">
                  Shadows of the City
                </h1>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-semibold rounded-sm bg-neutral-800 text-neutral-50 text-xs leading-4 border-white/10 border-1 border-solid px-2 py-0.5">
                    2024
                  </span>
                  <span className="text-[#a1a1a1] text-xs leading-4">
                    2h 18m
                  </span>
                  <span className="font-bold rounded-sm text-neutral-50 text-xs leading-4 border-white/10 border-1 border-solid px-2 py-0.5">
                    HD
                  </span>
                  <span className="font-bold rounded-sm bg-[#F5C518] text-[#0A0A0F] text-xs leading-4 flex px-2 py-0.5 items-center gap-1">
                    <Star className="size-3 fill-[#0A0A0F]" />
                    IMDb 8.4
                  </span>
                  <span className="rounded-full bg-neutral-800/80 text-neutral-50 text-xs leading-4 px-3 py-0.5">
                    Thriller
                  </span>
                  <span className="rounded-full bg-neutral-800/80 text-neutral-50 text-xs leading-4 px-3 py-0.5">
                    Crime
                  </span>
                  <span className="rounded-full bg-neutral-800/80 text-neutral-50 text-xs leading-4 px-3 py-0.5">
                    Mystery
                  </span>
                </div>
                <div className="text-sm leading-5 flex items-center gap-2">
                  <Clapperboard className="size-4 text-[#F5C518]" />
                  <span className="text-[#a1a1a1]">Directed by</span>
                  <span className="font-semibold text-neutral-50">
                    Daniel Mercer
                  </span>
                </div>
                <p className="leading-relaxed text-zinc-300 text-sm leading-5">
                  When a detective uncovers a conspiracy buried deep within the
                  neon-lit underworld, she must confront her own past to expose
                  the truth. A gripping, atmospheric thriller that blurs the
                  line between justice and revenge across one unforgettable
                  night.
                </p>
                <div className="flex pt-1 items-center gap-6">
                  <div className="flex flex-col items-center gap-1">
                    <Avatar className="size-12 ring-2 ring-[#F5C518]/40">
                      <AvatarImage
                        src="https://images.unsplash.com/photo-1654765437547-6b572f52ee1a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3ODc2NDd8MHwxfHNlYXJjaHwxfHxhY3RyZXNzJTIwcG9ydHJhaXQlMjBoZWFkc2hvdCUyMHdvbWFufGVufDF8Mnx8fDE3ODAzODIzMzh8MA&ixlib=rb-4.1.0&q=80&w=200"
                        data-photoid="iZzw-GqzTCM"
                        data-authorname="Ivan Kazlouskij"
                        data-authorurl="https://unsplash.com/@ivankazlouskij"
                        data-blurhash="LHBV;L9Z0e-:E2-pNHE14:t7?GM{"
                      />
                      <AvatarFallback>A</AvatarFallback>
                    </Avatar>
                    <span className="text-[#a1a1a1] text-[11px]">
                      Elena Vasquez
                    </span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <Avatar className="size-12 ring-2 ring-[#F5C518]/40">
                      <AvatarImage
                        src="https://images.unsplash.com/photo-1714750977930-e7a7f4611257?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3ODc2NDd8MHwxfHNlYXJjaHwxfHxhY3RvciUyMHBvcnRyYWl0JTIwaGVhZHNob3QlMjBtYW58ZW58MXwyfHx8MTc4MDM4MjMzOXww&ixlib=rb-4.1.0&q=80&w=200"
                        data-photoid="kwKAvFdfWg8"
                        data-authorname="Michael Proctor"
                        data-authorurl="https://unsplash.com/@mproctor"
                        data-blurhash="LB8p$2Nu0gxGIBf6xaNGEhoL-Uog"
                      />
                      <AvatarFallback>M</AvatarFallback>
                    </Avatar>
                    <span className="text-[#a1a1a1] text-[11px]">
                      Marcus Reed
                    </span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <Avatar className="size-12 ring-2 ring-[#F5C518]/40">
                      <AvatarImage
                        src="https://images.unsplash.com/photo-1772839921944-f617bd60e493?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3ODc2NDd8MHwxfHNlYXJjaHwxfHxtYW4lMjBmYWNlJTIwZHJhbWF0aWMlMjBsaWdodGluZyUyMHBvcnRyYWl0fGVufDF8Mnx8fDE3ODAzODIzNDh8MA&ixlib=rb-4.1.0&q=80&w=200"
                        data-photoid="YcRKmHUNIeY"
                        data-authorname="Makeen M.Alaa"
                        data-authorurl="https://unsplash.com/@muhmedelbank"
                        data-blurhash="LHBg3t?vt7~q009FD%D%Rj%M-;M{"
                      />
                      <AvatarFallback>D</AvatarFallback>
                    </Avatar>
                    <span className="text-[#a1a1a1] text-[11px]">
                      David Cole
                    </span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <Avatar className="size-12 ring-2 ring-[#F5C518]/40">
                      <AvatarImage
                        src="https://images.unsplash.com/photo-1616840420121-7ad8ed885f11?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3ODc2NDd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGZhY2UlMjBkcmFtYXRpYyUyMHBvcnRyYWl0JTIwbW9vZHl8ZW58MXwyfHx8MTc4MDM4MjM0OHww&ixlib=rb-4.1.0&q=80&w=200"
                        data-photoid="zrZUCPgKMHc"
                        data-authorname="Khashayar Kouchpeydeh"
                        data-authorurl="https://unsplash.com/@kouchpeydeh"
                        data-blurhash="L55OZ?%N00DiWBWBj[t7D%Rix]xv"
                      />
                      <AvatarFallback>S</AvatarFallback>
                    </Avatar>
                    <span className="text-[#a1a1a1] text-[11px]">
                      Sofia Klein
                    </span>
                  </div>
                </div>
                <div className="flex pt-2 flex-wrap items-center gap-4">
                  <Button className="font-semibold bg-[#E50914] text-white px-6 gap-2">
                    <Play className="size-4 fill-white" />
                    Play Now
                  </Button>
                  <Button
                    variant="outline"
                    className="bg-transparent font-semibold text-neutral-50 border-[#E50914]/60 border-0 border-solid px-6 gap-2"
                  >
                    <Film className="size-4 text-[#E50914]" />
                    Watch Trailer
                  </Button>
                  <Button className="font-semibold bg-neutral-800 text-neutral-50 border-white/10 border-1 border-solid px-6 gap-2">
                    <Download className="size-4" />
                    Download
                  </Button>
                  <Button
                    variant="ghost"
                    className="font-medium text-neutral-50 px-5 gap-2"
                  >
                    <Plus className="size-4" />
                    Watchlist
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-[#0A0A0F] px-12 py-8">
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="bg-transparent border-white/10 border-t-0 border-r-0 border-b-1 border-l-0 border-solid p-0 justify-start gap-8 w-full h-auto">
              <TabsTrigger
                value="overview"
                className="relative bg-transparent font-semibold text-neutral-50 text-sm leading-5 border-[#E50914] border-t-0 border-r-0 border-b-2 border-l-0 border-solid px-0 pb-3"
              >
                Overview
              </TabsTrigger>
              <TabsTrigger
                value="episodes"
                className="bg-transparent font-medium text-[#a1a1a1] text-sm leading-5 px-0 pb-3"
              >
                Episodes
              </TabsTrigger>
              <TabsTrigger
                value="trailers"
                className="bg-transparent font-medium text-[#a1a1a1] text-sm leading-5 px-0 pb-3"
              >
                Trailers
              </TabsTrigger>
              <TabsTrigger
                value="more"
                className="bg-transparent font-medium text-[#a1a1a1] text-sm leading-5 px-0 pb-3"
              >
                More Like This
              </TabsTrigger>
            </TabsList>
            <TabsContent value="overview" className="pt-8">
              <div className="flex flex-col gap-12">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-2">
                    <MonitorPlay className="size-5 text-[#F5C518]" />
                    <h2 className="font-bold text-neutral-50 text-xl leading-7">
                      Streaming Providers
                    </h2>
                  </div>
                  <p className="text-[#a1a1a1] text-xs leading-4">
                    Available to stream and rent on the following platforms
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <div className="rounded-xl bg-neutral-900 border-white/10 border-1 border-solid flex px-4 py-3 items-center gap-3">
                      <span className="size-9 rounded-lg bg-[#E50914] flex justify-center items-center">
                        <Clapperboard className="size-5 text-white" />
                      </span>
                      <div className="flex flex-col">
                        <span className="font-semibold text-neutral-50 text-sm leading-5">
                          CineStream
                        </span>
                        <span className="text-[#a1a1a1] text-xs leading-4">
                          Included
                        </span>
                      </div>
                    </div>
                    <div className="rounded-xl bg-neutral-900 border-white/10 border-1 border-solid flex px-4 py-3 items-center gap-3">
                      <span className="size-9 rounded-lg bg-[#1FB6FF] flex justify-center items-center">
                        <Play className="size-5 fill-white text-white" />
                      </span>
                      <div className="flex flex-col">
                        <span className="font-semibold text-neutral-50 text-sm leading-5">
                          PrimeFlix
                        </span>
                        <span className="text-[#a1a1a1] text-xs leading-4">
                          Subscription
                        </span>
                      </div>
                    </div>
                    <div className="rounded-xl bg-neutral-900 border-white/10 border-1 border-solid flex px-4 py-3 items-center gap-3">
                      <span className="size-9 rounded-lg bg-[#F5C518] flex justify-center items-center">
                        <Tv className="size-5 text-[#0A0A0F]" />
                      </span>
                      <div className="flex flex-col">
                        <span className="font-semibold text-neutral-50 text-sm leading-5">
                          StarMax
                        </span>
                        <span className="text-[#a1a1a1] text-xs leading-4">
                          Rent $4.99
                        </span>
                      </div>
                    </div>
                    <div className="rounded-xl bg-neutral-900 border-white/10 border-1 border-solid flex px-4 py-3 items-center gap-3">
                      <span className="size-9 rounded-lg bg-[#6B46C1] flex justify-center items-center">
                        <Film className="size-5 text-white" />
                      </span>
                      <div className="flex flex-col">
                        <span className="font-semibold text-neutral-50 text-sm leading-5">
                          ReelVault
                        </span>
                        <span className="text-[#a1a1a1] text-xs leading-4">
                          Buy $12.99
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <div className="flex justify-between items-center">
                    <h2 className="font-bold text-neutral-50 text-xl leading-7">
                      More Like This
                    </h2>
                    <a className="transition-colors font-medium text-[#a1a1a1] text-xs leading-4 flex items-center gap-1">
                      View all
                      <ChevronRight className="size-4" />
                    </a>
                  </div>
                  <div className="flex gap-4 overflow-hidden">
                    <Card className="shrink-0 bg-neutral-900 border-black/1 border-0 border-solid p-0 gap-0 w-50 overflow-hidden">
                      <div className="relative aspect-[2/3] overflow-hidden">
                        <img
                          src="https://images.unsplash.com/photo-1645300041175-152856c6146b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3ODc2NDd8MHwxfHNlYXJjaHwxfHxzcGFjZSUyMHNjaWVuY2UlMjBmaWN0aW9uJTIwbW92aWUlMjBwb3N0ZXIlMjBkYXJrfGVufDF8MXx8fDE3ODAzODIzNDh8MA&ixlib=rb-4.1.0&q=80&w=400"
                          alt="Related"
                          className="object-cover w-full h-full"
                          data-photoid="Dvy45WAW-5I"
                          data-authorname="Sasha Rubaniuk"
                          data-authorurl="https://unsplash.com/@sasharubaniuk"
                          data-blurhash="L668T^RP4TofD%ogxFa#9Ej]%Mj]"
                        />
                        <div className="bg-[linear-gradient(to_top,#0A0A0F_5%,transparent_60%)] absolute inset-0" />
                        <span className="font-bold rounded-sm bg-[#F5C518] text-[#0A0A0F] text-[10px] flex absolute left-2 top-2 px-1.5 py-0.5 items-center gap-1">
                          <Star className="size-2.5 fill-[#0A0A0F]" />
                          7.9
                        </span>
                      </div>
                      <CardContent className="flex p-3 flex-col gap-1">
                        <span className="truncate font-semibold text-neutral-50 text-sm leading-5">
                          Orbital Decay
                        </span>
                        <span className="text-[#a1a1a1] text-xs leading-4">
                          2023 · Sci-Fi
                        </span>
                      </CardContent>
                    </Card>
                    <Card className="shrink-0 bg-neutral-900 border-black/1 border-0 border-solid p-0 gap-0 w-50 overflow-hidden">
                      <div className="relative aspect-[2/3] overflow-hidden">
                        <img
                          src="https://images.unsplash.com/photo-1588281345136-9893252095bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3ODc2NDd8MHwxfHNlYXJjaHwxfHxhY3Rpb24lMjBtb3ZpZSUyMGV4cGxvc2lvbiUyMGNpbmVtYXRpY3xlbnwxfDB8fHwxNzgwMzgyMzQ4fDA&ixlib=rb-4.1.0&q=80&w=400"
                          alt="Related"
                          className="object-cover w-full h-full"
                          data-photoid="Oi31uKsnM1Q"
                          data-authorname="Luke Jernejcic"
                          data-authorurl="https://unsplash.com/@jernejcic"
                          data-blurhash="LiLDJhtSNHRO1+RPj[o#AdoLofbH"
                        />
                        <div className="bg-[linear-gradient(to_top,#0A0A0F_5%,transparent_60%)] absolute inset-0" />
                        <span className="font-bold rounded-sm bg-[#F5C518] text-[#0A0A0F] text-[10px] flex absolute left-2 top-2 px-1.5 py-0.5 items-center gap-1">
                          <Star className="size-2.5 fill-[#0A0A0F]" />
                          8.1
                        </span>
                      </div>
                      <CardContent className="flex p-3 flex-col gap-1">
                        <span className="truncate font-semibold text-neutral-50 text-sm leading-5">
                          Final Strike
                        </span>
                        <span className="text-[#a1a1a1] text-xs leading-4">
                          2024 · Action
                        </span>
                      </CardContent>
                    </Card>
                    <Card className="shrink-0 bg-neutral-900 border-black/1 border-0 border-solid p-0 gap-0 w-50 overflow-hidden">
                      <div className="relative aspect-[2/3] overflow-hidden">
                        <img
                          src="https://images.unsplash.com/photo-1761639929252-8084685a481e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3ODc2NDd8MHwxfHNlYXJjaHwxfHxmb3Jlc3QlMjBteXN0ZXJ5JTIwZGFyayUyMGF0bW9zcGhlcmljfGVufDF8MHx8fDE3ODAzODIzNDh8MA&ixlib=rb-4.1.0&q=80&w=400"
                          alt="Related"
                          className="object-cover w-full h-full"
                          data-photoid="vDN503nSUXY"
                          data-authorname="Liana S"
                          data-authorurl="https://unsplash.com/@cherstve_pechivo"
                          data-blurhash="LGA0?#Rj4n%M~qRjD%xut7M{j[j["
                        />
                        <div className="bg-[linear-gradient(to_top,#0A0A0F_5%,transparent_60%)] absolute inset-0" />
                        <span className="font-bold rounded-sm bg-[#F5C518] text-[#0A0A0F] text-[10px] flex absolute left-2 top-2 px-1.5 py-0.5 items-center gap-1">
                          <Star className="size-2.5 fill-[#0A0A0F]" />
                          7.4
                        </span>
                      </div>
                      <CardContent className="flex p-3 flex-col gap-1">
                        <span className="truncate font-semibold text-neutral-50 text-sm leading-5">
                          The Hollow Woods
                        </span>
                        <span className="text-[#a1a1a1] text-xs leading-4">
                          2022 · Mystery
                        </span>
                      </CardContent>
                    </Card>
                    <Card className="shrink-0 bg-neutral-900 border-black/1 border-0 border-solid p-0 gap-0 w-50 overflow-hidden">
                      <div className="relative aspect-[2/3] overflow-hidden">
                        <img
                          src="https://images.unsplash.com/photo-1505274664176-44ccaa7969a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3ODc2NDd8MHwxfHNlYXJjaHwxfHxtb3ZpZSUyMHBvc3RlciUyMHBvcnRyYWl0JTIwZGFyayUyMHRocmlsbGVyfGVufDF8MXx8fDE3ODAzODIzMzh8MA&ixlib=rb-4.1.0&q=80&w=400"
                          alt="Related"
                          className="object-cover w-full h-full"
                          data-photoid="ouVAsbiwzlo"
                          data-authorname="Peter Forster"
                          data-authorurl="https://unsplash.com/@peter_forster"
                          data-blurhash="L125u#xZ57EMxaj[R*WC56R*=|%1"
                        />
                        <div className="bg-[linear-gradient(to_top,#0A0A0F_5%,transparent_60%)] absolute inset-0" />
                        <span className="font-bold rounded-sm bg-[#F5C518] text-[#0A0A0F] text-[10px] flex absolute left-2 top-2 px-1.5 py-0.5 items-center gap-1">
                          <Star className="size-2.5 fill-[#0A0A0F]" />
                          8.6
                        </span>
                      </div>
                      <CardContent className="flex p-3 flex-col gap-1">
                        <span className="truncate font-semibold text-neutral-50 text-sm leading-5">
                          Eye of the Storm
                        </span>
                        <span className="text-[#a1a1a1] text-xs leading-4">
                          2023 · Thriller
                        </span>
                      </CardContent>
                    </Card>
                    <Card className="shrink-0 bg-neutral-900 border-black/1 border-0 border-solid p-0 gap-0 w-50 overflow-hidden">
                      <div className="relative aspect-[2/3] overflow-hidden">
                        <img
                          src="https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3ODc2NDd8MHwxfHNlYXJjaHwxfHxjaW5lbWF0aWMlMjBtb3ZpZSUyMHNjZW5lJTIwZGFyayUyMGRyYW1hdGljJTIwYmFja2Ryb3B8ZW58MXwwfHx8MTc4MDM4MjMzOHww&ixlib=rb-4.1.0&q=80&w=400"
                          alt="Related"
                          className="object-cover w-full h-full"
                          data-photoid="G9i_plbfDgk"
                          data-authorname="Jeremy Bishop"
                          data-authorurl="https://unsplash.com/@jeremybishop"
                          data-blurhash="L50A^VZze8k@lVZ}eSk?ksemeng4"
                        />
                        <div className="bg-[linear-gradient(to_top,#0A0A0F_5%,transparent_60%)] absolute inset-0" />
                        <span className="font-bold rounded-sm bg-[#F5C518] text-[#0A0A0F] text-[10px] flex absolute left-2 top-2 px-1.5 py-0.5 items-center gap-1">
                          <Star className="size-2.5 fill-[#0A0A0F]" />
                          7.7
                        </span>
                      </div>
                      <CardContent className="flex p-3 flex-col gap-1">
                        <span className="truncate font-semibold text-neutral-50 text-sm leading-5">
                          Twilight Coast
                        </span>
                        <span className="text-[#a1a1a1] text-xs leading-4">
                          2021 · Drama
                        </span>
                      </CardContent>
                    </Card>
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <Sparkles className="size-5 text-[#F5C518]" />
                      <h2 className="font-bold text-neutral-50 text-xl leading-7">
                        Recommended For You
                      </h2>
                    </div>
                    <a className="transition-colors font-medium text-[#a1a1a1] text-xs leading-4 flex items-center gap-1">
                      View all
                      <ChevronRight className="size-4" />
                    </a>
                  </div>
                  <div className="flex gap-4 overflow-hidden">
                    <Card className="shrink-0 bg-neutral-900 border-black/1 border-0 border-solid p-0 gap-0 w-50 overflow-hidden">
                      <div className="relative aspect-[2/3] overflow-hidden">
                        <img
                          src="https://images.unsplash.com/photo-1637224671997-6dd7f74092a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3ODc2NDd8MHwxfGFsbHx8fHx8fHx8fDE3NTUxNTQ2MDl8&ixlib=rb-4.1.0&q=80&w=400"
                          alt="Recommended"
                          className="object-cover w-full h-full"
                          data-photoid="saE7xiecGkM"
                          data-authorname="Ferhat Deniz Fors"
                          data-authorurl="https://unsplash.com/@ferhat"
                          data-blurhash="LePp+GXSfls,MyMetQx[.jjctPoy"
                        />
                        <div className="bg-[linear-gradient(to_top,#0A0A0F_5%,transparent_60%)] absolute inset-0" />
                        <span className="font-bold rounded-sm bg-[#F5C518] text-[#0A0A0F] text-[10px] flex absolute left-2 top-2 px-1.5 py-0.5 items-center gap-1">
                          <Star className="size-2.5 fill-[#0A0A0F]" />
                          8.3
                        </span>
                      </div>
                      <CardContent className="flex p-3 flex-col gap-1">
                        <span className="truncate font-semibold text-neutral-50 text-sm leading-5">
                          Crimson Mirage
                        </span>
                        <span className="text-[#a1a1a1] text-xs leading-4">
                          2024 · Action
                        </span>
                      </CardContent>
                    </Card>
                    <Card className="shrink-0 bg-neutral-900 border-black/1 border-0 border-solid p-0 gap-0 w-50 overflow-hidden">
                      <div className="relative aspect-[2/3] overflow-hidden">
                        <img
                          src="https://images.unsplash.com/photo-1633969858834-efae4d8a3a1a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3ODc2NDd8MHwxfHNlYXJjaHwxfHxub2lyJTIwY3JpbWUlMjB0aHJpbGxlciUyMG1vdmllJTIwc3RpbGx8ZW58MXwxfHx8MTc4MDU1NzY5N3ww&ixlib=rb-4.1.0&q=80&w=400"
                          alt="Recommended"
                          className="object-cover w-full h-full"
                          data-photoid="kPski-xMpWA"
                          data-authorname="Basit Abdul"
                          data-authorurl="https://unsplash.com/@lofted_track"
                          data-blurhash="L667$qBW[ks~M@s9WZS655wGF$N2"
                        />
                        <div className="bg-[linear-gradient(to_top,#0A0A0F_5%,transparent_60%)] absolute inset-0" />
                        <span className="font-bold rounded-sm bg-[#F5C518] text-[#0A0A0F] text-[10px] flex absolute left-2 top-2 px-1.5 py-0.5 items-center gap-1">
                          <Star className="size-2.5 fill-[#0A0A0F]" />
                          8.0
                        </span>
                      </div>
                      <CardContent className="flex p-3 flex-col gap-1">
                        <span className="truncate font-semibold text-neutral-50 text-sm leading-5">
                          Midnight Alibi
                        </span>
                        <span className="text-[#a1a1a1] text-xs leading-4">
                          2023 · Crime
                        </span>
                      </CardContent>
                    </Card>
                    <Card className="shrink-0 bg-neutral-900 border-black/1 border-0 border-solid p-0 gap-0 w-50 overflow-hidden">
                      <div className="relative aspect-[2/3] overflow-hidden">
                        <img
                          src="https://images.unsplash.com/photo-1761639929252-8084685a481e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3ODc2NDd8MHwxfHNlYXJjaHwxfHxmb3Jlc3QlMjBteXN0ZXJ5JTIwZGFyayUyMGF0bW9zcGhlcmljfGVufDF8MHx8fDE3ODAzODIzNDh8MA&ixlib=rb-4.1.0&q=80&w=400"
                          alt="Recommended"
                          className="object-cover w-full h-full"
                          data-photoid="vDN503nSUXY"
                          data-authorname="Liana S"
                          data-authorurl="https://unsplash.com/@cherstve_pechivo"
                          data-blurhash="LGA0?#Rj4n%M~qRjD%xut7M{j[j["
                        />
                        <div className="bg-[linear-gradient(to_top,#0A0A0F_5%,transparent_60%)] absolute inset-0" />
                        <span className="font-bold rounded-sm bg-[#F5C518] text-[#0A0A0F] text-[10px] flex absolute left-2 top-2 px-1.5 py-0.5 items-center gap-1">
                          <Star className="size-2.5 fill-[#0A0A0F]" />
                          7.6
                        </span>
                      </div>
                      <CardContent className="flex p-3 flex-col gap-1">
                        <span className="truncate font-semibold text-neutral-50 text-sm leading-5">
                          Silent Harbor
                        </span>
                        <span className="text-[#a1a1a1] text-xs leading-4">
                          2022 · Mystery
                        </span>
                      </CardContent>
                    </Card>
                    <Card className="shrink-0 bg-neutral-900 border-black/1 border-0 border-solid p-0 gap-0 w-50 overflow-hidden">
                      <div className="relative aspect-[2/3] overflow-hidden">
                        <img
                          src="https://images.unsplash.com/photo-1645300041175-152856c6146b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3ODc2NDd8MHwxfHNlYXJjaHwxfHxzcGFjZSUyMHNjaWVuY2UlMjBmaWN0aW9uJTIwbW92aWUlMjBwb3N0ZXIlMjBkYXJrfGVufDF8MXx8fDE3ODAzODIzNDh8MA&ixlib=rb-4.1.0&q=80&w=400"
                          alt="Recommended"
                          className="object-cover w-full h-full"
                          data-photoid="Dvy45WAW-5I"
                          data-authorname="Sasha Rubaniuk"
                          data-authorurl="https://unsplash.com/@sasharubaniuk"
                          data-blurhash="L668T^RP4TofD%ogxFa#9Ej]%Mj]"
                        />
                        <div className="bg-[linear-gradient(to_top,#0A0A0F_5%,transparent_60%)] absolute inset-0" />
                        <span className="font-bold rounded-sm bg-[#F5C518] text-[#0A0A0F] text-[10px] flex absolute left-2 top-2 px-1.5 py-0.5 items-center gap-1">
                          <Star className="size-2.5 fill-[#0A0A0F]" />
                          8.8
                        </span>
                      </div>
                      <CardContent className="flex p-3 flex-col gap-1">
                        <span className="truncate font-semibold text-neutral-50 text-sm leading-5">
                          Neon Requiem
                        </span>
                        <span className="text-[#a1a1a1] text-xs leading-4">
                          2024 · Sci-Fi
                        </span>
                      </CardContent>
                    </Card>
                    <Card className="shrink-0 bg-neutral-900 border-black/1 border-0 border-solid p-0 gap-0 w-50 overflow-hidden">
                      <div className="relative aspect-[2/3] overflow-hidden">
                        <img
                          src="https://images.unsplash.com/photo-1588281345136-9893252095bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3ODc2NDd8MHwxfHNlYXJjaHwxfHxhY3Rpb24lMjBtb3ZpZSUyMGV4cGxvc2lvbiUyMGNpbmVtYXRpY3xlbnwxfDB8fHwxNzgwMzgyMzQ4fDA&ixlib=rb-4.1.0&q=80&w=400"
                          alt="Recommended"
                          className="object-cover w-full h-full"
                          data-photoid="Oi31uKsnM1Q"
                          data-authorname="Luke Jernejcic"
                          data-authorurl="https://unsplash.com/@jernejcic"
                          data-blurhash="LiLDJhtSNHRO1+RPj[o#AdoLofbH"
                        />
                        <div className="bg-[linear-gradient(to_top,#0A0A0F_5%,transparent_60%)] absolute inset-0" />
                        <span className="font-bold rounded-sm bg-[#F5C518] text-[#0A0A0F] text-[10px] flex absolute left-2 top-2 px-1.5 py-0.5 items-center gap-1">
                          <Star className="size-2.5 fill-[#0A0A0F]" />
                          7.2
                        </span>
                      </div>
                      <CardContent className="flex p-3 flex-col gap-1">
                        <span className="truncate font-semibold text-neutral-50 text-sm leading-5">
                          Ashfall
                        </span>
                        <span className="text-[#a1a1a1] text-xs leading-4">
                          2021 · Drama
                        </span>
                      </CardContent>
                    </Card>
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <MessageSquare className="size-5 text-[#F5C518]" />
                      <h2 className="font-bold text-neutral-50 text-xl leading-7">
                        Reviews
                      </h2>
                    </div>
                    <Button
                      variant="outline"
                      className="bg-transparent text-neutral-50 text-xs leading-4 border-white/10 border-0 border-solid px-4 gap-2"
                    >
                      <PenLine className="size-3.5" />
                      Write a Review
                    </Button>
                  </div>
                  <div className="rounded-2xl bg-neutral-900 border-white/10 border-1 border-solid flex p-6 flex-col gap-6">
                    <div className="flex flex-col items-center gap-1">
                      <span className="font-extrabold text-neutral-50 text-5xl leading-12">
                        8.4
                      </span>
                      <div className="flex items-center gap-0.5">
                        <Star className="size-4 fill-[#F5C518] text-[#F5C518]" />
                        <Star className="size-4 fill-[#F5C518] text-[#F5C518]" />
                        <Star className="size-4 fill-[#F5C518] text-[#F5C518]" />
                        <Star className="size-4 fill-[#F5C518] text-[#F5C518]" />
                        <StarHalf className="size-4 fill-[#F5C518] text-[#F5C518]" />
                      </div>
                      <span className="text-[#a1a1a1] text-xs leading-4">
                        2,418 ratings
                      </span>
                    </div>
                    <div className="flex flex-col flex-1 gap-2">
                      <div className="flex items-center gap-3">
                        <span className="text-[#a1a1a1] text-xs leading-4 w-8">
                          5★
                        </span>
                        <div className="rounded-full bg-neutral-800 flex-1 h-2 overflow-hidden">
                          <div className="w-[72%] rounded-full bg-[#F5C518] h-full" />
                        </div>
                        <span className="text-right text-[#a1a1a1] text-xs leading-4 w-10">
                          72%
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-[#a1a1a1] text-xs leading-4 w-8">
                          4★
                        </span>
                        <div className="rounded-full bg-neutral-800 flex-1 h-2 overflow-hidden">
                          <div className="w-[18%] rounded-full bg-[#F5C518] h-full" />
                        </div>
                        <span className="text-right text-[#a1a1a1] text-xs leading-4 w-10">
                          18%
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-[#a1a1a1] text-xs leading-4 w-8">
                          3★
                        </span>
                        <div className="rounded-full bg-neutral-800 flex-1 h-2 overflow-hidden">
                          <div className="w-[6%] rounded-full bg-[#F5C518] h-full" />
                        </div>
                        <span className="text-right text-[#a1a1a1] text-xs leading-4 w-10">
                          6%
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-[#a1a1a1] text-xs leading-4 w-8">
                          2★
                        </span>
                        <div className="rounded-full bg-neutral-800 flex-1 h-2 overflow-hidden">
                          <div className="w-[3%] rounded-full bg-[#F5C518] h-full" />
                        </div>
                        <span className="text-right text-[#a1a1a1] text-xs leading-4 w-10">
                          3%
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-[#a1a1a1] text-xs leading-4 w-8">
                          1★
                        </span>
                        <div className="rounded-full bg-neutral-800 flex-1 h-2 overflow-hidden">
                          <div className="w-[1%] rounded-full bg-[#F5C518] h-full" />
                        </div>
                        <span className="text-right text-[#a1a1a1] text-xs leading-4 w-10">
                          1%
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <Card className="bg-neutral-900 border-white/10 border-1 border-solid p-5 gap-3">
                      <CardHeader className="p-0 flex-row items-center gap-3">
                        <Avatar className="size-10 ring-1 ring-border">
                          <AvatarImage
                            src="https://images.unsplash.com/photo-1707396174323-dd31d3dd4a97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3ODc2NDd8MHwxfHNlYXJjaHwxfHx1c2VyJTIwYXZhdGFyJTIwd29tYW4lMjBzbWlsaW5nJTIwcG9ydHJhaXR8ZW58MXwyfHx8MTc4MDU1NzY5N3ww&ixlib=rb-4.1.0&q=80&w=200"
                            data-photoid="ieDkvpIY_1A"
                            data-authorname="Farhat Altaf"
                            data-authorurl="https://unsplash.com/@farhat099"
                            data-blurhash="LB7,}aay0gofayayoLj[0gj[^jWV"
                          />
                          <AvatarFallback>J</AvatarFallback>
                        </Avatar>
                        <div className="flex flex-col">
                          <span className="font-semibold text-neutral-50 text-sm leading-5">
                            Jordan Avery
                          </span>
                          <div className="flex items-center gap-0.5">
                            <Star className="size-3 fill-[#F5C518] text-[#F5C518]" />
                            <Star className="size-3 fill-[#F5C518] text-[#F5C518]" />
                            <Star className="size-3 fill-[#F5C518] text-[#F5C518]" />
                            <Star className="size-3 fill-[#F5C518] text-[#F5C518]" />
                            <Star className="size-3 fill-[#F5C518] text-[#F5C518]" />
                          </div>
                        </div>
                        <span className="text-[#a1a1a1] text-xs leading-4 ml-auto">
                          3 days ago
                        </span>
                      </CardHeader>
                    </Card>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </section>
      </div>
    </div>
  );
}
