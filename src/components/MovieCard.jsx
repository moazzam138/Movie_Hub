import { Link } from "react-router-dom";

function MovieCard({ movie }) {
  return (
    <Link to={`/movie/${movie.id}`}>
      <article className="group overflow-hidden rounded-3xl border border-white/10 bg-slate-900 shadow-2xl transition hover:-translate-y-1 hover:border-indigo-500/40">
        <div className="aspect-[3/4] overflow-hidden bg-slate-800">
          <img
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
          />
        </div>

        <div className="space-y-2 p-4">
          <h2 className="text-lg font-semibold text-white">{movie.title}</h2>
          <p className="text-sm text-slate-400">⭐ {movie.vote_average}</p>
        </div>
      </article>
    </Link>
  );
}

export default MovieCard;