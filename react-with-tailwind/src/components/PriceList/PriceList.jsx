import React, { useEffect, useState } from "react";
import PriceCard from "../PriceCard/PriceCard";

const PriceList = () => {
  const [prices, setPrices] = useState([]);
  useEffect(() => {
    fetch("prices.json")
      .then((res) => res.json())
      .then((data) => setPrices(data));
  }, []);
  return (
    <div className="mx-12">
      <h2 className="text-5xl text-center bg-purple-300 p-4 font-bold text-purple-900 ">
        Awesome Affordable Prices
      </h2>
      <div className="grid md:grid-cols-3 gap-3">
      {
        prices.map (price => <PriceCard 
            key={price.id} 
            price={price}
        ></PriceCard>)
      }
      </div>
    </div>
  );
};

export default PriceList;
