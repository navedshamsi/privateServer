import React from "react"
import './App.css';
import Login from "./login/Login"
import {BrowserRouter,Route,Link} from "react-router-dom"
function App() {
  return (
   

  <BrowserRouter>
  <Route path="/" exact component={()=>
  <div className="homePage" >
  <Link to="/login"><button >Login</button> </Link></div>
   } />
  <Route path="/login" component={Login} />
  </BrowserRouter>
  )
}

export default App;
