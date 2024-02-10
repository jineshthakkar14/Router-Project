import "./App.css";
import { Navbar } from "./components/Navbar";
import {About} from "./pages/About"
import {Home} from "./pages/Home"
import {Contact} from "./pages/Contact"
import { Route,Routes } from "react-router-dom";
import { useState } from "react";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";
import { Dashboard } from "./pages/Dashboard";
import { PrivateRoute } from "./components/PrivateRoute";

function App() {

  const [isloggedin,setLoggedin]=useState(false)

  return (
    <div className="w-screen h-screen bg-richblack-900 flex flex-col ">
      <Navbar isloggedin={isloggedin} setLoggedin={setLoggedin}></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/" element={<About></About>}></Route>
        <Route path="/" element={<Contact></Contact>}></Route>
        <Route path="/login" element={<Login setLoggedin={setLoggedin} isloggedin={isloggedin}></Login>} ></Route>
        <Route path="/signup" element={<Signup setLoggedin={setLoggedin} isloggedin={isloggedin}></Signup>}></Route>
        
          <Route path="/dashboard" element={
            <PrivateRoute isloggedin={isloggedin}>
              <Dashboard></Dashboard>
            </PrivateRoute>
          }></Route>


      </Routes>
    </div>
  );
}

export default App;
