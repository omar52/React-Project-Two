import { useNavigate } from "react-router-dom";
import "./SearchSection.css";
import { useState } from "react";

const Search = () => {
  const [searchValue, setSearchValue] = useState("");

  const navigate = useNavigate();

  const handleNavigate = (id) => {
    navigate(`/result?query=${searchValue}`);
  };

  return (
    <div className="search-conetent">
      <h2>Welcome to our movie app</h2>
      <p>Millions of movies, TV shows and people to discover. Explore now.</p>
      <form>
        <div className="search-form ">
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Search & Explore"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <button
            onClick={() => handleNavigate()}
            className="btn search-button"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default Search;
