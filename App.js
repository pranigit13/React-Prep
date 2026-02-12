import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <header>
      <img src="/assets/logo.png" alt="Logo" className="logo" />
      <ul>
        <li>Home</li>
        <li>About Us</li>
        <li>Contact US</li>
        <li>Cart</li>
      </ul>
    </header>
  );
};

const Body = () => {
  return(<main>
    <div className="search">
      <input
        type="text"
        placeholder="Search for restaurant, cuisine or a dish"
      />
    </div>
    <div className="restaurant-list">
      <div className="restaurant-card">
        <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/vkhcohhmqfczycw9vsar" alt="Restaurant" className="restaurant-logo" />
        <h3>Sample Restaurant</h3>
        <p className="cuisin-type">Indian</p>
        <p className="ratings">4.4</p>
        <p className="delivery-time">4.4</p>
      </div>
    </div>
  </main>);
};

const Footer = () => {
  return (
    <footer>
      <p>Copyright @ 2024 Food Villa</p>
    </footer>
  );
}
const AppLayout = () => (
 <div className="app">
  
    <Header />
    <Body/>
    <Footer/>
   </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
// root render replaces everything that is present in root
root.render(<AppLayout />);
