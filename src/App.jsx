import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Homepage from "./pages/Homepage"
import Aboutus from "./pages/Aboutus"
import Services from "./pages/Services"
import Contact from "./pages/Contact"
import Adminpanel from "./pages/Adminpanel"
import Job from "./pages/Job"
import AdminLogin from "./pages/AdminLogin"
import ProtectedRoute from "./pages/ProtectedRoute"
import JobDetail from "./pages/JobDetail"
import Apply from "./pages/Apply"

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
          <Route path="/jobs" element={<Job />} />
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="/apply" element={<h1>Apply Page</h1>} /> */}
          {/* <Route path="/adminpanel" element={<Adminpanel />} /> */}
          <Route path="/adminlogin" element={<AdminLogin />} />
          <Route
            path="/adminpanel"
            element={
              <ProtectedRoute>
                <Adminpanel />
              </ProtectedRoute>
            }
          />
          <Route path="/jobs/:id" element={<JobDetail />} />
          <Route path="/apply" element={<Apply />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App