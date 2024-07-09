import MovieList from "../components/Movies/MoviesList";
import Search from "../components/SearchSection/SearchSection";

const Home = () => {
  return (
    <div>
      <Search />
      <MovieList />
    </div>
  );
};

export default Home;
