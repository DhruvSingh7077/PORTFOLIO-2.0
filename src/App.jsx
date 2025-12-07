import React from "react";
import gsap from "gsap";
import { Navbar, Welcome, Dock, Home } from "#components";
import { Draggable } from "gsap/Draggable";
import { Photos, Terminal } from "#windows/index.js";
import { Safari } from "#windows/index.js";
import { Resume } from "#windows/index.js";
import { Finder, Text, Image, Contact } from "#windows/index.js";
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
      <Finder />
      <Text />
      <Image />
      <Contact />
      <Home />
      <Photos />
    </main>
  );
};

export default App;
