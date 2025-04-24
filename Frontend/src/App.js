import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import ProductCatalog from './components/ProductCatalog';
import ProductPage from './components/ProductPage';
import AREquipment from './components/AREquipment';
import Home from './components/Home';
import Profile from './components/Profile';
import Cart from './components/Cart';
import Orders from './components/Orders';
import HeaderFooter from './components/HeaderFooter';
import OrderConfirmation from './components/OrderConfirmation';

function App() {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const locationKey = "userLocation";
    const expiryKey = "locationExpiry";

    // Function to get and store user location
    const storeUserLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const locationData = {
              latitude: position.coords.latitude,
              longitude: position.coords.longitude
            };

            // Store location & expiry time (1 hour from now)
            localStorage.setItem(locationKey, JSON.stringify(locationData));
            localStorage.setItem(expiryKey, Date.now() + 60 * 60 * 1000);

            console.log("Location stored:", locationData);
          },
          (error) => {
            console.error("Error getting location:", error.message);
          }
        );
      } else {
        console.error("Geolocation is not supported by this browser.");
      }
    };

    // Check if location exists and is still valid
    const storedExpiry = localStorage.getItem(expiryKey);
    if (!storedExpiry || Date.now() > storedExpiry) {
      console.log("Fetching new location...");
      storeUserLocation();
    } else {
      console.log("Using stored location:", JSON.parse(localStorage.getItem(locationKey)));
    }
  }, []);

  return (
    <Router>
      <HeaderFooter wishlist={wishlist} setWishlist={setWishlist}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/ProductCatalog" element={<ProductCatalog wishlist={wishlist} setWishlist={setWishlist} />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/ar-equipment" element={<AREquipment />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/order-confirmation" element={<OrderConfirmation />} />
        </Routes>
      </HeaderFooter>
    </Router>
  );
}

export default App;
