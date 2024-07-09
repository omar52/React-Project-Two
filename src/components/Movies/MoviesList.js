import "./MoviesList.css";

import { useEffect, useState } from "react";
import axios from "axios";
import MovieCard from "./MoviedCard";
import Pagenation from "../Pagenation/Pagenation";

const MovieList = () => {
  const [movieList, setMovieList] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(1);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=67b4b2f72966fb7844cde967d3967510&page=${currentIndex}`
      )
      .then((response) => {
        setMovieList(response.data.results.slice(0, 12));
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [movieList, currentIndex]);



  // const handlePreviousClick = () => {
  //   console.log(currentIndex);
  //   if (currentIndex >= 2) {
  //     console.log(currentIndex);
  //     axios
  //       .get(
  //         `https://api.themoviedb.org/3/movie/popular?api_key=67b4b2f72966fb7844cde967d3967510&page=${currentIndex}`
  //       )
  //       .then((response) => {
  //         setMovieList(response.data.results.slice(0, 12));
  //       })
  //       .catch(function (error) {
  //         console.log(error);
  //       });
  //   }
  // };

  // const handleNextClick = () => {
  //   console.log(currentIndex);
  //   if (currentIndex <= 4) {
  //     currentIndex += 1;
  //     console.log(currentIndex);

  //     axios
  //       .get(
  //         `https://api.themoviedb.org/3/movie/popular?api_key=67b4b2f72966fb7844cde967d3967510&page=${currentIndex}`
  //       )
  //       .then((response) => {
  //         setMovieList(response.data.results.slice(0, 12));
  //       })
  //       .catch(function (error) {
  //         console.log(error);
  //       });
  //   }
  // };
  return (
    <>
      <div className="game-list-heading ms-5 mt- text-start">
        <h2 className="mb-4">Popular Movies</h2>

        <div className="row row-cols-1 row-cols-md-2 g-4 cards-container mb-5">
          {movieList.map((movie) => (
            <div className="col-md-2 d-flex" key={movie.id}>
              <MovieCard movie={movie} />
            </div>
          ))}
        </div>
        <Pagenation
          currentIndex={currentIndex}
          setCurrentIndex = {setCurrentIndex}
          // handlePreviousClick={() => handlePreviousClick()}
          // handleNextClick={handleNextClick}
        />
      </div>
    </>
  );
};

export default MovieList;
