import React from "react";
import Home from "./components/Homepage/Home";
import Add from "./components/create/Add";
import Edit from "./components/Updating/Edit";
import {Route,Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/create" element={<Add/>}/>
            <Route path="/edit" element={<Edit/>}/>
        </Routes>
     </div>
  );
}

export default App;
