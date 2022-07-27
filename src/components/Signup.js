import React,{useState} from 'react'
import {useHistory} from 'react-router-dom'
const Signup = (props) => {
    const [Credentials, setCredentials] = useState({name:"",email:"",password:"",cpassword:""})
  let history=useHistory();
  const handlesubmit=async(e)=>
  {
    e.preventDefault();
    const{name,email,password}=Credentials;
    const response = await fetch("http://localhost:5000/api/auth/createuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({name,email,password})
    });
    const json= await response.json();
    
// if(json.success)
// {
  localStorage.setItem('token',json.authtoken);
  history.push("/");
  console.log(json);
  props.showalert("logged in successfuly","success")
// else{
//   alert("already exist");
// }
      }
   const onChange=(e)=>
   {
     setCredentials({...Credentials,[e.target.name]:e.target.value})
   }
    return (
        <div className="container">
            <form onSubmit={handlesubmit}>
  <div className="mb-3">
    <label htmlFor="name" className="form-label">Name</label>
    <input type="name" className="form-control" id="name" onChange={onChange} name="name" aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <label htmlFor="email" className="form-label">Email address</label>
    <input type="email" className="form-control" id="email" onChange={onChange} name="email" aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <label htmlFor="password" className="form-label">password</label>
    <input type="password" className="form-control" id="password" onChange={onChange} name="password" aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <label htmlFor="cpassword" className="form-label">confirm password</label>
    <input type="password" className="form-control" id="cpassword" onChange={onChange} name="cpassword" aria-describedby="emailHelp"/>
  </div>
  
  
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
        </div>
    )
}

export default Signup
