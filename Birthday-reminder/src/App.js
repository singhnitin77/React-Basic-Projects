import React, { useState } from "react";
import data from "./data";
import List from "./List";
function App() {
  const [people, setPeople] = useState(data);
  return (
    <main>
      <section className="container">
        <h3>0 birthdays today</h3>
        <List people={people} />
        <button onClick={() => setPeople([])}>clear all</button>{" "}
        {/* Passing empty array as new value for clearing the data */}
      </section>
    </main>
  );
}

export default App;
