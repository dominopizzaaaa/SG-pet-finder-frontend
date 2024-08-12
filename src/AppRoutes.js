import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Menu/Home/Home';
import Shop from './components/Menu/Shop/Shop';
import About from './components/Menu/About/About';
import Puppies from './components/Animals/Puppies';
import Kittens from './components/Animals/Kittens';
import AnimalDetail from './components/Animals/AnimalDetail';
import Events from './components/Menu/Events/Events';
import EventSchedule from './components/Menu/Events/EventSchedule';
import TipsAndTricks from './components/Menu/TipsAndTricks/TipsAndTricks';
import Forum from './components/Forum/Forum';
import Profile from './components/Profile/Profile';
import Cart from './components/Cart/Cart';
import ThankYou from './components/Menu/Misc/ThankYou';
import OrdersSection from './components/Profile/OrdersSection';
import PetSupplies from './components/Menu/Shop/PetSupplies';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import ShopOwnerLogin from './owner-components/Auth/ShopOwnerLogin';
import ShopOwnerSignUp from './owner-components/Auth/ShopOwnerSignUp';
import ShopOwnerForum from './owner-components/Forum/ShopOwnerForum';
import ProtectedRoute from './components/Verification/ProtectedRoute';
import AccessDenied from './components/Verification/AccessDenied';
import ListOfPartners from './components/Menu/Misc/ListOfPartners';
import ErrorBoundary from './ErrorBoundary';
import ShopOwnerHome from './owner-components/Misc/ShopOwnerHome';
import ShopOwnerProfile from './owner-components/Profile/ShopOwnerProfile';
import ShopOwnerListings from './owner-components/Listing/ShopOwnerListings';

const AppRoutes = () => (
  <ErrorBoundary>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/puppies" element={<Puppies />} />
      <Route path="/kittens" element={<Kittens />} />
      <Route path="/animal-details" element={<ProtectedRoute><AnimalDetail /></ProtectedRoute>} />
      <Route path="/events" element={<Events />} />
      <Route path="/event-schedule" element={<EventSchedule />} />
      <Route path="/tips-and-tricks" element={<TipsAndTricks />} />
      <Route path="/forum" element={<Forum />} />
      <Route path="/profile/*" element={<Profile />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/thank-you" element={<ThankYou />} />
      <Route path="/orders" element={<OrdersSection />} />
      <Route path="/petsupplies" element={<PetSupplies />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/shop-owners-login" element={<ShopOwnerLogin />} />
      <Route path="/shop-owners-signup" element={<ShopOwnerSignUp />} />
      <Route path="/shop-owners-home" element={<ShopOwnerHome />} />
      <Route path="/shop-owners-profile" element={<ShopOwnerProfile />} />
      <Route path="/shop-owners-listings" element={<ShopOwnerListings />} />
      <Route path="/shop-owners-forums" element={<ShopOwnerForum />} />
      <Route path="/access-denied" element={<AccessDenied />} />
      <Route path="/lists-of-partners" element={<ListOfPartners />} />
    </Routes>
  </ErrorBoundary>
);

export default AppRoutes;
