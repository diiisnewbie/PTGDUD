import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import HomePage from "./pages/HomePage"; // Import HomePage
import About from "./pages/About";
import UserDetail from "./pages/UserDetail";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import "./styles.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<HomePage />} /> {/* Thêm Route cho HomePage */}
        <Route path="/about" element={<About />} />
        <Route path="/user/:id" element={<UserDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
