import { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";
import { fetchData } from "../util/persistence";

function Search() {
    // Master component for search page.
    // controls state of search bar and search results
    const [active, setActive] = useState("");
    const [results, setResults] = useState([]);
    const API_URL = "http://127.0.0.1:3000/exercise";

    useEffect(() => {
        // Update results when active changes
        fetchData(`${API_URL}`, (data) => setResults(data), "GET");
    }, [active]);

    return ( 
        <div className="container">
            <SearchBar active={active} setActive={setActive}/>
            <SearchResults results={results}/>
        </div>
     );
}

export default Search;