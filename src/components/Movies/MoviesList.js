import "./MoviesList.css";

import { useEffect, useState } from "react";
import axios from "axios";
import MovieCard from "./MoviedCard";
import Pagenation from "../Pagenation/Pagenation";
import Search from "../SearchSection/SearchSection";
import { useNavigate } from "react-router-dom";

const MovieList = () => {
  const navigate = useNavigate();
  const [movieList, setMovieList] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(1);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=67b4b2f72966fb7844cde967d3967510&page=${currentIndex}`
      )
      .then((response) => {
        setMovieList(response.data.results.slice(0, 12));
        document.querySelector(`#movieStartSection`).scrollIntoView();
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [currentIndex]);

  const handleNavigation = (id) => {
    navigate(`/movie-details/${id}`);
  };

  return (
    <>
      <Search />
      <div id="movieStartSection" className="game-list-heading mx-4 text-start">
        <h2 className="mb-4">Popular Movies</h2>

        <div className="row row-cols-1 row-cols-md-2 g-4 cards-container mb-5">
          {movieList.map((movie) => (
            <div className="col-md-2 d-flex" key={movie.id}>
              <MovieCard
                movie={movie}
                handleNavigation={(id) => handleNavigation(id)}
              />
            </div>
          ))}
        </div>
        <Pagenation
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
        />
      </div>
    </>
  );
};

export default MovieList;
