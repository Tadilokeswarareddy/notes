import React, { useEffect, useState } from "react";
import axiosInstance from "../axiosinstance";

const Home = () => {
  const [notes, setNotes] = useState([]);
  const [note, setNote] = useState(""); 
  const [editingNote, setEditingNote] = useState(null);


  const getNotes = async () => {
    try {
      const res = await axiosInstance.get("/api/notes/");
      setNotes(res.data);
    } catch (error) {
      console.error("Error fetching notes:", error);
    }
  };

  useEffect(() => {
    getNotes();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingNote) {

        await axiosInstance.put(`/api/notes/${editingNote.id}/`, { note });
      } else {

        await axiosInstance.post("/api/notes/", { note });
      }
      setNote("");
      setEditingNote(null);
      getNotes();
    } catch (error) {
      console.error("Error saving note:", error.response?.data || error.message);
    }
  };


  const handleDelete = async (id) => {
    try {
      await axiosInstance.delete(`/api/notes/${id}/`);
      getNotes();
    } catch (error) {
      console.error("Error deleting note:", error);
    }
  };


  const handleEdit = (noteObj) => {
    setNote(noteObj.note);
    setEditingNote(noteObj);
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">My Notes</h1>


      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg p-4 mb-6 w-60 max-w-md flex gap-2 h-60 flex-col"
      >
        <input
          type="text"
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder="Enter your note..."
          className="flex-1 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
        >
          {editingNote ? "Update" : "Add"}
        </button>
      </form>


      <div className="w-full max-w-md space-y-3">
        {notes.length > 0 ? (
          notes.map((noteObj) => (
            <div
              key={noteObj.id}
              className="bg-white shadow-md rounded-lg p-4 flex justify-between items-center"
            >
              <span className="text-gray-700">{noteObj.note}</span>
              <div className="flex gap-2">
                <button
                  onClick={() => handleEdit(noteObj)}
                  className="bg-yellow-400 text-white px-3 py-1 rounded-lg hover:bg-yellow-500"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(noteObj.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600"
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-center">No notes found.</p>
        )}
      </div>
    </div>
  );
};

export default Home;
