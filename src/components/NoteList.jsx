import React from 'react'

function NoteList({ notes, onDelete, onEdit }) {
  if (notes.length === 0) {
    return (
      <p className='text-center text-gray-500'>
        No Notes Yet
      </p>
    );
  }

  return (
    <div className="space-y-4">
      {notes.map((note) => (
        <div key={note.id} className="bg-white p-4 rounded-lg shadow-md border">
          <div className="flex justify-between items-start mb-2">
            <h3 className="font-semibold text-lg">{note.title}</h3>
            <div className="flex items-center gap-2">
              <span className={`px-2 py-1 rounded-full text-xs ${
                note.priority === 'High' ? 'bg-red-100 text-red-800' :
                note.priority === 'Medium' ? 'bg-orange-100 text-orange-800' :
                'bg-green-100 text-green-800'
              }`}>
                {note.priority}
              </span>
              <button
                onClick={() => onEdit(note)}
                className="text-blue-500 hover:text-blue-700 hover:bg-blue-50 p-1 rounded transition-colors"
                title="Edit note"
              >
                ✏️
              </button>
              <button
                onClick={() => onDelete(note.id)}
                className="text-red-500 hover:text-red-700 hover:bg-red-50 p-1 rounded transition-colors"
                title="Delete note"
              >
                🗑️
              </button>
            </div>
          </div>
          <p className="text-gray-600 mb-2">{note.description}</p>
          <div className="flex justify-between items-center text-sm text-gray-500">
            <span>📁 {note.category}</span>
            <span>{new Date(note.createdAt).toLocaleDateString()}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default NoteList