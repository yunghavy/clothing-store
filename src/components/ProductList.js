import React, { useState } from 'react';
import './Product.css'; 

const ProductPage = () => {

  const products = [
    { id: 1, name: 'Men\'s T-Shirt', price: 30, imageUrl: 'https://unsplash.com/photos/brown-long-sleeve-shirt-on-white-clothes-hanger-Fg15LdqpWrs' },
    { id: 2, name: 'Men\'s Hoodie', price: 50, imageUrl: 'https://unsplash.com/photos/white-crew-neck-long-sleeve-shirt-7cERndkOyDw' },
    { id: 3, name: 'Men\'s Shorts', price: 40, imageUrl: 'https://unsplash.com/photos/white-v-neck-shirt-on-brown-clothes-hanger-p8Drpg_duLw' },
  ];

  // State to manage the selected category filter
  const [selectedFilter, setSelectedFilter] = useState('All');

  // Filter products based on the selected category
  const filteredProducts = selectedFilter === 'All'
    ? products
    : products.filter(product => product.category === selectedFilter);

  return (
    <div>
      <p className='text-black display-6'>This is the product page</p>
      <div className='Container'>
        <div className='filter'>
          <h1>Filter goes here</h1>
          <select
            value={selectedFilter}
            onChange={(e) => setSelectedFilter(e.target.value)}
          >
            <option value='All'>All</option>
            <option value='T-Shirts'>T-Shirts</option>
            <option value='Hoodies'>Hoodies</option>
            <option value='Shorts'>Shorts</option>
            <option value='Jeans'>Jeans</option>
            <option value='Sweatshirts'>Sweatshirts</option>
            <option value='Sweater'>Sweater</option>
            <option value='Sneakers'>Sneakers</option>
          </select>
        </div>
        <div className='content'>
          <h1>Clothes go here</h1>
          <div className="card-container">
            {filteredProducts.slice(0, 3).map(product => (
              <div className="card" key={product.id}>
                <img src={product.imageUrl} alt={product.name} />
                <h3>{product.name}</h3>
                <p>${product.price}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
