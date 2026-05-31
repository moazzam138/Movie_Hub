import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { getMovieDetails } from "../services/api";
import Navbar from "../components/Navbar";
import MovieDetails from "../components/MovieDetails";

function Details() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetchMovie();
  }, []);

  const fetchMovie = async () => {
    const data = await getMovieDetails(id);
    setMovie(data);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <main className="max-w-6xl mx-auto px-4 py-10">
        {movie ? (
          <MovieDetails movie={movie} />
        ) : (
          <div className="rounded-3xl border border-white/10 bg-slate-900/80 px-6 py-14 text-center text-slate-300 shadow-xl">
            Loading movie details...
          </div>
        )}
      </main>
    </div>
  );
}

export default Details;