import SvgComponent from "./SvgComponent";
import { useState } from "react";

function MapSearch() {

    const [selected, setSelected] = useState(null);
    const [prevStyle, setPrevStyle] = useState(null);

    function handleClick(e) {
        // e.target.style.fill = "red";
        alert(e.target.id);
    }

    return ( 
        <div className="container test">
            <SvgComponent handleClick={handleClick}/>
        </div>
     );
}

export default MapSearch;