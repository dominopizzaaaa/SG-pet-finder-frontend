import React from 'react';
import './styles/list-of-partners.css'; // Create and import a CSS file for styling

const ListOfPartners = () => {
  const dummyShops = [
    { name: 'Happy Paws', website: 'http://happypaws.com', address: '123 Pet Street, Pet City' },
    { name: 'Furry Friends', website: 'http://furryfriends.com', address: '456 Animal Ave, Pet Town' },
    { name: 'Pet Paradise', website: 'http://petparadise.com', address: '789 Critter Blvd, Petville' },
  ];

  return (
    <div className="list-of-partners-container">
      <h1>List of Partnered Pet Shops</h1>
      <table className="partners-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Website</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {dummyShops.map((shop, index) => (
            <tr key={index}>
              <td>{shop.name}</td>
              <td><a href={shop.website} target="_blank" rel="noopener noreferrer">{shop.website}</a></td>
              <td>{shop.address}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListOfPartners;
