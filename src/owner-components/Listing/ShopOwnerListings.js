import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ListingForm from './ListingForm'; // Import the ListingForm component
import './styles/ShopOwnerListings.css';

const ShopOwnerListings = () => {
  const [listings, setListings] = useState([]);
  const [shopName, setShopName] = useState('');
  const [filter, setFilter] = useState('all');
  const [isFormVisible, setIsFormVisible] = useState(false);

  useEffect(() => {
    // Fetch the shop name of the logged-in shop owner
    const fetchShopName = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/shop-name', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });
        setShopName(response.data.shopName);
      } catch (error) {
        console.error('Error fetching shop name:', error);
      }
    };

    fetchShopName();
  }, []);

  useEffect(() => {
    if (shopName) {
      // Fetch listings for the logged-in shop owner by shop name
      const fetchListings = async () => {
        try {
          const response = await axios.get(`http://localhost:5000/api/listings/by-shop-name/${shopName}`, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
          });
          setListings(response.data);
        } catch (error) {
          console.error('Error fetching listings:', error);
        }
      };

      fetchListings();
    }
  }, [shopName]);

  const handleFilterChange = (type) => {
    setFilter(type);
  };

  const filteredListings = filter === 'all' ? listings : listings.filter(listing => listing.type === filter);

  const toggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible);
  };

  return (
    <div className="shop-owner-listings">
      <h2>Your Listings</h2>
      <div className="filter-buttons">
        <button onClick={() => handleFilterChange('all')} className={filter === 'all' ? 'active' : ''}>All</button>
        <button onClick={() => handleFilterChange('puppy')} className={filter === 'puppy' ? 'active' : ''}>Puppy</button>
        <button onClick={() => handleFilterChange('kitten')} className={filter === 'kitten' ? 'active' : ''}>Kitten</button>
      </div>
      <div className="listings">
        {filteredListings.map(listing => (
          <div key={listing._id} className="listing">
            <h4>{listing.petName}</h4>
            <p>Type: {listing.type}</p>
            <p>Age: {listing.age}</p>
            <p>Sex: {listing.sex}</p>
            <p>Breed: {listing.breed}</p>
            <p>Description: {listing.description}</p>
            {listing.photos.map(photo => (
              <img key={photo} src={photo} alt={`${listing.petName}`} />
            ))}
          </div>
        ))}
      </div>
      <button onClick={toggleFormVisibility} className="submit-new-listing-button">
        {isFormVisible ? 'Hide Form' : 'Submit New Pet Listing'}
      </button>
      {isFormVisible && <ListingForm shopName={shopName} setListings={setListings} listings={listings} />}
    </div>
  );
};

export default ShopOwnerListings;
