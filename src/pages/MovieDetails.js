import {
  faEllipsis,
  faHeart,
  faLink,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { addMovie, removeMovie } from "../Store/Slices/Counter";

const MovieDetails = () => {
  
  const watchList = useSelector((state) => state.counter.watchList);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const [movieDetails, setMovieDetails] = useState({});
  const [recommendedMovies, setRecommendedMovies] = useState([]);

  const handleWatchlist = () => {
    if (!watchList[movieDetails.id]) {
      dispatch(addMovie(movieDetails));
    } else {
      dispatch(removeMovie(movieDetails));
    }
  };

  const handleNavigation = (id) => {
    navigate(`/movie-details/${id}`);
  };

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${params.id}?api_key=67b4b2f72966fb7844cde967d3967510`
      )
      .then((response) => {
        setMovieDetails(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });

    axios
      .get(
        `https://api.themoviedb.org/3/movie/${params.id}/recommendations?api_key=67b4b2f72966fb7844cde967d3967510`
      )
      .then((response) => {
        setRecommendedMovies(response.data.results.slice(0, 6));
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [params.id]);
  console.log(movieDetails);
  return (
    <div className="row mt-5 container">
      <div className="col-4 ">
        <img
          className=" rounded-5 img-fluid text-start "
          src={`https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`}
          alt="pic"
          style={{ height: "100%" }}
        />
      </div>
      <div className="col-lg-8 pt-2">
        <div className="ms-0 title d-flex align-items-center justify-content-between">
          <h2>{movieDetails.title}</h2>
          <FontAwesomeIcon
            onClick={() => handleWatchlist()}
            style={{
              cursor: "pointer",
              color: watchList[movieDetails.id] ? "#FFE353" : "black",
            }}
            icon={faHeart}
            className={
              watchList[movieDetails.id]
                ? "active  details-icon me-5"
                : "details-icon me-5"
            }
            size="2x"
          />
        </div>
        <div className="text-start">
          <small>{movieDetails.release_date}</small>
        </div>
        <div className=" text-start mt-2  popularity">
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <span className="ms-3">({Math.round(movieDetails.popularity)})</span>
        </div>
        <p className="text-start mt-4 fs-5">{movieDetails.overview}</p>
        <div className=" text-start types mt-5">
          {movieDetails.genres &&
            movieDetails.genres.map((type) => (
              <>
                <span className="px-3 py-2 me-2 badge text-bg-warning fw-light rounded-pill">
                  {type.name}
                </span>
              </>
            ))}
        </div>
        <div className="text-start mt-4">
          <span className="me-5">Duration: {movieDetails.runtime}</span>
          {movieDetails.spoken_languages &&
            movieDetails.spoken_languages.map((lang) => (
              <>
                <span>Languages : {lang.name}</span>
              </>
            ))}
        </div>
        <div className="text-start mt-4 producers">
          {movieDetails.production_companies &&
            movieDetails.production_companies.map((com) =>
              com.logo_path ? (
                <img
                  style={{ width: "100px", height: "50px" }}
                  src={`https://image.tmdb.org/t/p/w500/${com.logo_path}`}
                  alt="al"
                  className="me-2"
                />
              ) : (
                <span className="border p-2 me-3 border-3 border-secondary">
                  Name :{com.name}
                </span>
              )
            )}
        </div>
        <div className="text-start mt-5">
          <Button className="rounded-pill text-start" variant="outline-warning">
            <a
              style={{ textDecoration: "none", color: "black" }}
              href={movieDetails.homepage}
              target="blank"
            >
              Website
              <FontAwesomeIcon className="ms-1" icon={faLink} />
            </a>
          </Button>{" "}
        </div>
      </div>
      <hr className="mt-5" />
      <h2 className="text-start">Recommendation</h2>
      <div
        style={{ margin: "0 auto" }}
        className="row row-cols-1 row-cols-md-2 g-4 cards-container mb-5"
      >
        {recommendedMovies &&
          recommendedMovies.map((movie) => (
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
                      className="card-icon"
                      icon={faHeart}
                      size="xl"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default MovieDetails;
