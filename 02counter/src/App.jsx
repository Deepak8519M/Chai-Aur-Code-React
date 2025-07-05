import React, { useState } from "react";

function App() {
  let [counter, setCounter] = useState(15);

  const addValue = () => {
    console.log("clicked", counter);

    setCounter(counter + 1);
  };

  return (
    <div>
      <h1>Chai Aur React</h1>
      <h2>Counter value : {counter}</h2>

      <div className="btn">
        <button onClick={addValue}>Add Value {counter}</button>
        <button>Remove Value {counter}</button>
      </div>
    </div>
  );
}

export default App;
