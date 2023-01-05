import { MdDeleteForever } from "react-icons/md"
import classes from "./Note.module.css"

function Note (props) {

    function deleteClickHandler () {
        props.deleteHandler(props.id)
    }
 
    return (
        <div className={classes.note}>
            <span>{props.text}</span>
            <div className={classes.noteFooter}>
                <small>{props.date}</small>
                <MdDeleteForever className={classes.deleteIcon} size="1.3em" onClick={deleteClickHandler} />
            </div>
        </div>
    )
}

export default Note;

