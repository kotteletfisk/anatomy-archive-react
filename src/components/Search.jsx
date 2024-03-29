import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

function Search() {
  return (
    <div>
      <h1>Search</h1>

      <div className="row-container">
        <Link to="map">
          <button>Map</button>
        </Link>

        <Link to="relation">
          <button>Relation</button>
        </Link>
      </div>
      <Outlet />
    </div>
  );
}

export default Search;
