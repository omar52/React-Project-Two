import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MovieDetails = () => {
  const params = useParams();
  const [movietDetails, setMovieDetails] = useState({});

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
  }, [params.id]);
  return (
    <div>
      <h2>{movietDetails.title}</h2>
    </div>
  );
};

export default MovieDetails;
