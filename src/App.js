import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import CartDetails from "./components/CartDetails";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<CartDetails />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
