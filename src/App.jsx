import { useEffect, useState } from "react";
import './App.css'
import Header from './components/Header';
import Body from './components/Body';
import { getInitialData } from './utils';

function App() {
  const [query, setQuery] = useState("");
  const [searchNotes, setSearchNotes] = useState([]);
  const [notes, setNotes] = useState(getInitialData());

  const notesAll = (searchNotes || notes).filter((note) => !note.archived);
  const notesArchive = (searchNotes || notes).filter((note) => note.archived);

  useEffect(() => {
    setSearchNotes(
      notes.filter((note) =>
        note.title.toLowerCase().includes(query.toLowerCase())
      )
    );
  }, [query, notes]);

  return (
    <div className="note-app">
      <Header search={query} setQuery={setQuery} />
      <Body
        notesAll={notesAll}
        notesArchive={notesArchive}
        setNotes={setNotes}
      />
    </div>
  )
}

export default App
