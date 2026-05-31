function MovieDetails({ movie }) {
  return (
    <div className="grid gap-8 lg:grid-cols-[420px_minmax(0,1fr)]">
      <div className="overflow-hidden rounded-3xl border border-white/10 bg-slate-900 shadow-2xl">
        <img
          className="h-full w-full object-cover"
          src={`https://image.tmdb.org/t/p/w780${movie.poster_path}`}
          alt={movie.title}
        />
      </div>

      <section className="space-y-6">
        <div className="rounded-3xl border border-white/10 bg-slate-900/90 p-8 shadow-xl">
          <h1 className="text-4xl font-semibold tracking-tight text-white">
            {movie.title}
          </h1>
          <p className="mt-4 text-slate-300 leading-8">{movie.overview}</p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-6 text-slate-200 shadow-inner">
            <p className="text-sm text-slate-400">Rating</p>
            <p className="mt-2 text-2xl font-semibold text-white">{movie.vote_average}</p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-6 text-slate-200 shadow-inner">
            <p className="text-sm text-slate-400">Release</p>
            <p className="mt-2 text-lg text-white">{movie.release_date}</p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-6 text-slate-200 shadow-inner">
            <p className="text-sm text-slate-400">Runtime</p>
            <p className="mt-2 text-lg text-white">{movie.runtime ?? "N/A"} min</p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-6 text-slate-200 shadow-inner">
            <p className="text-sm text-slate-400">Genres</p>
            <p className="mt-2 text-lg text-white">
              {movie.genres?.map((genre) => genre.name).join(", ") || "N/A"}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default MovieDetails;