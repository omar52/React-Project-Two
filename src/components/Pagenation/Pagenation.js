import Pagination from "react-bootstrap/Pagination";
import "./Pagenation.css";

function Pagenation() {
  return (
    <div className="pagenation">
      <Pagination >
        <Pagination.Prev className="ite" />
        <Pagination.Item className="ite" active>
          {1}
        </Pagination.Item>

        <Pagination.Item className="ite">{2}</Pagination.Item>
        <Pagination.Item className="ite">{3}</Pagination.Item>
        <Pagination.Item className="ite">{4}</Pagination.Item>
        <Pagination.Item className="ite">{5}</Pagination.Item>

        <Pagination.Ellipsis className="ite" />

        <Pagination.Next className="ite" />
      </Pagination>
    </div>
  );
}

export default Pagenation;
