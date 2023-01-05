import { useState } from "react";
import classes from "./Note.module.css"

function AddNote ({saveChange}) {

    const [noteText, setNoteText] = useState ("")
    const characterLimit = 200
    const textArea = document.getElementsByClassName("newInputField")[0]

    function changeHandler (e) {
        if (e.target.value.trim().length <= characterLimit) {
            setNoteText(e.target.value)
        } else {
            textArea.disabled = true           
        }
    }

    function saveChangeHandler () {
        if (noteText.trim().length > 0) {
            saveChange(noteText.trim());
            setNoteText("");
        }
        textArea.placeholder = "type to add a note...";
        textArea.value = "";
    }

    return (
        <div className={`${classes.note} ${classes.new}`}>
            <textarea
                onChange={changeHandler}
                rows={8}
                cols={10}
                placeholder="type to add a note..."
                className="newInputField"
            />
            <div className={classes.noteFooter}>
                <small>{characterLimit - noteText.trim().length} Remaining</small>
                <button className={classes.save} onClick={saveChangeHandler}>Save</button>
            </div>
        </div>
    )
}

export default AddNote;

