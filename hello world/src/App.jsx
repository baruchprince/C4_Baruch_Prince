import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Hello world</h1>
      <p>I am Baruch Prince, this is my first React application</p>
    </>
  );
}

export default App;
