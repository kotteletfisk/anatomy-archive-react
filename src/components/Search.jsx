import { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";
import { crud } from "../util/facade";

function Search() {
    // Master component for search page.
    // controls state of search bar and search results
    const [active, setActive] = useState("byName");
    const [results, setResults] = useState([]);
    const [searchInput, setSearchInput] = useState("");
    const API_URL = "http://127.0.0.1:7070/search/exercise";
    const MOCK_URL = "http://127.0.0.1:3000/exercise";

    useEffect(() => {
        // Update results when active changes
        //let url = `${API_URL}/${active}?pattern=${searchInput}`; // remove comment to use API
         let url = MOCK_URL;
        if (searchInput === "") {
            setResults([]);
            return;
        }
        crud.fetchData(url, (data) => setResults(data), "GET");
    }, [active, searchInput]);

    return ( 
        <div className="container">
            <SearchBar active={active} setActive={setActive} setSearchInput={setSearchInput}/>
            <SearchResults results={results}/>
        </div>
     );
}

export default Search;