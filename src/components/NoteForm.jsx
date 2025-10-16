import React from "react";
import { useState, useEffect } from "react";
import { TextInput, SelectInput, TextAreaInput } from "./inputs";

function NoteForm({ notes, setNotes, editingNote, onUpdateNote, onCancelEdit }) {
  const [formData, setFormData] = useState({
    title: "",
    priority: "Medium",
    category: "Work",
    description: ""
  });

  const [isFormVisible, setIsFormVisible] = useState(true);

  useEffect(() => {
    if (editingNote) {
      setFormData({
        title: editingNote.title,
        priority: editingNote.priority,
        category: editingNote.category,
        description: editingNote.description
      });
      setIsFormVisible(true); 
    } else {
      setFormData({
        title: "",
        priority: "Medium",
        category: "Work",
        description: ""
      });
    }
  }, [editingNote]);

  const priorityOptions = [
    { value: "High", label: "🔴 High" },
    { value: "Medium", label: "🟠 Medium" },
    { value: "Low", label: "🟢 Low" }
  ];

  const categoryOptions = [
    { value: "Work", label: "💼 Work" },
    { value: "Personal", label: "🏠 Personal" },
    { value: "Ideas", label: "💡 Ideas" }
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.title.trim()) {
      alert("Please enter a title for your note");
      return;
    }

    if (!formData.description.trim()) {
      alert("Please enter a description for your note");
      return;
    }
    
    if (editingNote) {
      const updatedNote = {
        ...editingNote,
        ...formData,
        updatedAt: new Date().toISOString()
      };
      onUpdateNote(updatedNote);
      alert("Note updated successfully!");
    } else {
      const newNote = {
        id: Date.now(),
        ...formData,
        createdAt: new Date().toISOString()
      };
      setNotes([newNote, ...notes]);
      alert("Note added successfully!");
    }
    
    setFormData({
      title: "",
      priority: "Medium",
      category: "Work",
      description: ""
    });
  };

  return (
    <div>
      <div className="flex gap-2 mb-4">
        <button
          type="button"
          onClick={() => setIsFormVisible(!isFormVisible)}
          className="flex-1 bg-gray-500 text-white py-2 rounded-lg cursor-pointer hover:bg-gray-600"
        >
          {isFormVisible ? "Hide Form" : "Show Form"}
        </button>
        {editingNote && (
          <button
            type="button"
            onClick={onCancelEdit}
            className="px-4 bg-red-500 text-white py-2 rounded-lg cursor-pointer hover:bg-red-600"
          >
            Cancel Edit
          </button>
        )}
      </div>
      
      {isFormVisible && (
        <form className="mb-6" onSubmit={handleSubmit}>
          <TextInput
            label="Title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required={true}
            placeholder="Enter note title"
          />
          
          <SelectInput
            label="Priority"
            name="priority"
            value={formData.priority}
            onChange={handleChange}
            options={priorityOptions}
            required={true}
          />
          
          <SelectInput
            label="Category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            options={categoryOptions}
            required={true}
          />
          
          <TextAreaInput
            label="Description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required={true}
            placeholder="Enter note description"
            rows={4}
          />
      <button 
        type="submit"
        className="w-full bg-purple-500 text-white py-2 rounded-lg cursor-pointer hover:bg-purple-600"
      >
        {editingNote ? "Update Note" : "Add Note"}
      </button>
        </form>
      )}
    </div>
  );
}

export default NoteForm;
