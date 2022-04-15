import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

//importing all pages
import Home from "./Pages/Home";
import InternPage from "./Pages/InternPage";
import PlacementPage from "./Pages/PlacementPage";

// importing components
import Navbars from "./Components/GlobalComponent/Navbar/Navbar";
import ScrollToTop from "./Components/GlobalComponent/ScrollToTop/ScrollToTop";
import Footer from "./Components/GlobalComponent/Footer/Footer";
import ContactSection from "./Components/GlobalComponent/ContactSection/ContactSection";
import TestimonialSection from "./Components/GlobalComponent/TestimonialSection/TestimonialSection";

//importing all css
import "./App.css";
import PlacementDetailedPage from "./Pages/PlacementDetailedPage";

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Navbars />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/intern" element={<InternPage />} />
          <Route path="/placement" element={<PlacementPage />} />
          <Route
            path="/placement/placementdetailed"
            element={<PlacementDetailedPage />}
          />
        </Routes>
        <ContactSection />
        <TestimonialSection />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
