import React from "react";
import Comp1 from "./components/Comp1";
import AddLanguage from "./components/AddLanguage";
import LanguageGrid from "./components/LanguageGrid";
import "./index.css";
import "./styles/style.scss";

function App() {
  return (
    <div className="app-container p-6">
      <h1 className="text-2xl font-bold mb-4 text-center">React Language App</h1>
      <Comp1 />
      <AddLanguage />
      <LanguageGrid />
    </div>
  );
}

export default App;
