import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Logo from './components/logo'; // Import the Logo component
import ShopInStore from './components/shopInStore'; // Corrected component import path
import Products from './components/product';
import Contact from './components/contacts';
import Home from './components/home';
import OrderOnline from './components/orders'; // Corrected component import path
import AboutUs from './components/about';
import Account from './components/login';
import Dashboard from './components/dashboard'; // Import Dashboard component
import Footer from './components/footer';
import backgroundImg from './background.PNG';
import './icons.css';
// Import your icon images
import contactIcon from './images/contactt.png';
import accountIcon from './images/account.jpg';

function App() {
  return (
    <Router>
      <div className="App" style={{ backgroundImage: `url(${backgroundImg})` }}>
        <header>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/products">Products</Link></li>
              {/* Include Logo component here */}
              <li className="logo-link">
                <Logo />
              </li>
              <li className="icon-link"><Link to="/order-online">Order Online</Link></li>
              <li className="icon-link"><Link to="/dashboard">Dashboard</Link></li>
            </ul>

            <div className="top-right-icons">
              <button className="icon-button contact-button">
                <Link to="/contacts"><img src={contactIcon} alt="Contact" /></Link>
              </button>
              <button className="icon-button account-button">
                <Link to="/account"><img src={accountIcon} alt="Account" /></Link>
              </button>
            </div>
          </nav>
        </header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contacts" element={<Contact />} />
          <Route path="/account" element={<Account />} />
          <Route path="/order-online" element={<OrderOnline />}>
            <Route path="shop-in-store" element={<ShopInStore />} />
          </Route>
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
