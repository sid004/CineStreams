# Movie Search App

A modern React + Vite movie discovery application built with the TMDb API. The app lets users browse popular and upcoming movies, explore TV shows, open detailed pages, search titles, and discover movies by genre.

## Features

- Home page with a hero carousel and featured sections
- Movie and TV browsing pages
- Detailed movie and TV information pages
- Search experience for movie titles
- Genre-based browsing and category exploration
- Responsive UI powered by React Router and Swiper

## Tech Stack

- React 19
- Vite 8
- React Router DOM
- Tailwind CSS
- Swiper
- Lucide React

## Project Structure

- src/components: reusable UI components such as cards, headers, carousels, and listings
- src/pages: route-level views for home, movie, TV, search, and detail pages
- src/hooks: custom hooks for fetching data
- src/context: shared app context

## Getting Started

1. Install dependencies
   ```bash
   npm install
   ```

2. Create a local environment file
   ```bash
   VITE_BASE_URL=https://api.themoviedb.org/3/
   VITE_TMDB_API_KEY=your_tmdb_api_key
   ```

3. Start the development server
   ```bash
   npm run dev
   ```

## Available Scripts

- npm run dev: start the Vite development server
- npm run build: build the app for production
- npm run preview: preview the production build locally
- npm run lint: run ESLint checks

## Main Routes

- /: Home page
- /movie: Movies page
- /tv: TV page
- /movie/:id: Movie details page
- /tv/:id: TV details page
- /search: Search and genre browsing page
- /:name/:id: Genre detail page

## API Notes

The app uses the TMDb API through environment variables. A valid TMDb API key is required for the movie and TV data to load correctly.