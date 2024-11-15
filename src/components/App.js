import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import { user } from "../data/data"; // Assuming data is imported from data.js

function App() {
  return (
    <div>
      <NavBar />
      <Home name={user.name} city={user.city} />
      <About bio={user.bio} github={user.github} linkedin={user.linkedin} />
    </div>
  );
}

export default App;
