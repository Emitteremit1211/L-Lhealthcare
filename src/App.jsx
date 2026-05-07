import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Homepage from "./pages/Homepage"
import Aboutus from "./pages/Aboutus"
import Services from "./pages/Services"
import  Contact  from "./pages/Contact"

function App() {
  return (
    <Router>
      <div>
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/services" element={<Services />} />
          <Route path="/how-it-works" element={<h1>How It Works Page</h1>} />
          <Route path="/jobs" element={<h1>Jobs Page</h1>} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/apply" element={<h1>Apply Page</h1>} />
        </Routes>
      </div>
    </Router>
  )
}

export default App