import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Cropper from 'react-easy-crop';
import './styles/shop-owner-profile-section.css';

const ShopOwnerProfileSection = ({ user, setUser }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    address: user.address || '',
    handphone: user.handphone || '',
    bio: user.bio || '',
    shopName: user.shopName || '',
    backgroundPicture: user.backgroundPicture || '',
    idNumber: user.idNumber || '',
  });
  const [showChangePassword, setShowChangePassword] = useState(false);
  const [passwordData, setPasswordData] = useState({
    previousPassword: '',
    newPassword: '',
    confirmNewPassword: ''
  });
  const [backgroundImage, setBackgroundImage] = useState(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedArea, setCroppedArea] = useState(null);
  const [croppedBackgroundImage, setCroppedBackgroundImage] = useState(user.backgroundPicture || null);
  const [showBackgroundCropper, setShowBackgroundCropper] = useState(false);

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPasswordData({ ...passwordData, [name]: value });
  };

  const handleChangePassword = async () => {
    if (passwordData.newPassword !== passwordData.confirmNewPassword) {
      alert("New passwords do not match");
      return;
    }

    try {
      const token = localStorage.getItem('token');
      await axios.put(
        'http://localhost:5000/api/shop-owners-change-password',
        {
          previousPassword: passwordData.previousPassword,
          newPassword: passwordData.newPassword
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setShowChangePassword(false);
      setPasswordData({
        previousPassword: '',
        newPassword: '',
        confirmNewPassword: ''
      });
      alert("Password changed successfully");
    } catch (error) {
      console.error('Error changing password:', error.response?.data || error.message);
    }
  };

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/shop-owners-login');
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = async () => {
    try {
      const token = localStorage.getItem('token');
      const updateData = { ...formData };
  
      if (croppedBackgroundImage !== undefined) {
        updateData.backgroundPicture = croppedBackgroundImage; // Base64-encoded background image or null if removed
      }
  
      const response = await axios.put(
        'http://localhost:5000/api/shop-owners-profile',
        updateData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
      );
      setUser(response.data);
      setIsEditing(false);
    } catch (error) {
      console.error('Error saving profile:', error.response?.data || error.message);
    }
  };  

  const onCropComplete = (croppedArea, croppedAreaPixels) => {
    setCroppedArea(croppedAreaPixels);
  };

  const getCroppedImg = (imageSrc, pixelCrop) => {
    const createImage = (url) =>
      new Promise((resolve, reject) => {
        const image = new Image();
        image.addEventListener('load', () => resolve(image));
        image.addEventListener('error', (error) => reject(error));
        image.setAttribute('crossOrigin', 'anonymous');
        image.src = url;
      });
  
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
  
    return createImage(imageSrc).then((image) => {
      const scaleX = image.naturalWidth / image.width;
      const scaleY = image.naturalHeight / image.height;
      canvas.width = pixelCrop.width;
      canvas.height = pixelCrop.height;
  
      ctx.drawImage(
        image,
        pixelCrop.x * scaleX,
        pixelCrop.y * scaleY,
        pixelCrop.width * scaleX,
        pixelCrop.height * scaleY,
        0,
        0,
        pixelCrop.width,
        pixelCrop.height
      );
  
      return new Promise((resolve) => {
        const base64Image = canvas.toDataURL('image/jpeg');
        resolve(base64Image);
      });
    });
  };  

  const showCroppedBackgroundImage = async () => {
    try {
      const croppedImage = await getCroppedImg(backgroundImage, croppedArea);
      setCroppedBackgroundImage(croppedImage);
      setFormData({ ...formData, backgroundPicture: croppedImage }); // Update form data with the new background picture
      setShowBackgroundCropper(false);
    } catch (e) {
      console.error(e);
    }
  };

  const handleBackgroundImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setBackgroundImage(reader.result);
        setShowBackgroundCropper(true);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveBackgroundImage = () => {
    setCroppedBackgroundImage(null);
    setFormData({ ...formData, backgroundPicture: '' }); // Update form data to remove the background picture
  };

  return (
    <div className="shop-owner-profile-container">
      <div className="shop-owner-profile-info">
        <h2>Profile</h2>
        <p className="join-date">Join date: {new Date(user.joinDate).toLocaleDateString()}</p>
        <p className="join-date">Email: {user.email}</p>
        <p className="join-date">Unique ID number: {user.idNumber}</p>
        {isEditing && (
          <>
            <h3>Change Background Photo</h3>
            <input type="file" accept="image/*" onChange={handleBackgroundImageChange} />
            {showBackgroundCropper && (
              <div className="cropper-container">
                <Cropper
                  image={backgroundImage}
                  crop={crop}
                  zoom={zoom}
                  aspect={16 / 9} // Set aspect ratio for background image
                  showGrid={false}
                  onCropChange={setCrop}
                  onZoomChange={setZoom}
                  onCropComplete={onCropComplete}
                />
                <button onClick={showCroppedBackgroundImage} className="crop-button">Crop & Confirm</button>
              </div>
            )}
            {croppedBackgroundImage && (
              <>
                <img src={croppedBackgroundImage} alt="Cropped Background" className="cropped-background-img" />
                <button onClick={handleRemoveBackgroundImage} className="remove-button">Remove Photo</button>
              </>
            )}
          </>
        )}
        <h3>About</h3>
        {!isEditing ? (
          <>
            <p>{user.bio || 'No bio available'}</p>
            <h3>Shop Name</h3>
            <p>{user.shopName || 'No shop name available'}</p>
            <h3>Contact Information</h3>
            <p dangerouslySetInnerHTML={{ __html: `Address: ${user.address || '<i>No address provided</i>'}` }}></p>
            <p dangerouslySetInnerHTML={{ __html: `Handphone Number: ${user.handphone || '<i>No handphone number provided</i>'}` }}></p>
          </>
        ) : (
          <div className="shop-owner-profile-edit">
            <label>
              Bio: <textarea name="bio" value={formData.bio} onChange={handleInputChange} placeholder="Share something about yourself..." ></textarea>
            </label>
            <h3>Contact Information</h3>
            <label>
              Address: <input name="address" value={formData.address} onChange={handleInputChange} placeholder="Address" />
            </label>
            <label>
              Handphone Number: <input name="handphone" value={formData.handphone} onChange={handleInputChange} placeholder="Handphone Number" />
            </label>
            <label>
              Shop Name: <input name="shopName" value={formData.shopName} onChange={handleInputChange} placeholder="Shop Name" />
            </label>
          </div>
        )}
      </div>
      <div className="shop-owner-profile-buttons">
        {!isEditing ? (
          <>
            <button onClick={() => setIsEditing(true)}>Edit Profile</button>
            <button onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <>
            <button onClick={handleSave}>Save</button>
            <button onClick={() => setIsEditing(false)}>Cancel</button>
            {showChangePassword && (
              <div className="change-password">
                <label>
                  Previous Password: <input type="password" name="previousPassword" value={passwordData.previousPassword} onChange={handlePasswordChange} />
                </label>
                <label>
                  New Password: <input type="password" name="newPassword" value={passwordData.newPassword} onChange={handlePasswordChange} />
                </label>
                <label>
                  Confirm New Password: <input type="password" name="confirmNewPassword" value={passwordData.confirmNewPassword} onChange={handlePasswordChange} />
                </label>
                <div className="change-password-buttons">
                  <button onClick={handleChangePassword}>Confirm</button>
                  <button onClick={() => setShowChangePassword(false)}>Cancel</button>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default ShopOwnerProfileSection;
