import React,{useContext} from "react";
import notescontext from "../context/notecontext"

export const Notesitem = (props) => {
  const context = useContext(notescontext)
  const{deleteNote}=context;

  const { note ,updateNote} = props;
  return (
    <div className="col-4">
      <div className="card">
        <div className="card-body">
            <div className="d-flex align-items-center">
          <h5 className="card-title">{note.title}</h5>
          <button className="btn-primary" my-3 onClick={()=>{deleteNote(note._id);props.showalert("Deleted successfuly","success");}}>delete</button>
          {/* <i className="fas fa-trash-alt mx-2" onClick={()=>{deleteNote(note._id);props.showalert("Deleted successfuly","success");}}></i>
          <i className="fas fa-user-edit mx-2" onClick={()=>{updateNote(note)}}></i> */}
          </div>
          <p className="card-text">
            {note.description} 
            </p>
          
        </div>
      </div>
    </div>
  );
};
