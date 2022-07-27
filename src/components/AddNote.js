import React,{useContext,useState} from 'react'
import notescontext from "../context/notecontext"

export const AddNote = () => {
    const context = useContext(notescontext)
    const{addNote}=context;
    const[note,setNote]=useState({title:"",description:"",tag:"default"})
    const handleClick=(e)=>
    {
        e.preventDefault();
        addNote(note.title,note.description,note.tag)
        setNote({title:"",description:"",tag:""})
    }
   
    const onChange=(e)=>
    {setNote({...note,[e.target.name]:e.target.value})}
    return (
        <div>
             <h1>Add a Note</h1>
        <form>
<div className="mb-3">
<label htmlFor="title" className="form-label">Title</label>
<input type="text" placeholder="Please enter some title" value={note.title} className="form-control" id="title" name="title" aria-describedby="emailHelp" onChange={onChange}/>
</div>
<div className="mb-3">
<label htmlFor="description" className="form-label">Description</label>
<input type="text" className="form-control" id="description" value={note.description} name="description" placeholder='Please enter some description'onChange={onChange}/>
</div>
<div className="mb-3">
<label htmlFor="tag" className="form-label">Tag</label>
<input type="text" className="form-control" id="tag" value={note.tag} name="tag" placeholder='Please enter some tag'onChange={onChange}/>
</div>

<button disabled={note.title.length<5 || note.description.length<5} type="submit" className="btn btn-primary" onClick={handleClick} >Add Note</button>
</form>
        </div>
    )
}
