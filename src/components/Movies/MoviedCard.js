import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { addMovie, removeMovie } from "../../Store/Slices/Counter";

const MovieCard = ({ movie, handleNavigation }) => {
  const watchList = useSelector((state) => state.counter.watchList);
  const dispatch = useDispatch();

  const handleWatchlist = () => {
    if (!watchList[movie.id]) {
      dispatch(addMovie(movie));
    } else {
      dispatch(removeMovie(movie));
    }
  };

  return (
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
        <span className="film-rate">{Math.ceil(movie.vote_average)}</span>
        <h6
          style={{ cursor: "pointer" }}
          onClick={() => handleNavigation(movie.id)}
          className="card-title mt-3 mb-2 text-start"
        >
          {movie.title}
        </h6>
        <div className="card-foot">
          <p style={{fontSize:"12px"}} className="card-text">{movie.release_date}</p>
          <FontAwesomeIcon
            onClick={() => handleWatchlist()}
            className={watchList[movie.id] ? "active card-icon" : "card-icon"}
            icon={faHeart}
            size="xl"
          />
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
