import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Logo from './components/logo'; // Import the Logo component
import ShopInStore from './components/shopInStore'; // Corrected component import path
import Products from './components/product';
import Contact from './components/contacts';
import Home from './components/home';
import OrderNow from './components/orders'; // Corrected component import path
import AboutUs from './components/about';
import Account from './components/login';
import Footer from './components/footer';
import Blogs from './components/blogs'; // Import Blog component
import backgroundImg from './images/bakkkk.jpg';

import './icons.css';
// Import your icon images
import contactIcon from './images/contactt.png';
import accountIcon from './images/account.jpg';

function App() {
  return (
    <Router>
      <div className="App" style={{ backgroundImage: `url(${backgroundImg})`, backgroundSize: 'cover' }}>
        <header>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/products">Products</Link></li>
              <li className="logo-link">
                <Logo />
              </li>
              <li className="icon-link"><Link to="/order-online">OrderNow</Link></li>
              <li><Link to="/blogs">Blogs</Link></li>
              {/* Removed Dashboard link */}
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

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/products" element={<Products />} />
            <Route path="/contacts" element={<Contact />} />
            <Route path="/account" element={<Account />} />
            <Route path="/order-online" element={<OrderNow />}>

              {/* Nested route for ShopInStore component */}
              <Route path="shop-in-store" element={<ShopInStore />} />
            </Route>
            <Route path="/blogs" element={<Blogs />} />
            {/* Removed Dashboard route */}
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
