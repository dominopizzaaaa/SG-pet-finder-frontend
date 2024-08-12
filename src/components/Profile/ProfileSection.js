import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Cropper from 'react-easy-crop';
import './styles/profile-section.css';

const ProfileSection = ({ user, setUser }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    address: user.address || '',
    handphone: user.handphone || '',
    firstName: user.firstName || '',
    lastName: user.lastName || '',
    bio: user.bio || '',
  });
  const [showChangePassword, setShowChangePassword] = useState(false);
  const [passwordData, setPasswordData] = useState({
    previousPassword: '',
    newPassword: '',
    confirmNewPassword: ''
  });
  const [image, setImage] = useState(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedArea, setCroppedArea] = useState(null);
  const [croppedImage, setCroppedImage] = useState(user.profilePicture || null);
  const [showCropper, setShowCropper] = useState(false);

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
        'http://localhost:5000/api/change-password',
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
    navigate('/login');
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = async () => {
    try {
      const token = localStorage.getItem('token');
      const updateData = { ...formData };
  
      if (croppedImage) {
        updateData.profilePicture = croppedImage; // Base64-encoded image
      }
  
      const response = await axios.put(
        'http://localhost:5000/api/profile',
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

  const showCroppedImage = async () => {
    try {
      const croppedImage = await getCroppedImg(image, croppedArea);
      setCroppedImage(croppedImage);
      setShowCropper(false);
    } catch (e) {
      console.error(e);
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result);
        setShowCropper(true);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="profile-container">
      <div className="profile-info">
        <h2>Profile</h2>
        <p className="join-date">Join date: {new Date(user.joinDate).toLocaleDateString()}</p>
        {isEditing && (
          <>
            <h3>Change Profile Photo</h3>
            <input type="file" accept="image/*" onChange={handleImageChange} />
            {showCropper && (
              <div className="cropper-container">
                <Cropper
                  image={image}
                  crop={crop}
                  zoom={zoom}
                  aspect={1}
                  cropShape="round"
                  showGrid={false}
                  onCropChange={setCrop}
                  onZoomChange={setZoom}
                  onCropComplete={onCropComplete}
                />
                <button onClick={showCroppedImage} className="crop-button">Crop Image</button>
              </div>
            )}
          </>
        )}
        <h3>About</h3>
        {!isEditing ? (
          <>
            <p>{user.bio || 'No bio available'}</p>
            <h3>Overview</h3>
            <p>{user.likesReceived} likes received</p>
            <p>{user.commentsReceived} comments received</p>
            <p>{user.bestAnswers} best answers</p>
            <h3>Contact Information</h3>
            <p dangerouslySetInnerHTML={{ __html: `First Name: ${user.firstName || '<i>No first name provided</i>'}` }}></p>
            <p dangerouslySetInnerHTML={{ __html: `Last Name: ${user.lastName || '<i>No last name provided</i>'}` }}></p>
            <p dangerouslySetInnerHTML={{ __html: `Address: ${user.address || '<i>No address provided</i>'}` }}></p>
            <p dangerouslySetInnerHTML={{ __html: `Handphone Number: ${user.handphone || '<i>No handphone number provided</i>'}` }}></p>
          </>
        ) : (
          <div className="profile-edit">
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
              First Name: <input name="firstName" value={formData.firstName} onChange={handleInputChange} placeholder="First Name" />
            </label>
            <label>
              Last Name: <input name="lastName" value={formData.lastName} onChange={handleInputChange} placeholder="Last Name" />
            </label>
          </div>
        )}
      </div>
      <div className="profile-buttons">
        {!isEditing ? (
          <>
            <button onClick={() => setIsEditing(true)}>Edit Profile</button>
            <button onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <>
            <button onClick={handleSave}>Save</button>
            <button onClick={() => setIsEditing(false)}>Cancel</button>
            <button onClick={() => setShowChangePassword(true)}>Change Password</button>
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
                <div className="profile-buttons">
                  <button onClick={handleChangePassword}>Change Password</button>
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

export default ProfileSection;
