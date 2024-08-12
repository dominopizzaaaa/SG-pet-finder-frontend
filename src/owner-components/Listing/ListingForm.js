import React, { useState } from 'react';
import axios from 'axios';

const ListingForm = ({ shopName, setListings, listings }) => {
  const [formData, setFormData] = useState({
    petName: '',
    type: 'puppy',
    age: '',
    sex: 'male',
    breed: '',
    description: '',
    photos: [],
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      photos: e.target.files,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append('petName', formData.petName);
    data.append('type', formData.type);
    data.append('age', formData.age);
    data.append('sex', formData.sex);
    data.append('breed', formData.breed);
    data.append('description', formData.description);
    data.append('shopName', shopName);

    for (let i = 0; i < formData.photos.length; i++) {
      data.append('photos', formData.photos[i]);
    }

    try {
      const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/listings`, data, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      console.log('Listing created:', response.data);
      alert('Listing submitted successfully!');
      setFormData({
        petName: '',
        type: 'puppy',
        age: '',
        sex: 'male',
        breed: '',
        description: '',
        photos: [],
      });
      setListings([...listings, response.data]);
    } catch (error) {
      console.error('Error submitting listing:', error);
      alert('Error submitting listing. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Pet's Name:
        <input
          type="text"
          name="petName"
          value={formData.petName}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Type:
        <select name="type" value={formData.type} onChange={handleChange} required>
          <option value="puppy">Puppy</option>
          <option value="kitten">Kitten</option>
        </select>
      </label>
      <label>
        Age:
        <input
          type="number"
          name="age"
          value={formData.age}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Sex:
        <select name="sex" value={formData.sex} onChange={handleChange} required>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </label>
      <label>
        Breed:
        <input
          type="text"
          name="breed"
          value={formData.breed}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Description:
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
        ></textarea>
      </label>
      <label>
        Photos/Videos:
        <input
          type="file"
          name="photos"
          onChange={handleFileChange}
          multiple
          required
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default ListingForm;
