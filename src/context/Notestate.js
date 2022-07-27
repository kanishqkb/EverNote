import notecontext from "./notecontext";
import { useState } from "react";
const Notestate = (props) => {
  const host = "http://localhost:5000";
  const note = [];
  const [notes, setnotes] = useState(note);
  //add a note

  const getNotes = async() => {
    const response = await fetch(`${host}/api/notes/fetch`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
                     localStorage.getItem('token')
      }
      
    });
    const json=await response.json();
    console.log(json);
   
     setnotes(json);
  };
  const addNote = async(title, description, tag) => {
    const response = await fetch(`${host}/api/notes/newfetch`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
                      localStorage.getItem('token')
      },
      body: JSON.stringify({title, description, tag}),
    });
    const note=await response.json();
    
    setnotes(notes.concat(note));
  };
  //delete a note
  const deleteNote = async(id) => {
    const response = await fetch(`${host}/api/notes/deletenotes/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token":  localStorage.getItem('token')
      }
      });
     response.json();
    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setnotes(newNotes);
  };
  //edit a note
  const editNote = async (id, title, description, tag) => {
    const response = await fetch(`${host}/api/notes/updatenotes/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjFiNjVmZjhlMzYzNDZkZmZlYzhhNWNmIn0sImlhdCI6MTYzOTM0MjA3Mn0.fTTezfXf7JhTCX06bvYDGOAABnYGj4-Ta-8xzS0y6X8" },
      body: JSON.stringify( {title, description, tag}),
    });
     response.json();
    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if (element._id === id) {
        element.title = title;
        element.description = description;
        element.tag = tag;
      }
    }
  };
  return (
    <notecontext.Provider value={{ notes,getNotes, addNote, deleteNote, editNote }}>
      {props.children}
    </notecontext.Provider>
  );
};

export default Notestate;
