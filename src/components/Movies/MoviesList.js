import { faHeart } from "@fortawesome/free-regular-svg-icons";
import "./MoviesList.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import axios from "axios";

const MovieList = () => {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/popular?api_key=67b4b2f72966fb7844cde967d3967510"
      )
      .then((response) => {
        // handle success
        setMovieList(response.data.results);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);
  console.log(movieList);
  return (
    <>
      <div className="game-list-heading ms-5 mt- text-start">
        <h2 className="mb-4">Popular Movies</h2>

        <div className="row row-cols-1 row-cols-md-2 g-4 cards-container">
          {movieList.map((movie) => (
            <>
              <div className="col-md-2 d-flex" key={movie.id}>
                <div className="card movie-card">
                  <FontAwesomeIcon icon={faEllipsis} className="details-icon" />
                  <img
                    src={
                      `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                    }
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <span className="film-rate">{Math.ceil(movie.vote_average)}</span>
                    <h5 className="card-title mt-3 mb-2">{movie.title}</h5>
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
            </>
          ))}
          ;
        </div>
      </div>
    </>
  );
};

export default MovieList;
