import "./App.css"
import { useEffect, useState } from "react";
import { nanoid } from "nanoid"
import NotesList from "./components/NotesList";
import Search from "./components/Search";
import Header from "./components/Header";

function App() {

  const LOCAL_KEY = "react-notes-app-data"
  const [darkMode, setDarkMode] = useState (true)
  const [searching, setSearching] = useState (false)
  const [searchItem, setSearchItem] = useState ({})
  const [item, setItem] = useState ([
    {
      id : nanoid(),
      text : "hello there,\nI am priyansh, a developer, designer and a problem solver.",
      date : "3/1/23"
    },
    {
      id : nanoid(),
      text : "This is a practice notes app created by me",
      date : "3/1/23"   
    },
    {
      id : nanoid(),
      text : "my github id is @itsspriyansh",
      date : "3/1/23"
    }, 
    {
      id : nanoid(),
      text : "Thank You\n : -)",
      date : "3/1/23"
    }
  ])

  useEffect (() => {
    const savedNotes = JSON.parse (
      localStorage.getItem(LOCAL_KEY)
    )
    if (savedNotes) {
      setItem (savedNotes)
    }
  }, [])

  useEffect (() => {
    localStorage.setItem (
      LOCAL_KEY,
      JSON.stringify(item)
    )
  }, [item])

  function deleteHandler (id) {
    let newNotes = []
    item.map (note => {
      if (note.id !== id) {
        newNotes.push (note)
      }
    })
    setItem (newNotes)
  }

  function saveChange (text) {

    const date = new Date()
    const note = {
      id : nanoid(),
      text : text,
      date : date.toLocaleDateString(),
    }
    const newNotes = [...item, note]
    setItem (newNotes)
  }

  function searchHandler (input) {
    let newNotes = []
    item.map (note => {
      if (note.text.includes(input)) {
        newNotes.push(note)
      }
    })
    setSearchItem (newNotes)
  }

  function searchState (input) {
    setSearching(input)
  }


  return (
    <div className={darkMode ? "darkMode" : null}>
      <Header />
      <Search searchHandler={searchHandler} searchState={searchState} />
      <NotesList 
        notes={searching ? searchItem : item} 
        saveChange={saveChange} 
        deleteHandler={deleteHandler} 
        searching={searching}
      />
    </div>
  );
}

export default App;

