import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import MovieCard from "../components/MovieCard";
import Loader from "../components/Loader";

import { getTrendingMovies, searchMovies } from "../services/api";

function Home() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchTrending();
  }, []);

  const fetchTrending = async () => {
    const data = await getTrendingMovies();
    setMovies(data);
  };

  const handleSearch = async (searchQuery) => {
    setQuery(searchQuery);
    setLoading(true);
    const data = await searchMovies(searchQuery);
    setMovies(data);
    setLoading(false);
  };

  const displayedMovies = query ? movies : movies.slice(1);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-black to-slate-800 text-white">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-10">
          <SearchBar onSearch={handleSearch} />
        </div>

        {loading ? (
          <Loader />
        ) : displayedMovies.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {displayedMovies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        ) : (
          <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-10 text-center text-slate-300 shadow-xl">
            No movies found. Try another search.
          </div>
        )}
      </main>
    </div>
  );
}

export default Home;