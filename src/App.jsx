import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Homepage from "./pages/Homepage"
import Aboutus from "./pages/Aboutus"
import Services from "./pages/Services"
import Contact from "./pages/Contact"
import Adminpanel from "./pages/Adminpanel"
import Jobs from "./pages/Jobs"
import AdminLogin from "./pages/AdminLogin"
import ProtectedRoute from "./pages/ProtectedRoute"
import JobDetail from "./pages/JobDetail"
import Apply from "./pages/Apply"
import NotFound from "./pages/NotFound"
import Appointment from "./pages/Appointment"
import Privatepolicy from "./pages/Privatepolicy"
import Termsofpolicy from "./pages/Termsofpolicy"

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/services" element={<Services />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/contact" element={<Contact />} />
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
          <Route path="*" element={<NotFound />} />
          <Route path="privatepolicy" element={<Privatepolicy/>} />
          <Route path="Terms" element={<Termsofpolicy />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App