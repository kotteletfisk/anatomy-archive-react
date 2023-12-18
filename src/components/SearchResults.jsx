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
    <div className="container">
      <h3>Results</h3>

      {results.length === 0 ? (
        <div>
          <p>No results {loadDots}</p>
        </div>
      ) : (
        <DisplayResultsSearch data={results} />
      )}
    </div>
  );
}

export default SearchResults;
