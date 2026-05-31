import { useState } from "react";

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query.trim());
  };

  return (
    <form onSubmit={handleSubmit} className="mx-auto flex max-w-3xl flex-col gap-4 rounded-3xl border border-white/10 bg-slate-900/90 p-4 shadow-2xl sm:flex-row">
      <input
        className="flex-1 rounded-2xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
        type="text"
        value={query}
        placeholder="Search movies..."
        onChange={(e) => setQuery(e.target.value)}
      />

      <button
        type="submit"
        className="rounded-2xl bg-indigo-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-indigo-400"
      >
        Search
      </button>
    </form>
  );
}

export default SearchBar;