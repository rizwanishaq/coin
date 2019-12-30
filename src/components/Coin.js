import React from "react";
import "./Coin.css";

function Coin({ info }) {
  return (
    <div className="Coin">
      <img src={info.imgSrc} alt={info.side} />
    </div>
  );
}

export default Coin;
