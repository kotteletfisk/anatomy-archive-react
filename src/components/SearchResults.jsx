import { useEffect, useState } from "react";
import DisplayResultsSearch from "./DisplayResultsSearch";

function SearchResults({ results, entity }) {
  const [loadDots, setLoadDots] = useState("");

  useEffect(() => {
    if (loadDots.length < 7) {
      setTimeout(() => {
        setLoadDots(loadDots + " .");
      }, 1000);
    } else {
      setLoadDots("");
    }
  }, [loadDots]);

  return (
    <div className="container-search-output">
      {results.length === 0 ? (
        <div>
          <p style={{ textAlign: "center" }}>No results {loadDots}</p>
        </div>
      ) : (
        <DisplayResultsSearch data={results} entity={entity} />
      )}
    </div>
  );
}

export default SearchResults;
