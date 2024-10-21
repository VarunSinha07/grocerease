import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import VendorList from './pages/VendorList';
import VendorDetail from './pages/VendorDetail';
import PriceComparison from './pages/PriceComparison';
import ContactUs from './pages/ContactUs';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-100">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/vendors" element={<VendorList />} />
            <Route path="/vendor/:id" element={<VendorDetail />} />
            <Route path="/compare" element={<PriceComparison />} />
            <Route path="/contact" element={<ContactUs />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;