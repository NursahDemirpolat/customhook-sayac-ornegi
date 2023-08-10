import React from "react";
import { useEffect } from "react";

function UseTitle(num) {
  useEffect(() => {
    document.title = `Sayı ${num}`;
  }, [num]);
}

export default UseTitle;
