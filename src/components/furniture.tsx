import React, { useState, useCallback } from 'react';
import { getToken } from './auth';

interface Furniture {
  id: number;
  name: string;
  color: string;
  type: string;
  price: number;
}

const FurnitureList: React.FC = () => {
  const [furnitureList, setFurnitureList] = useState<Furniture[]>([]);
  const token = getToken();

  const fetchFurnitureList = useCallback(async () => {
    if (!token) {
      console.log('No token available. Skipping fetch.');
      return;
    }

    try {
      const response = await fetch('https://tstfastapi.azurewebsites.net/furniture/', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const furnitureData = await response.json();
        setFurnitureList(furnitureData);
        console.log('Furniture data fetched:', furnitureData);
      } else {
        console.error('Failed to fetch furniture list:', response.statusText);
      }
    } catch (error) {
      console.error('Error fetching furniture list:', error);
    }
  }, [token]);

  const handleFetchData = () => {
    fetchFurnitureList();
  };

  return (
    <div>
      <h2>Furniture List</h2>
      <button onClick={handleFetchData}>
        See Furniture
      </button>
      <ul>
        {furnitureList.map((furniture) => (
          <li key={furniture.id}>Name: {furniture.name}, Color: {furniture.color}, Type: {furniture.type}, Price: {furniture.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FurnitureList;
