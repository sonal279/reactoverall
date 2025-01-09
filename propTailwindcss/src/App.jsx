import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./Components/Card";

function App() {
  const [count, setCount] = useState(0);
  let productName = "Book";
  return (
    <>
      <h1>chai and code</h1>
      <Card ProductName={productName} />
      <Card ProductName="Bags" Price="500" />
    </>
  );
}

export default App;
