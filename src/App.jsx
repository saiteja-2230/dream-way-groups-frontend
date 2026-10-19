import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Events from "./pages/Events";
import Home from "./pages/Home";
import Packages from "./pages/Packages";
import PackageDetails from "./pages/PackageDetails";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Investments from "./pages/Investments";
function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/packages" element={<Packages />} />
       <Route
    path="/packages/:slug"
    element={<PackageDetails />}
/>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/events" element={<Events />} />
        <Route
    path="/investments"
    element={<Investments />}
/>
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;