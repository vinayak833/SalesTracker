import { useState } from "react";
import "./App.css";

function App() {
  const [products, setProducts] =
    useState([]);

  const [name, setName] =
    useState("");

  const [price, setPrice] =
    useState("");

  const addProduct = () => {
    if (!name || !price) return;

    setProducts([
      ...products,
      {
        id: Date.now(),
        name,
        price
      }
    ]);

    setName("");
    setPrice("");
  };

  return (
    <div className="container">
      <h1>Sales Tracker</h1>

      <input
        value={name}
        onChange={(e) =>
          setName(e.target.value)
        }
        placeholder="Product Name"
      />

      <input
        value={price}
        onChange={(e) =>
          setPrice(e.target.value)
        }
        placeholder="Price"
      />

      <button onClick={addProduct}>
        Add Product
      </button>

      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - ₹
            {product.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
