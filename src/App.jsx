import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import Projects from './data/Projects/';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} /> {/* Changed path to "/about" */}
          <Route path="/projects" element={<Projects />} /> {/* Changed path to "/projects" */}
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
