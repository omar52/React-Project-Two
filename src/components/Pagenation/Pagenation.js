import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import "./Pagenation.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

function Pagenation({ currentIndex, setCurrentIndex }) {
  const navigate = useNavigate();
  const handlePreviousClick = () => {
    if (currentIndex > 1) {
      setCurrentIndex((currentIndex = currentIndex - 1));
    }
  };

  const handleNextClick = () => {
    if (currentIndex < 5) {
      setCurrentIndex((currentIndex = currentIndex + 1));
    }
  };

  return (
    <div className="pagenation my-5">
      <ul className="pagenator">
        <li>
          <button
            className={currentIndex === 1 ? "disabled" : ""}
            onClick={() => handlePreviousClick()}
          >
            <FontAwesomeIcon icon={faCaretLeft} />
          </button>
        </li>
        <li>
          <button
            className={currentIndex === 1 ? "active" : ""}
            onClick={() => {
              setCurrentIndex(1);
              navigate("#movieStartSection");
            }}
          >
            1
          </button>
        </li>
        <li>
          <button
            className={currentIndex === 2 ? "active" : ""}
            onClick={() => setCurrentIndex(2)}
          >
            2
          </button>
        </li>
        <li>
          <button
            className={currentIndex === 3 ? "active" : ""}
            onClick={() => setCurrentIndex(3)}
          >
            3
          </button>
        </li>
        <li>
          <button
            className={currentIndex === 4 ? "active" : ""}
            onClick={() => setCurrentIndex(4)}
          >
            4
          </button>
        </li>
        <li>
          <button
            className={currentIndex === 5 ? "active" : ""}
            onClick={() => setCurrentIndex(5)}
          >
            5
          </button>
        </li>
        <li>
          <button
            className={currentIndex === 5 ? "disabled" : ""}
            onClick={() => handleNextClick()}
          >
            <FontAwesomeIcon icon={faCaretRight} />
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Pagenation;
