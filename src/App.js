// Styles
import './App.css';

// Modules
import { Routes, Route, Link } from "react-router-dom";

// Components
import { Home } from './layouts/home/Home';
import { About } from './layouts/about/About';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
