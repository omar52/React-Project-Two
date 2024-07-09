import { useNavigate } from "react-router-dom";
import "./SearchSection.css";
const Search = () => {
  const navigate = useNavigate();

  const handleNavigate = (id) => {
    navigate(`/search`);
  };

  return (
    <div className="search-conetent">
      <h2>Welcome to our movie app</h2>
      <p>Millions of movies, TV shows and people to discover. Explore now.</p>
      <form>
        <div className="search-form ">
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Search & Explore"
          />
          <button onClick={()=>handleNavigate()} className="btn search-button">Search</button>
        </div>
      </form>
    </div>
  );
};

export default Search;
