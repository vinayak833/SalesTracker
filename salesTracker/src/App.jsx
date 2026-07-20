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
}
  export default App;