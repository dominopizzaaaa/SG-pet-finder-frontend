import { useLocation, useNavigate } from 'react-router-dom';
import './styles/AnimalDetail.css';

const AnimalDetail = () => {
  const location = useLocation();
  const navigate = useNavigate(); // Use the useNavigate hook
  const { listing } = location.state;

  const getImageUrl = (filename) => {
    const url = `${process.env.REACT_APP_BACKEND_URL}/uploads/${filename}`;
    console.log('Constructed Image URL:', url); // Log the URL to the console
    return url;
  };

  const photoFileName = listing.photos[0].replace(/^.*[\\/]/, ''); // Ensure only the file name is used

  const handleBackButtonClick = () => {
    navigate(-1); // Navigate back to the previous page
  };

  return (
    <div className="animal-detail-container">
      <button className="back-button" onClick={handleBackButtonClick}>
        &larr; Back
      </button>
      <div className="animal-detail-image-wrapper">
        <img src={getImageUrl(photoFileName)} alt={listing.petName} className="animal-detail-img" />
      </div>
      <div className="animal-detail-info">
        <h1 className="animal-detail-title">{listing.petName}</h1>
        <p><strong>Shop Name:</strong> {listing.shopName}</p>
        <p><strong>Sex:</strong> {listing.sex}</p>
        <p><strong>Age:</strong> {listing.age}</p>
        <p><strong>Breed:</strong> {listing.breed}</p>
        <p><strong>Description:</strong> {listing.description}</p>
      </div>
    </div>
  );
};

export default AnimalDetail;
