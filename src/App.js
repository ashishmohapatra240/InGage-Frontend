import React from "react";
import LandingPage from "./pages/LandingPage/LandingPage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Routes, BrowserRouter as Router, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
        </Routes>
      </Router>
      <Footer />
    </div>
  );
};

export default App;
