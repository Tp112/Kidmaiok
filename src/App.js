import { useState } from "react";
import "./App.css";
import Login from "./components/Login/Login";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={<Login/>}/>
          {/* <Route path="/home" element={<Home/>}/> */}
          <Route path="/home/:id" element={<Home/>} />
          <Route path="/" element={<Navigate replace to="/login" />} />
          {/* {userData.map((user) => (
            <Route key={user.id} path={`/user/${user.id}`} component={() => <UserPage user={user} />} />
          ))} */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
