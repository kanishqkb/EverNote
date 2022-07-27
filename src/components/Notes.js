import React,{useContext, useEffect,useRef} from 'react'
import notescontext from "../context/notecontext"
import { AddNote } from './AddNote'
import {Notesitem} from "./Notesitem"
import { useHistory } from 'react-router-dom'

export const Notes = (props) => {
   const history=useHistory();
    const context = useContext(notescontext)
    const{notes,getNotes}=context;
    useEffect(() => {
     if(localStorage.getItem('token')){ 
      getNotes();}
      else{history.push("/login")}
       // eslint-disable-next-line 
    }, [])
    const ref = useRef(null);
    
    const updateNote=(note)=>
    {
        ref.current.click();
    }
    return (
        <>
        <AddNote/>
        {/* <button type="button" ref={ref} className="btn btn-primary" data-toggle="modal" data-target="#exampleModalLong">
  Launch demo modal
</button> */}
<div className="modal fade" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLongTitle">Modal title</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
    
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>


        <div className="container">
            <h1>Your Notes</h1>
            <div className="row">
         {notes.map((note)=>{
             
             return <Notesitem   showalert={props.showalert}    key={note._id} updateNote={updateNote} note={note}/> ;
             
         })}
         </div>
        </div>
        </>
    )
}
