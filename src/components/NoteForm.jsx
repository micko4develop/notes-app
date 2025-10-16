import React from "react";
import { useState } from "react";
import { TextInput, SelectInput, TextAreaInput } from "./inputs";

function NoteForm({ notes, setNotes }) {
  const [formData, setFormData] = useState({
    title: "",
    priority: "Medium",
    category: "Work",
    description: ""
  });

  const [isFormVisible, setIsFormVisible] = useState(true);

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
    
    const newNote = {
      id: Date.now(),
      ...formData,
      createdAt: new Date().toISOString()
    };

    setNotes([newNote, ...notes]);
    
    setFormData({
      title: "",
      priority: "Medium",
      category: "Work",
      description: ""
    });
    
    alert("Note added successfully!");
  };

  return (
    <div>
      <button
        type="button"
        onClick={() => setIsFormVisible(!isFormVisible)}
        className="w-full mb-4 bg-gray-500 text-white py-2 rounded-lg cursor-pointer hover:bg-gray-600"
      >
        {isFormVisible ? "Hide Form" : "Show Form"}
      </button>
      
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
        className="w-full bg-purple-500 text-white py-2 rounded-lg cursor-pointer hover: bg-purple-600"
      >
        Add Note
      </button>
        </form>
      )}
    </div>
  );
}

export default NoteForm;
