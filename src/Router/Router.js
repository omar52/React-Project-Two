import { Route, Routes } from "react-router-dom";
import MovieDetails from "../pages/MovieDetails";
import NoMoviesInWatchList from "../pages/NoWatchListItems";
import WatchList from "../pages/WatchList";
import Search from "../pages/Search";
import PageNotFound from "../pages/PageNotFound";
import MovieList from "../components/Movies/MoviesList";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<MovieList />} />
      <Route path="/movie-details/:id" element={<MovieDetails />} />
      <Route path="/empty-watchList" element={<NoMoviesInWatchList />} />
      <Route path="/watchList" element={<WatchList />} />
      <Route path="/result" element={<Search />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}
