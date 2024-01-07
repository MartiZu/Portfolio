import { Routes, Route, BrowserRouter } from "react-router-dom";

import Nav from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Recipes from "./pages/Projects";
import About from "./pages/About";
import Settings from "./pages/Settings";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Recipes />} />
          <Route path="/about" element={<About />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
