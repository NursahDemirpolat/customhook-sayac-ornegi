import React, { useState } from "react";
import useCounter from "./useCounter";
import UseTitle from "./useTitle";

function Sayac() {
  const [num, increment, decrement, reset] = useCounter();

  UseTitle(num);

  return (
    <div>
      <h2>Sayı : {num}</h2>
      <button onClick={increment}>Arttır</button>
      <button onClick={decrement}>Azalt</button>
      <button onClick={reset}>Sıfırla</button>
    </div>
  );
}

export default Sayac;
