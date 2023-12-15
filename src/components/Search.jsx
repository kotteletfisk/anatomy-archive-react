import { useEffect, useState } from "react";
import SearchBar from "./SearchBar";

function Search() {
    // Master component for search page.
    // controls state of search bar and search results
    const [active, setActive] = useState("");

    useEffect(() => {
        console.log(active);
    }, [active]);

    return ( 
        <div className="container">
            <SearchBar active={active} setActive={setActive}/>
        </div>
     );
}

export default Search;