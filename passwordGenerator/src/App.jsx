import { useCallback } from "react";
import { useEffect } from "react";
import { useState } from "react";

function App() {
  const [length, setLength] = useState(5);
  const [password, setPassword] = useState(null);
  const [characterAllowed, setCharacterAllowed] = useState(false);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const passwordGenerator = useCallback(() => {
    let charSet = "ABCDEFGHIJKLMNOPQRTUVWXYZabcdefghijklmnopqrstuvwxyz"; // Letters

    // Add numbers if numberAllowed is true
    if (numberAllowed) {
      charSet += "1234567890";
    }

    // Add special characters if characterAllowed is true
    if (characterAllowed) {
      charSet += "!@#$%^&*(){}";
    }

    // Generate a random password of the specified length
    let generatedPassword = "";
    for (let i = 0; i < length; i++) {
      generatedPassword += charSet.charAt(
        Math.floor(Math.random() * charSet.length)
      );
    }

    // Set the password state to the generated password
    setPassword(generatedPassword);
  }, [numberAllowed, characterAllowed, length]);
  useEffect(passwordGenerator, [characterAllowed, numberAllowed, length]);
  return (
    <>
      <h1 className="text-center text-red-950 text-xl">Password Generator</h1>

      <div className="max-w-lg mx-auto p-6 bg-slate-400 text-yellow-500 rounded-lg space-y-4">
        {/* Input Text Box */}
        <div>
          <label htmlFor="textInput" className="block text-sm font-medium">
            Password Input
          </label>
          <input
            id="textInput"
            type="text"
            value={password}
            className="mt-2 p-2 w-full border border-gray-300 rounded-md focus:ring-blue-300 focus:border-blue-300"
            placeholder="Enter some text"
            readOnly
          />
        </div>

        {/* Range Slider */}
        <div>
          <label htmlFor="rangeInput" className="block text-sm font-medium">
            Length
          </label>
          <input
            id="rangeInput"
            type="range"
            min="1"
            max="100"
            onChange={(event) => setLength(event.target.value)}
            className="mt-2 w-full h-2 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
          <div className="mt-2 text-sm">{length}</div>
        </div>
        {/* Checkboxes */}
        <div className="space-y-2">
          <div className="flex items-center">
            <input
              id="checkbox1"
              type="checkbox"
              className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              onChange={() => setNumberAllowed((prev) => !prev)}
            />
            <label htmlFor="checkbox1" className="ml-2 text-sm">
              Number Allowed
            </label>
          </div>

          <div className="flex items-center">
            <input
              id="checkbox2"
              type="checkbox"
              className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              onChange={() => setCharacterAllowed((prev) => !prev)}
            />
            <label htmlFor="checkbox2" className="ml-2 text-sm">
              Character Allowed
            </label>
          </div>
        </div>
        <button className=" bg-blue-700 text-white p-2 rounded">Copy</button>
      </div>
    </>
  );
}

export default App;
