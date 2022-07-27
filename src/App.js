import "./App.css";
// import { About } from "./components/About";
import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Notestate from "./context/Notestate";
import Alert  from "./components/Alert";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { useState } from "react";

function App() {
  const [alert, setalert] = useState(null)
  let showalert=(msg,typ)=>{
    setalert({
      mssge:msg,
      type:typ
    })
    setTimeout(()=>{setalert(null)},1000);
  }
  return (
    <>
      <Notestate>
        <Router>
          <Navbar />
          <Alert  alert={alert}/>
          <div className="container my-3">
            <Switch>
              <Route exact path="/">
                <Home showalert={showalert} />
              </Route>
              {/* <Route exact path="/about">
                <About />
              </Route> */}
              <Route exact path="/signup">
                <Signup showalert={showalert} />
              </Route>
              <Route exact path="/login">
                <Login showalert={showalert}  />
              </Route>
            </Switch>
          </div>
        </Router>
      </Notestate>
    </>
  );
}

export default App;
