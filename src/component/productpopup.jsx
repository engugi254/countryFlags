import React from "react";

function ProductPopup({
  product,

  onClose,
}) {
  return (
    <div className="popup">
      <div id="popupHover">
        <div>
        <button onClick={onClose}>Back</button>
        <h2>{product.name}</h2>

        <img src={product.flags.png} alt={product.name} />
        <p>Population: {product.population} </p>
        <p>Region: {product.region}</p>
        <p>Capital: {product.capital}</p>
        <p>Alt Spellings: {product.altSpellings}</p>
        <p>Sub-region: {product.subregion}</p>
        </div>
        <div>
          <p>Region: {product.region}</p>
          <p>Population: {product.population}</p>
          <p>Lat Long: {product.latlng}</p>
          <p>Demonym: {product.demonym}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductPopup;
