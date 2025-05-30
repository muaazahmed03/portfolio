import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import FastFood from './components/FastFood';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative">
      <Routes>
        <Route
          path="/"
          element={
            <>
              {/* <Blob /> */}
              <Navbar />
              <Hero />
              <About />
              <Skills />
              <Projects />
              <Footer />
              {/* <Contact /> */}
            </>
          }
        />
        <Route path="/fastfood" element={<FastFood />} /> 
      </Routes>
    </div>
  );
}

export default App;
