// src/WithHeader.js
import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './components/Misc-folder/Header';
import ShopOwnerHeader from './owner-components/ShopOwnerHeader';

const WithHeader = () => {
  const location = useLocation();
  const isShopOwnerPath = location.pathname.startsWith('/shop-owners');

  return (
    <div>
      {isShopOwnerPath ? <ShopOwnerHeader /> : <Header />}
      <Outlet />
    </div>
  );
};

export default WithHeader;
