import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Chatbot from './Chatbot';
import './HeaderFooter';
import '../Home.css';
import seeds from '../seeds.jpg';
import smartFarming from '../smart-farming.jpg';
import irrigation from '../irrigation.jpg';

const recommendedCropsData = {
  Maharashtra: [
    { id: 1, name: 'GROUNDNUT', district: 'Raigad', yield: '3000.00 Kg/ha' },
    { id: 2, name: 'FINGER MILLET', district: 'Kolhapur', yield: '1858.45 Kg/ha' },
    { id: 3, name: 'PIGEONPEA', district: 'Nagpur', yield: '2568.82 Kg/ha' },
    { id: 4, name: 'SESAMUM', district: 'Sangli', yield: '909.09 Kg/ha' },
    { id: 5, name: 'RABI SORGHUM', district: 'Kolhapur', yield: '2158.94 Kg/ha' },
  ],
};

const Home = () => {
  const [state, setState] = useState('');
  const [loading, setLoading] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [selectedState, setSelectedState] = useState('');
  const [recommendations, setRecommendations] = useState({ common: [], unique: [] });
  const [showChatbot, setShowChatbot] = useState(false); // State to control chatbot visibility
  const navigate = useNavigate();

  // Function to store the user's location in local storage
  const saveLocation = (location) => {
    localStorage.setItem('userLocation', JSON.stringify(location));
    localStorage.setItem('locationExpiry', Date.now() + 1000 * 60 * 60); // expire in 1 hour
  };

  useEffect(() => {
    const locationKey = "userLocation";
    const expiryKey = "locationExpiry";

    const storedExpiry = localStorage.getItem(expiryKey);
    if (storedExpiry && Date.now() <= parseInt(storedExpiry)) {
      const locationData = JSON.parse(localStorage.getItem(locationKey));
      if (locationData) {
        const { latitude, longitude } = locationData;

        if (latitude >= 15 && latitude <= 22 && longitude >= 72 && longitude <= 80) {
          setState('Maharashtra');
        }
      }
    }
  }, []);

  // Submit handler for fetching recommendations based on state input
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setShowResults(false);

    try {
      const res = await fetch('http://localhost:5001/recommend', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ state }),
      });

      const data = await res.json();

      if (res.ok) {
        setRecommendations(data);
        setSelectedState(state);
        setShowResults(true);
      } else {
        alert(data.error || 'Something went wrong!');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      alert('Server not responding.');
    }

    setLoading(false);
  };

  const handleCropClick = (id) => {
    navigate(`/products/${id}`);
  };

  // Function to toggle the visibility of the chatbot
  const toggleChatbot = () => {
    setShowChatbot(!showChatbot);
  };

  return (
    <div className="main-content">
      {/* Input Section */}
      <div className="input-section">
        <h2>🌾 Get Recommended Crops for Your State</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={state}
            onChange={(e) => setState(e.target.value)}
            placeholder="Enter your state (e.g. Maharashtra)"
            required
            className="state-input"
          />
          <button type="submit" className="submit-button">Submit</button>
        </form>
      </div>

      {loading && (
        <div className="loader">Loading recommendations...</div>
      )}

      {showResults && recommendations && (
        <div className="results-section">
          <h3>🌟 Top 5 Common Crops for 📍 {recommendations.state}:</h3>
          <div className="card-grid">
            {recommendations.common.map((crop, idx) => (
              <div key={`common-${idx}`} className="crop-card">
                <h4>🌾 {crop.name}</h4>
                <p><strong>Best District:</strong> {crop.district}</p>
                <p><strong>Avg Yield:</strong> {crop.avg_yield} Kg/ha</p>
                <p><strong>Max Yield:</strong> {crop.max_yield} Kg/ha</p>
              </div>
            ))}
          </div>

          <h3>🌾 Top 5 Unique Crops for 📍 {recommendations.state}:</h3>
          <div className="card-grid">
            {recommendations.unique.map((crop, idx) => (
              <div key={`unique-${idx}`} className="crop-card">
                <h4>🌱 {crop.name}</h4>
                <p><strong>Best District:</strong> {crop.district}</p>
                <p><strong>Avg Yield:</strong> {crop.avg_yield} Kg/ha</p>
                <p><strong>Max Yield:</strong> {crop.max_yield} Kg/ha</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Chatbot icon at bottom right */}
      <button className="chatbot-icon" onClick={toggleChatbot}>
        💬
      </button>

      {/* Show the Chatbot if visible */}
      {showChatbot && <Chatbot state={state} />}

      {/* Product Layout Section */}
      <div className="product-layout">
        <div className="product-image">
          <img src={seeds} alt="High-Quality Seeds" />
        </div>
        <div className="product-text background-one styled-text">
          <div className="text-centered left-aligned">
            <div>Grow Smarter,</div>
            <div>Harvest Better</div>
            <div>With AI-Powered</div>
            <div>Crop Suggestions</div>
          </div>
        </div>
      </div>

      <div className="product-layout">
        <div className="product-text background-two styled-text">
          <div className="text-centered right-aligned">
            <div>Precision Farming,</div>
            <div>Smart Technology</div>
            <div>For a Sustainable Future</div>
          </div>
        </div>
        <div className="product-image">
          <img src={smartFarming} alt="AI-Powered Smart Farming" />
        </div>
      </div>

      <div className="product-layout">
        <div className="product-image">
          <img src={irrigation} alt="Smart Irrigation" />
        </div>
        <div className="product-text background-one styled-text">
          <div className="text-centered left-aligned">
            <div>Optimize Water,</div>
            <div>Maximize Growth</div>
            <div>With Smart Irrigation</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
