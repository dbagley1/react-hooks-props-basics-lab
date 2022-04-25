import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";

// pass this data down as props to the child component(s) that need it!
import user from "../data/user";
console.log(user);

function App() {
  const { color, city, name, bio, links } = { ...user };

  return (
    <div>
      <NavBar />
      <Home color={color} city={city} name={name} />
      <About bio={bio} links={links} />
    </div>
  );
}

export default App;
