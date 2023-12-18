import { useEffect, useState } from "react";
import DisplayResultsSearch from "./DisplayResultsSearch";

function SearchResults({ results }) {
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
      <h3 style={{ textAlign: "center" }}>Search Results</h3>

      {results.length === 0 ? (
        <div>
          <p style={{ textAlign: "center" }}>No results {loadDots}</p>
        </div>
      ) : (
        <DisplayResultsSearch data={results} />
      )}
    </div>
  );
}

export default SearchResults;
