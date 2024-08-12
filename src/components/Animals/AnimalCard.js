import React from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/AnimalCard.css';

const AnimalCard = ({ listing }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate('/animal-details', { state: { listing } });
  };

  const getImageUrl = (filename) => {
    const url = `http://localhost:5000/uploads/${filename}`;
    console.log('Constructed Image URL:', url); // Log the URL to the console
    return url;
  };

  // Remove unnecessary escape characters from the regex
  const photoFileName = listing.photos[0].replace(/^.*[\\/]/, '');

  return (
    <div className="listing" onClick={handleCardClick}>
      {listing.photos && listing.photos[0] ? (
        <img src={getImageUrl(photoFileName)} alt={listing.petName} />
      ) : (
        <div className="placeholder-image">No Image Available</div>
      )}
      <h4>{listing.petName}</h4>
      <p>Shop Name: {listing.shopName}</p>
      <p>Sex: {listing.sex}</p>
    </div>
  );
};

export default AnimalCard;