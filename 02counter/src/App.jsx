import React from "react";

function App() {
  let counter = 15;

  const addValue = () => {
    counter = counter + 1;
    console.log("clicked", counter);
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
