import { faEllipsis, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import { addMovie, removeMovie } from "../Store/Slices/Counter";

const Search = () => {
  const navigate = useNavigate();
  const watchList = useSelector((state) => state.counter.watchList);
  const dispatch = useDispatch();
  const [searchList, setSearchList] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get("query");
  const [input, setInput] = useState("");
  // console.log(searchParams);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=67b4b2f72966fb7844cde967d3967510&query=${search}`
      )
      .then((response) => {
        setSearchList(response.data.results);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [search]);

  const onClick = (event) => {
    event.preventDefault();
    setSearchParams({ query: input });
  };

  const handleWatchlist = (movie) => {
    if (!watchList[movie.id]) {
      dispatch(addMovie(movie));
    } else {
      dispatch(removeMovie(movie));
    }
  };

  const handleNavigation = (id) => {
    navigate(`/movie-details/${id}`);
  };

  // const onChange = (event) => {
  //   event.preventDefault();
  //   setSearchParams({ query: input });
  // };
  // console.log(searchList);

  return (
    <div className="mt-4  justify-content-center container">
      <form className="row g-3 d-flex">
        <div className="col flex-1">
          <input
            type="text"
            className="form-control"
            id="text"
            placeholder="Type Your Movie Name"
            onChange={(e) => setInput(e.target.value)}
            value={input}
          />
        </div>
        <div className="col-auto">
          <button
            style={{ backgroundColor: "#FFE353", border: "none" }}
            type="submit"
            className="btn btn-primary mb-3 "
            onClick={onClick}
          >
            Search
          </button>
        </div>
      </form>
      <div className="mt-5 text-start hint-sentence">
        <p style={{ fontSize: "15px" }}>Search Results For : {search}</p>
      </div>
      <div
        style={{ margin: "0 auto" }}
        className="row row-cols-1 row-cols-md-2 g-4 cards-container mb-5"
      >
        {searchList ? (
          searchList.map((movie) => (
            <div className="col-md-2 d-flex" key={movie.id}>
              <div className="card movie-card">
                <FontAwesomeIcon
                  style={{ cursor: "pointer" }}
                  onClick={() => handleNavigation(movie.id)}
                  icon={faEllipsis}
                  className="details-icon"
                />
                <img
                  style={{ cursor: "pointer" }}
                  onClick={() => handleNavigation(movie.id)}
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <span className="film-rate">
                    {Math.ceil(movie.vote_average)}
                  </span>
                  <h5
                    style={{ cursor: "pointer" }}
                    onClick={() => handleNavigation(movie.id)}
                    className="card-title mt-3 mb-2 text-start"
                  >
                    {movie.title}
                  </h5>
                  <div className="card-foot">
                    <p className="card-text">{movie.release_date}</p>
                    <FontAwesomeIcon
                      style={{
                        color: watchList[movie.id] ? "#ffe353" : "black",
                      }}
                      onClick={() => handleWatchlist(movie)}
                      className="card-icon"
                      icon={faHeart}
                      size="xl"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <h2>there r no movies</h2>
        )}
      </div>
    </div>
  );
};

export default Search;
