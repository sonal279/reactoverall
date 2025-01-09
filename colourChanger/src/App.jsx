import { useState } from "react";
import "./index.css";

function App() {
  const [color, setColor] = useState("White");
  return (
    <>
      <div
        className="flex items-center justify-center h-screen"
        style={{ backgroundColor: color }}
      >
        <nav className=" bg-violet-300 px-80 py-10 rounded-lg shadow-lg">
          <button
            className="bg-red-600 text-white p-2 rounded"
            onClick={() => setColor("Red")}
          >
            Red
          </button>
          <button
            className="bg-yellow-400 text-white p-2 rounded"
            onClick={() => setColor("Yellow")}
          >
            Yellow
          </button>
          <button
            className="bg-blue-600 text-white p-2 rounded"
            onClick={() => setColor("Blue")}
          >
            Blue
          </button>
        </nav>
      </div>
    </>
  );
}

export default App;
