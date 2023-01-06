import classes from "./Header.module.css"

function Header (props) {
    return (
        <center>
        <div className={classes.container}>
            <span className={classes.title}>Notes</span>
            <button>Dark Mode</button>
        </div>
        </center>
    )
}

export default Header;

