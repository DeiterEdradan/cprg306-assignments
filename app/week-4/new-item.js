"use client";

import { useState } from "react";

export default function NewItem() {
  const [quantity, setQuantity] = useState(1);

  function increment() { if (quantity < 20) {
  setQuantity(quantity + 1); }
  }

  function decrement() { if (quantity > 1) { 
  setQuantity(quantity - 1); }
  }

  return ( <div className="flex items-center gap-4 p-4">
      <button
        onClick={decrement}
        disabled={quantity === 1}
        className="rounded bg-red-500 px-4 py-2 text-white hover:bg-red-600 disabled:cursor-not-allowed disabled:bg-gray-400"
      >
        -
      </button>

      <span className="text-xl font-bold">{quantity}</span>

      <button
        onClick={increment}
        disabled={quantity === 20}
        className="rounded bg-green-500 px-4 py-2 text-white hover:bg-green-600 disabled:cursor-not-allowed disabled:bg-gray-400"
      >
        +
      </button>
    </div>
  );
}
