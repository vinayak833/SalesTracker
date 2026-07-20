import { useState } from "react";
import {useEffect)  from "react";
import "./App.css";
useEffect(() => {
  const saved =
    JSON.parse(
      localStorage.getItem("products")
    ) || [];

  setProducts(saved);

  const total =
    saved.reduce(
      (sum, p) => sum + p.price,
      0
    );

  setRevenue(total);
}, []);

useEffect(() => {
  localStorage.setItem(
    "products",
    JSON.stringify(products)
  );
}, [products]);

function App() {
  const [products, setProducts] =
    useState([]);

  const [name, setName] =
    useState("");

  const [price, setPrice] =
    useState("");

  const [revenue, setRevenue] =
    useState(0);

  const addProduct = () => {
    if (!name || !price) return;

    const product = {
      id: Date.now(),
      name,
      price: Number(price)
    };

    setProducts([
      ...products,
      product
    ]);

    setRevenue(
      revenue + product.price
    );

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

      <h2>
        Total Revenue: ₹{revenue}
      </h2>

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
