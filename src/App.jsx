/*import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react'
import './App.css'
import Sample from './pages/Sample'
import Students from './pages/Students'
import Nav from "./components/Nav";
import Login from "./pages/Login";

function App() {
  const [count, setCount] = useState(0)

  return (
    
      <div className="App">
      
      <BrowserRouter>
        <Routes>
          
          <Route path="/Library"  element={<Sample />} />
          <Route path="/students" element={<Students />} />
          <Route path="/login" element={<Login/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default <App></App>*/
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Login from "./pages/Login";
import Homepage from "./Homepage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Login/>} />
          <Route path="/*" element={<Homepage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
