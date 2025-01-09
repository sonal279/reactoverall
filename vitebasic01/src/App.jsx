import { useState } from "react";
import Chai from "./chai";
function App() {
  let [Counter, setCounter] = useState(1);
  const addValue = () => {
    if (Counter >= 20) {
      setCounter(20);
    } else {
      setCounter(Counter + 1);
    }
  };
  const removeValue = () => {
    if (Counter <= 0) {
      setCounter(0);
    } else {
      setCounter(Counter - 1);
    }
  };
  return (
    <>
      <h1>hello my first vite program</h1>
      <Chai />
      <h3>Counter value:{Counter}</h3>
      <button onClick={addValue}>Add value</button>
      <br></br>
      <br />
      <button onClick={removeValue}> Remove value</button>
    </>
  );
}

export default App;
