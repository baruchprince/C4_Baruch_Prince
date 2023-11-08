import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Portfolio</h1>
      <>
        <h2>Educational Background</h2>
        <p>Bachelor of Science in Marketing</p>
        <p>University of Adepa</p>
        <p>Graduated in December 2020</p>
      </>
      <>
      <h2>Professional Background</h2>
        <p>Sales Rep. at ABC Tech Solutions</p>
        <p>Supervisor at ABC Tech Solutions</p>
        <p>June 2020 - Present</p>
      </>
      <>
      <h2>Skills List</h2>
        <ul>
          <li>Sales</li>
          <li>Customer Service</li>
          <li>Business Closure</li>
        </ul>
      </>
      
    </>
  );
}

export default App;
