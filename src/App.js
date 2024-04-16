
import React from 'react';
import LandingPage from './pages/LandingPage/LandingPage';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
const App = () => {
  return (
    <div className="App">
      <Header />
      <LandingPage />
      <Footer />
    </div>
  );
};

export default App;