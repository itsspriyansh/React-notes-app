import AddNote from "./AddNote";
import Note from "./Note"
import classes from "./NotesList.module.css"

function NotesList ({notes, saveChange, deleteHandler, searching}) {

    return (
        <div className={classes.container}>
            <div className={classes.notesList}>
                {notes.map(item => {
                   return <Note key={item.id} id={item.id} text={item.text} date={item.date} deleteHandler={deleteHandler} />
                })}
                {searching ? null : <AddNote saveChange={saveChange} />}
            </div>
        </div>
    )
}

export default NotesList;

