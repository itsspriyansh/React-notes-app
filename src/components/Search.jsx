import { useState } from "react";
import classes from "./Search.module.css"

function Search ({searchHandler, searchState}) {

    const [searchText, setSearchText] = useState ("")

    function changeHandler (e) {
        setSearchText (e.target.value)
    }

    function searchClickHandler () {
        searchHandler(searchText)
        if (searchText === "") {
            searchState(false)
        } else {
            searchState(true)
        }
    }

    return (
        <>
        <input 
            placeholder="Search..." 
            onChange={changeHandler}
        />
        <button onClick={searchClickHandler}>search</button>
        </>
    )
}

export default Search;

