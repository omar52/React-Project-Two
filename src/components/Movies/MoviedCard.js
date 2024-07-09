import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

const MovieCard = ({ movie }) => {
  return (
      <div className="card movie-card">
        <FontAwesomeIcon icon={faEllipsis} className="details-icon" />
        <img
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <span className="film-rate">{Math.ceil(movie.vote_average)}</span>
          <h5 className="card-title mt-3 mb-2 text-start">{movie.title}</h5>
          <div className="card-foot">
            <p className="card-text">{movie.release_date}</p>
            <FontAwesomeIcon className="card-icon" icon={faHeart} size="xl" />
          </div>
        </div>
      </div>
   
  );
};

export default MovieCard;
