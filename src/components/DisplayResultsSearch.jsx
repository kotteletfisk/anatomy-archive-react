import { Link } from "react-router-dom";

function DisplayResultsSearch({ data, entity }) {

  return (
    <div>
      {data.map((item) => (
        <div className="card" key={item.id}>
          <h3>{item.name}</h3>
          <Link to={`/${entity}/${item.id}`}>
            <button>View</button>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default DisplayResultsSearch;
