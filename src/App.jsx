import "./App.css";
import React, { useEffect, useState } from "react";
import data from "./data.json";
import ProductPopup from "./component/productpopup";
import { MyComponent } from "./component/mycomponent";

function App() {
  const [mode, setMode] = useState("light");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("All");
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const handleClosePopup = () => {
    setSelectedProduct(null);
  };

  const handleRegionChange = (e) => {
    setSelectedRegion(e.target.value);
  };
  //dark and light mode

  const toggleMode = () => {
    const newMode = mode === "light" ? "dark" : "light";
    setMode(newMode);
  };
  //dark and light mode
  useEffect(() => {
    const cssFile = mode === "light" ? "app-light.css" : "app-dark.css";
    const head = document.head;
    const link = document.createElement("link");
    link.type = "text/css";
    link.rel = "stylesheet";
    link.href = cssFile;
    head.appendChild(link);
  }, [mode]);

  const filteredData =
    selectedRegion !== "All"
      ? data.filter((country) => country.region === selectedRegion)
      : data;
  const handleSearch = () => {
    const filtered = filteredData.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    if (searchTerm !== "") {
      return filtered.map((product, index) => (
        <MyComponent key={index} data={product} />
      ));
    } else {
      return <div></div>;
    }
  };

  return (
    <div className="container">
      <div className="navbar">
        <div
          id="modeDiv"
          className={mode === "light" ? "light-mode" : "dark-mode"}
        >
          <h3>Where in the world?</h3>
          <div id="buttonM">
            <button id="buttonMode" onClick={toggleMode}>
              {mode === "light" ? "Dark Mode" : "Light Mode"}
            </button>
          </div>
          {/* ... mapping over filteredData */}
        </div>
        <div>
          <input
            id="search"
            type="text"
            placeholder="Search for a country"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button id="searchbutton" onClick={handleSearch}>
            Search
          </button>
          {handleSearch()}
        </div>
        <div className="categories">
          <select value={selectedRegion} onChange={handleRegionChange}>
            <option value="All">All</option>
            <option value="Africa">Africa</option>
            <option value="Americas">Americas</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
          </select>
        </div>
      </div>
      <div
        className={
          mode === "light" ? "light-mode productx" : "dark-mode productx"
        }
      >
        {filteredData.map((country, index) => (
          <MyComponent
            key={index}
            data={country}
            onClick={() => handleProductClick(country)}
          />
        ))}
      </div>

      <div>
        {selectedProduct && (
          <ProductPopup
            product={selectedProduct}
            imageUrl={selectedProduct.flags.png}
            population={selectedProduct.population}
            region={selectedProduct.region}
            capital={selectedProduct.capital}
            onClose={handleClosePopup}
          />
        )}
      </div>
    </div>
  );
}
<MyComponent />;
export default App;
