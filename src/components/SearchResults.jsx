import DisplayResultsSearch from "./DisplayResultsSearch";

function SearchResults({ results }) {
  /* results = []; */

  return (
    <div className="container">
      <h3>Results</h3>

      {results.length === 0 ? (
        <p>No results . . .</p>
      ) : (
        <DisplayResultsSearch data={results} />
      )}
    </div>
  );
}

export default SearchResults;
