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
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleOpen = (product) => {
    setSelectedProduct(product);
  };

  const handleClose = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="App">
      <h1>product list</h1>
      
      <div className="product-list">
        {products.map(product => (
          <div key={product.id} className="product-card" onClick={() => handleOpen(product)}>
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <p>{product.shortDesc}</p>
          </div>
        ))}
      </div>
      {selectedProduct && (
        <div className="popup-overlay" onClick={handleClose}>
          <div className="popup" onClick={(e) => e.stopPropagation()}>
            <button onClick={handleClose}>X</button>
            <h2>{selectedProduct.name}</h2>
            <p>{selectedProduct.price}</p>
            <p>{selectedProduct.fullDesc}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;