import React, { useState } from "react";
import Coin from "./Coin";
import { choice } from "../utils/helpers";

function CoinContainer({
  coins = [
    { side: "heads", imgSrc: "https://tinyurl.com/react-coin-heads-jpg" },
    { side: "tails", imgSrc: "https://tinyurl.com/react-coin-tails-jpg" }
  ]
}) {
  const [state, setState] = useState({
    currCoin: null,
    nFlips: 0,
    nHeads: 0,
    nTails: 0
  });

  return (
    <div className="CoinContainer">
      <h2>Let's Flip A Coin!</h2>
      {state.currCoin && <Coin info={state.currCoin} />}
      <button
        onClick={() => {
          const newCoin = choice(coins);
          setState(prevState => ({
            ...prevState,
            currCoin: newCoin,
            nFlips: prevState.nFlips + 1,
            nHeads: prevState.nHeads + (newCoin.side === "heads" ? 1 : 0),
            nTails: prevState.nTails + (newCoin.side === "tails" ? 1 : 0)
          }));
        }}
      >
        Flip Me!
      </button>

      <p>
        Out of {state.nFlips} flips, there have been {state.nHeads} heads and{" "}
        {state.nTails} tails.
      </p>
    </div>
  );
}

export default CoinContainer;
