import React,{useState} from 'react'
import { useHistory } from 'react-router-dom'

const Login = (props) => {
  const [Credentials, setCredentials] = useState({email:"",password:""})
  let history=useHistory();
  const handlesubmit=async(e)=>
  {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({email:Credentials.email,password:Credentials.password})
    });
    const json= await response.json();
    
if(json.success)
{
  localStorage.setItem('token',json.authtoken);
  history.push("/");
  console.log(json);
  props.showalert("logged in successfuly","success")
}
else{
  props.showalert("Invalid credentials","danger")
}
      }
   const onChange=(e)=>
   {
     setCredentials({...Credentials,[e.target.name]:e.target.value})
   }
    return (
        <div>
  <form onSubmit={handlesubmit}>
  <div className="form-group"    >
    <label htmlFor="email">Email address</label>
    <input type="email" className="form-control" id="email" value={Credentials.email} onChange={onChange} name="email" aria-describedby="emailHelp" placeholder="Enter email"/>
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group"    >
    <label htmlFor="password">Password</label>
    <input type="password" className="form-control" id="password" value={Credentials.password} onChange={onChange} name="password" aria-describedby="emailHelp" placeholder="Enter password"/>

  </div>
  
  <button type="submit" className="btn btn-primary my-2" >Submit</button>
</form>
 </div>
    )
}

export default Login
