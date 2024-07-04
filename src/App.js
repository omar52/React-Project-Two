import "./App.css";
import Header from "./components/Header/Header";
import MovieList from "./components/Movies/MoviesList";
import Pagenation from "./components/Pagenation/Pagenation";
import Search from "./components/SearchSection/SearchSection";

function App() {
  return (
    <div className="App">
      <Header />
      <Search />
      <MovieList />
      <Pagenation />
    </div>
  );
}

export default App;
