import { faBan, faHeart, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import { removeMovie } from "../Store/Slices/Counter";
import { useNavigate } from "react-router-dom";

const WatchList = () => {
  const navigate = useNavigate();
  const watchList = useSelector((state) => state.counter.watchList);
  const current = useSelector((state) => state.counter.current_value);
  const dispatch = useDispatch();
  // const watchlistMoviesArr = Object.values(watchList);
  const deletemovie = (id) => {
    dispatch(removeMovie(watchList[id]));
  };
  const handleNavigate = (id) => {
    navigate(`/`);
  };

  return (
    <>
      <h2 className="text-start mt-3">Watch list</h2>
      <div className="watchList-content mt-4 container">
        <div className="row h-100 justify-content-center gap-5">
          {current ? (
            Object.values(watchList).map((movie) => (
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
            ))
          ) : (
            <div className="mg-5" style={{ width: "50vw" }}>
              <FontAwesomeIcon
                icon={faBan}
                flip
                size="2xl"
                style={{ color: "#FFE353", width: "250px", height: "250px" }}
              />
              <p className="my-5" style={{ fontSize: "30px" }}>
                No Movies in watch list
              </p>
              <button
                onClick={handleNavigate}
                style={{
                  backgroundColor: "#FFE353",
                  width: "40%",
                }}
                className="btn  "
              >
                Back to home
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default WatchList;
