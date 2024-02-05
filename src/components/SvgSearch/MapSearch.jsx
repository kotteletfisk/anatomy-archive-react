import SvgComponent from "./SvgComponent";
import SearchResults from "../SearchResults";
import { useState } from "react";
import { useEffect } from "react";
import { crud } from "../../util/facade";

function MapSearch() {
  const [selected, setSelected] = useState(null);
  const [oldStyle, setOldStyle] = useState(null);
  const [results, setResults] = useState([]);
  const entity = "exercise";

  function handleClick(e) {
    if (!e.target.id.includes("path") && !e.target.id.includes("outline")) {
      if (selected !== null && selected !== e.target && oldStyle !== null) {
        selected.style.fill = oldStyle;
      }
      setOldStyle(e.target.style.fill);
      setSelected(e.target);
    }
  }

  useEffect(() => {
    if (selected !== null) {
      selected.style.fill = "red";

      const API_URL = `${crud.APIURL}/search`;
      const searchInput = selected.id;
      // Update results when active changes
      let url = `${API_URL}/${entity}/bymuscle?pattern=${searchInput}`; // remove comment to use API
      if (searchInput === "") {
        setResults([]);
        return;
      }
      crud.fetchData(url, (data) => setResults(data), "GET");
    }
  }, [selected]);

  return (
    <div className="container-flex">
      <div className="map-container">
        <SvgComponent handleClick={handleClick} />
      </div>
      <SearchResults results={results} entity={entity} />
    </div>
  );
}

export default MapSearch;
