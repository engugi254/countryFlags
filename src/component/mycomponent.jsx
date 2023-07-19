import React from "react";

export function MyComponent({ data, onClick }) {
  return (
    <div className="product">
      <div className="product-card" onClick={onClick}>
        <h1>{data.name}</h1>
        <img src={data.flags.png} alt={data.name} />
        <ul>
          <li>Population: {data.population}</li>
          <li>Region: {data.region}</li>
          <li>Capital: {data.capital}</li>
        </ul>
      </div>
    </div>
  );
}
