import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './LandingPage'; // Adjust the path if necessary
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css'; // Your global CSS file, ensure it's properly set up

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        {/* Add more routes here for other pages, for example: */}
        {/* <Route path="/features" element={<FeaturesPage />} /> */}
        {/* <Route path="/about" element={<AboutPage />} /> */}
        {/* <Route path="/community" element={<CommunityPage />} /> */}
        {/* <Route path="/blog" element={<BlogPage />} /> */}
        {/* <Route path="/faq" element={<FAQPage />} /> */}
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
