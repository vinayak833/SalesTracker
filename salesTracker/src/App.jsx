import "./App.css";

function App() {
  return (
    <div className="container">
      <h1>Sales Tracker</h1>

      <div className="card">
        <h2>Add Product</h2>

        <input
          type="text"
          placeholder="Product Name"
        />

        <input
          type="number"
          placeholder="Price"
        />

        <button>Add Product</button>
      </div>

      <div className="card">
        <h2>Dashboard</h2>

        <p>Total Products: 0</p>
        <p>Total Revenue: ₹0</p>
      </div>
    </div>
  );
}

export default App;
