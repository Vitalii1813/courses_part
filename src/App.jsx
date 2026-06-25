import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./sections/HeroSection/HeroSection";
import Tracks from "./sections/TrackSection/TrackSection";
import AboutSection from "./sections/AboutSection/AboutSection";
import RegisterSection from "./sections/RegisterSection/RegisterSection";
import ContactsSection from "./sections/ContactsSection/ContactsSection.jsx";
import Footer from "./components/Footer/Footer";
import MathPage from "./pages/MathPage";
import SalesPage from "./pages/SalesPage";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <main>
              <HeroSection />
              <Tracks />
              <AboutSection />
              <RegisterSection />
              <ContactsSection />
            </main>
          }
        />
        <Route path="/math" element={<MathPage />} />
        <Route path="/sales" element={<SalesPage />} />
        <Route path="/test" element={<div>Test Route Works!</div>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;