import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import FastFood from "./components/FastFood"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="relative w-full overflow-x-hidden">
      <Routes>
        <Route
          path="/"
          element={
            <div className="w-full overflow-x-hidden">
              <Navbar />
              <Hero />
              <About />
              <Skills />
              <Projects />
              <Footer />
            </div>
          }
        />
        <Route path="/fastfood" element={<FastFood />} />
      </Routes>
    </div>
  )
}

export default App
