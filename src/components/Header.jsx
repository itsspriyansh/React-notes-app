import classes from "./Header.module.css"

function Header (props) {

    function darkModeClickHandler () {
        props.toggleDarkMode((previous) => !previous)
    }

    return (
        <center>
        <div className={classes.container}>
            <span className={classes.title}>Notes</span>
            <button onClick={darkModeClickHandler} id="darkModeButton">Dark Mode</button>
        </div>
        </center>
    )
}

export default Header;

