import React, { useEffect, useState } from "react";
import PropertyService from "../services/PropertyService";

function PropertyList({ refresh }) {

  const [properties, setProperties] = useState([]);

  useEffect(() => {
    fetchProperties();
  }, [refresh]);

  const fetchProperties = () => {
    PropertyService.getAllProperties()
      .then(res => {
        setProperties(res.data);
      })
      .catch(err => console.log(err));
  };

  return (
    <div>
      <h2>Property List</h2>

      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Property Name</th>
            <th>Owner</th>
            <th>Location</th>
            <th>Rent</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {properties.map(property => (
            <tr key={property.id}>
              <td>{property.id}</td>
              <td>{property.propertyName}</td>
              <td>{property.ownerName}</td>
              <td>{property.location}</td>
              <td>{property.rentAmount}</td>
              <td>{property.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PropertyList;
