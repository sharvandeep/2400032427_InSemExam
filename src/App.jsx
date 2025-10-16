import React, { useState } from "react";
import "./App.css";

const products = [
  {
    id: 1,
    name: "Frontend Workbook",
    price: "₹799",
    shortDesc: "Workbook for students",
    fullDesc: "Complete workbook with exercises for frontend development."
  },
  {
    id: 2,
    name: "Laptop",
    price: "₹35000",
    shortDesc: "Student laptop",
    fullDesc: "High-performance laptop suitable for all academic work."
  }
];

function App() {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const openPopup = (product) => {
    setSelectedProduct(product);
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
    setSelectedProduct(null);
  };

  return (
    <div className="App">
      <h1>KL University Store</h1>
      
      <div className="product-list">
        {products.map(product => (
          <div key={product.id} className="product-card" onClick={() => openPopup(product)}>
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <p>{product.shortDesc}</p>
          </div>
        ))}
      </div>

      {showPopup && (
        <div className="popup-overlay" onClick={closePopup}>
          <div className="popup" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={closePopup}>X</button>
            <h2>{selectedProduct.name}</h2>
            <p className="price">{selectedProduct.price}</p>
            <p>{selectedProduct.fullDesc}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;