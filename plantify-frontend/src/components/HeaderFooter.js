import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../Home.css';
import plantify_logo from '../plantify-logo.jpg';

const HeaderFooter = ({ children, wishlist, products }) => {
  const navigate = useNavigate();
  const [showWishlistDropdown, setShowWishlistDropdown] = useState(false);
  const [showAccountDropdown, setShowAccountDropdown] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('loggedIn') === 'true';
    setLoggedIn(isLoggedIn);
  }, []);

  const handleSearch = (event) => {
    event.preventDefault();
    navigate('/ProductCatalog', { state: { searchTerm } });
  };

  const handleMenuClick = (category, subcategory = null) => {
    navigate('/ProductCatalog', { state: { category, subcategory } });
  };

  const handleProfileClick = () => {
    if (loggedIn) {
      navigate('/profile');
    } else {
      navigate('/login');
    }
  };

  const categories = [
    {
      name: 'Seeds & Saplings',
      subcategories: ['Organic Seeds', 'Hybrid Seeds', 'Fruit & Vegetable Seeds', 'Herb & Medicinal Seeds', 'Flower Seeds', 'Tree Saplings']
    },
    {
      name: 'Fertilizers & Soil Enhancers',
      subcategories: ['Organic Fertilizers', 'Chemical Fertilizers', 'Compost & Manure', 'Growth Boosters', 'Soil Conditioners']
    },
    {
      name: 'Smart Farming Tools',
      subcategories: ['AI-Powered Soil Sensors', 'Smart Irrigation Systems', 'Weather Monitoring Devices', 'Drone Sprayers', 'Automated Planters']
    },
    {
      name: 'Gardening & Farming Equipment',
      subcategories: ['Hand Tools (Trowels, Pruners, Weeders)', 'Power Tools (Tillers, Cultivators)', 'Hydroponic Systems', 'Greenhouse Kits', 'Vertical Farming Equipment']
    },
    {
      name: 'Pest & Disease Control',
      subcategories: ['Organic Pesticides', 'Chemical Pesticides', 'Fungicides & Herbicides', 'Pest Traps & Nets']
    },
    {
      name: 'Water Management & Irrigation',
      subcategories: ['Drip Irrigation Systems', 'Sprinklers & Nozzles', 'Water Pumps', 'Rainwater Harvesting Systems']
    },
    {
      name: 'Farming Accessories & Wearables',
      subcategories: ['Protective Gear (Gloves, Boots, Aprons)', 'Smart Farming Wearables (GPS Trackers, Health Monitors)', 'UV-Protection Hats & Clothing']
    }
  ];

  return (
    <div className="homepage">
      {/* Header with Logo, Search, and Icons */}
      <header className="header">
        <Link to="/" className="logo"><img src={plantify_logo} alt="plantify" /></Link>
        <form className="search-bar" onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Search For Items"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button type="submit">🔍</button>
        </form>
        <div className="icons">
          {/* Wishlist Icon */}
          <div
            className="wishlist-icon cursor-pointer"
            onMouseEnter={() => setShowWishlistDropdown(true)}
            onMouseLeave={() => setShowWishlistDropdown(false)}
          >
            <span role="img" aria-label="wishlist">🖤</span>
            {showWishlistDropdown && (
              <ul className="wishlist-dropdown">
                {wishlist.length > 0 ? (
                  wishlist.map((itemId) => {
                    const product = products.find(p => p.id === itemId);
                    return (
                      <li key={itemId}>
                        {product ? product.name : 'Product not found'}
                      </li>
                    );
                  })
                ) : (
                  <li>No items in wishlist</li>
                )}
              </ul>
            )}
          </div>

          {/* Cart Icon */}
          <div
            className="cart-icon cursor-pointer"
            onClick={() => navigate('/cart')}
            onMouseEnter={(e) => {
              const cartText = document.createElement('span');
              cartText.textContent = 'Cart';
              cartText.className = 'cart-text';
              e.currentTarget.appendChild(cartText);
            }}
            onMouseLeave={(e) => {
              const cartText = e.currentTarget.querySelector('.cart-text');
              if (cartText) e.currentTarget.removeChild(cartText);
            }}
          >
            <span role="img" aria-label="cart">🛒</span>
          </div>

          {/* Account Icon */}
          <div
            className="account-icon cursor-pointer"
            onMouseEnter={() => setShowAccountDropdown(true)}
            onMouseLeave={() => setShowAccountDropdown(false)}
          >
            <span role="img" aria-label="account">👤</span>
            {showAccountDropdown && (
              <ul className="account-dropdown" style={{ right: 0 }}>
                <li onClick={handleProfileClick}>My Profile</li>
                <li onClick={() => navigate('/orders')}>My Orders</li>
              </ul>
            )}
          </div>
        </div>
      </header>

      <nav className="navbar">
    <ul>
      {categories.map(category => (
        <li className="dropdown-parent" key={category.name}>
          <div onClick={() => handleMenuClick(category.name)}>{category.name}</div>
          <ul className="dropdown">
            {category.subcategories.map(subcategory => (
              <li key={subcategory} onClick={() => handleMenuClick(category.name, subcategory)}>
                {subcategory}
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  </nav>

      {/* Content Section */}
      <main>
        {children}
      </main>

      {/* Footer Section */}
      <footer className="footer">
        <div className="footer-content">
            &copy; 2025 Plantify. All rights reserved.
        </div>
        <div className="footer-links">
            <Link to="/privacy">Privacy Policy</Link> | <Link to="/terms">Terms of Service</Link>
        </div>
      </footer>
    </div>
  );
};

export default HeaderFooter;