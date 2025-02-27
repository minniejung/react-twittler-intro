import React from "react";
import "./App.css";

import { Sidebar } from "./components/SideBar";
import { Features } from "./components/Features";

const App = () => {
  return (
    <div className="App">
      <main>
        <Sidebar />
        <Features />
      </main>
    </div>
  );
};

export default App;
