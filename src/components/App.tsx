import React, { useState, useEffect, useContext } from "react";
import GlobalStyle from "../utilities/GlobalStyle";
// import Navbar from "./Navbar";
// import Home from "../pages/Home";
// import Gallery from "../pages/Gallery";
// import About from "../pages/About";
// import Notes from "../pages/Notes";
// import Summon from "../pages/Summon";
// import Library from "../pages/Library";
// import Signup from "../pages/Signup";
// import Login from "../pages/login";
import { BrowserRouter as Router, Routes ,Route } from "react-router-dom";
import { AuthContext, UserActionsKind } from "../context/AuthContext";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const context = useContext(AuthContext);
  const handleLogout = () => {
    setIsLoggedIn(false);
console.log('loggingout')
context.dispatch({type: UserActionsKind.LOGOUT, payload: null} )
  };
  useEffect(()=>{
    if(context.user !== null){
      setIsLoggedIn(true)
    }
  },[context.user])
  
  return (
    <Router>
      <GlobalStyle />
      {/* <Navbar isLoggedIn={isLoggedIn} handleLogout={handleLogout} /> */}
      <Routes>
        {/* <Route path="/"  element={<Home/>}/> */}
        {/* <Route path="/gallery" element={<Gallery/>} />
        <Route path="/summon" element={<Summon/>}/>
        <Route path="/library" element={<Library/>} />
        <Route path="/about" element={<About/>} >
        <Route path="/notes" element={<Notes/>} >
        <Route path="/signup" element={<Signup />} >
        <Route path="/login" element={<Login />} > */}
        {/* <Route path="*" element={<PageNotFound/>}/> */}
      </Routes>
    </Router>
  );
};

export default App;
