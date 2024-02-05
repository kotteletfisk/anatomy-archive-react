import { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";
import { crud } from "../util/facade";

function RelationSearch() {
    // Master component for search page.
    // controls state of search bar and search results
    const [active, setActive] = useState("byexercise");
    const [entity, setEntity] = useState("exercise");
    const [results, setResults] = useState([]);
    const [searchInput, setSearchInput] = useState("");

//https://baseurl/search/muscle/byName?pattern=seachInput
//https://baseurl/search/equipment/byMuscle?pattern=seachInput = biceps = pull up bar

    const API_URL = `${crud.APIURL}/search`;

    useEffect(() => {
        // Update results when active changes
        let url = `${API_URL}/${entity}/${active}?pattern=${searchInput}`; // remove comment to use API
            if (searchInput === "") {
            setResults([]);
            return;
        }
        crud.fetchData(url, (data) => setResults(data), "GET");
    }, [active, searchInput, entity]);

    return ( 
        <div className="container">
            <SearchBar active={active} setEntity={setEntity} setActive={setActive} setSearchInput={setSearchInput}/>
            <SearchResults results={results} entity={entity}/>
        </div>
     );
}

export default RelationSearch;