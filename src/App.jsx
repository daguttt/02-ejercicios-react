import React from "react";
import CrudApi from "./components/CrudApi";
import CrudApp from "./components/CrudApp";

function App() {
  return (
    <div className="App container">
      <h1 className="title is-1 has-text-centered">02 Ejercicios React</h1>
      <section className="section">
        <CrudApi />
      </section>
      <section className="section">
        <CrudApp />
      </section>
    </div>
  );
}

export default App;
