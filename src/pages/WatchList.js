import { faHeart, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import { removeMovie } from "../Store/Slices/Counter";

const WatchList = () => {
  
  const watchList = useSelector((state) => state.counter.watchList);
  const dispatch = useDispatch();
  // const watchlistMoviesArr = Object.values(watchList);
  const deletemovie = (id) => {
    dispatch(removeMovie(watchList[id]));
  };

  return (
    <>
      <h2 className="text-start mt-3">Watch list</h2>
      <div className="watchList-content mt-4 container">
        <div className="row h-100 justify-content-center gap-5">
          {Object.values(watchList).map((movie) => (
            <div
              className="shadow col-xl-5 col-10 d-flex justify-content-around p-3 rounded-4"
              style={{ height: "350px", overflow: "hidden" }}
            >
              <img
                style={{ height: "100%", width: "194px" }}
                className="text-start p-2 col-auto"
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt="alt"
              />
              <div
                className=" text-start content flex-1 col"
                style={{ height: "350px" }}
              >
                <div className="title d-flex align-items-center justify-content-between">
                  <h2 style={{ fontSize: "25px" }}>{movie.title}</h2>
                  <FontAwesomeIcon
                    onClick={() => deletemovie(movie.id)}
                    style={{
                      cursor: "pointer",
                      color: watchList[movie.id] ? "#FFE353" : "black",
                    }}
                    icon={faHeart}
                    size="2x"
                  />
                </div>
                <small>{movie.release_date}</small>
                <div className=" text-start mt-2  popularity">
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <span className="ms-3">({Math.round(5552.23)})</span>
                </div>
                <p
                  className="text-start text-muted mt-4 fs-5"
                  style={{ overflow: "hidden" }}
                >
                  {movie.overview}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default WatchList;
