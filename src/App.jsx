import React from "react";
import NoteForm from "./components/NoteForm";
import NoteList from "./components/NoteList";
import { useState } from "react";

export default function App() {
  const [notes, setNotes] = useState([]);

  const handleDeleteNote = (noteId) => {
    if (window.confirm("Are you sure you want to delete this note?")) {
      setNotes(notes.filter(note => note.id !== noteId));
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-gray-100 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">📝 Notes App</h2>

      <NoteForm notes={notes} setNotes={setNotes} />
      
      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-4">Your Notes</h3>
        <NoteList notes={notes} onDelete={handleDeleteNote} />
      </div>
    </div>
  );
}
