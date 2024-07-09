import "./App.css";
import Header from "./components/Header/Header";
import MovieList from "./components/Movies/MoviesList";
import Search from "./components/SearchSection/SearchSection";

function App() {
  return (
    <div className="App">
      <Header />
      <Search />
      <MovieList />
      
    </div>
  );
}

export default App;
