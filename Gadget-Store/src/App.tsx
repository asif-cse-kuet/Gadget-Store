import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="heading">
      <Navbar />

      {/* Routes Details */}
      {/* <Routes>
        <Route path="/" />
        <Route path="/cart" />
      </Routes> */}
    </div>
  );
}

export default App;
