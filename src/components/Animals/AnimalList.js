import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import AnimalCard from './AnimalCard';
import './styles/AnimalList.css';

const AnimalsList = ({ type }) => {
  const [listings, setListings] = useState([]);
  const [filter, setFilter] = useState(type);

  useEffect(() => {
    const fetchListings = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/listings', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
          params: { type },
        });

        setListings(response.data);
      } catch (err) {
        console.error('Error fetching listings:', err);
      }
    };

    fetchListings();
  }, [type]);

  const filteredListings = filter === 'all' ? listings : listings.filter(listing => listing.type === filter);

  return (
    <div className="animals-page">
      <section className="listings">
        <h2>{type === 'puppy' ? 'Puppies for Sale' : 'Kittens for Sale'}</h2>
        <div className="navigation-buttons">
          {type === 'puppy' ? (
            <Link to="/kittens">
              <button>See Kittens</button>
            </Link>
          ) : (
            <Link to="/puppies">
              <button>See Puppies</button>
            </Link>
          )}
          <Link to="/">
            <button>Go to Home</button>
          </Link>
        </div>
        <div className="animal-cards">
          {filteredListings.length === 0 ? (
            <p>No listings found. Please log in if you haven't done so!</p>
          ) : (
            filteredListings.map((listing) => (
              <AnimalCard
                key={listing._id}
                listing={listing}
              />
            ))
          )}
        </div>
      </section>
    </div>
  );
};

export default AnimalsList;