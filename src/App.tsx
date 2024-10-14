import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import TicketSales from './pages/TicketSales';
import FuelSales from './pages/FuelSales';
import Services from './pages/Services';
import UserProfile from './pages/UserProfile';
import Login from './pages/Login';
import Register from './pages/Register';
import PackageTracking from './pages/PackageTracking';
import VehicleRental from './pages/VehicleRental';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tickets" element={<TicketSales />} />
            <Route path="/fuel" element={<FuelSales />} />
            <Route path="/services" element={<Services />} />
            <Route path="/profile" element={<UserProfile />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/tracking" element={<PackageTracking />} />
            <Route path="/rental" element={<VehicleRental />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
