import { useState } from "react";
import classes from "./Search.module.css"

function Search ({searchHandler, searchState}) {

    const [searchText, setSearchText] = useState ("")

    function changeHandler (e) {
        setSearchText (e.target.value)
        if (e.target.value === "") {
            searchState(false)
        } else {
            searchState(true)
            searchHandler(searchText)
        }
    }

    return (
        <input 
            placeholder="Search..." 
            onChange={changeHandler}
        />
    )
}

export default Search;

