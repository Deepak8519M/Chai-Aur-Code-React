import React, { useState } from "react";

function App() {
  let [counter, setCounter] = useState(15);

  const addValue = () => {
    if (counter < 20) {
      setCounter(counter + 1);
    }
  };

  const removeValue = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <div>
      <h1>Chai Aur React</h1>
      <h2>Counter value : {counter}</h2>

      <div className="btn">
        <button onClick={addValue}>Add Value {counter}</button>
        <button onClick={removeValue}>Remove Value {counter}</button>
      </div>
    </div>
  );
}

export default App;
