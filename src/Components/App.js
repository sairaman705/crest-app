import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Product from "./Components/Product";
import Pricing from "./Components/pricing";
import Industries from "./Components/Industries";
import CustomerStories from "./Components/CustomerStories";
import About from "./Components/About";
import Blog from "./Components/Blog";
import Login from "./Components/Login";
import Talk from "./Components/Talk";

const App = () => {
  return (
    <Router>
      <div className="main_content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/customer stories" element={<CustomerStories />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/login" element={<Login />} />
          <Route path="/talk" element={<Talk />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
