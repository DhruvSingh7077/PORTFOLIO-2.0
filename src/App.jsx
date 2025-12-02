import React from "react";
import gsap from "gsap";
import { Navbar, Welcome, Dock } from "#components";
import { Draggable } from "gsap/Draggable";
import { Terminal } from "#windows/index.js";
import { Safari } from "#windows/index.js";
import { Resume } from "#windows/index.js";
gsap.registerPlugin(Draggable);
const App = () => {
  return (
    <main>
      <Navbar />
      <Welcome />
      <Dock />

      <Terminal />
      <Resume />
      <Safari />
    </main>
  );
};

export default App;
