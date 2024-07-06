import React from "react";
import {Routes, Route } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import  "bootstrap/dist/js/bootstrap.min.js";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Services from "./Components/Services";
import Contact from "./Components/Contact";
import About from "./Components/About";
import Signin from "./Components/Signin";
import Signup from "./Components/Signup";
import Additem from "./Components/Additem";
import Available from "./Components/Available";
import Aboutuser from "./Components/Aboutuser";
import Logout from "./Components/Logout";
import Error from "./Components/Error";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route exact path="/" Component={Home}></Route>
        <Route exact path="/about" Component={About}></Route>
        <Route exact path="/contact" Component={Contact}></Route>
        <Route exact path="/services" Component={Services}></Route>
        <Route exact path="/signin" Component={Signin}></Route>
        <Route exact path="/signup" Component={Signup}></Route>
        <Route exact path="/additem" Component={Additem}></Route>
        <Route exact path="/profile" Component={Aboutuser}></Route>
        <Route exact path="/logout" Component={Logout}></Route>

        <Route exact path="/services/engineeringgoods" Component={()=>{return <Available key={1} heading={'Engineering Goods'}/>}}></Route>
        <Route exact path="/services/electronics" Component={()=>{return <Available key={2} heading={'Electronics'}/>}}></Route>
        <Route exact path="/services/fecrelated" Component={()=>{return <Available key={3} heading={'Fec Related'}/>}}></Route>
        <Route exact path="/services/miscellaneous" Component={()=>{return <Available key={4} heading={'Miscellaneous'}/>}}></Route>
        <Route exact path="/myitems" Component={()=>{return <Available key={5} heading={'My Items'}/>}}></Route>        




        <Route exact path="*" Component={Error}></Route>

      </Routes>
      <Footer/>
    </>
  );
};
export default App;
