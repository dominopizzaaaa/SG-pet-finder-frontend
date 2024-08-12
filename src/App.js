import React from 'react';
import { BrowserRouter as Router, useLocation } from 'react-router-dom';
import Header from './components/Shared/Header';
import ShopOwnerHeader from './owner-components/Misc/ShopOwnerHeader';
import AppRoutes from './AppRoutes';
import Footer from './components/Shared/Footer';
import './style.css';

const App = () => {
  const location = useLocation();

  // Determine if the current path is for shop owners
  const isShopOwnerPath = location.pathname.startsWith('/shop-owners');

  return (
    <div>
      {isShopOwnerPath ? <ShopOwnerHeader /> : <Header />}
      <AppRoutes />
      <Footer />
    </div>
  );
};

const AppWithRouter = () => (
  <Router>
    <App />
  </Router>
);

export default AppWithRouter;
