"use client";
import { useState } from "react";
export default function NewItem() {
  const [quantity, setQuantity] = useState(1);
  const increment = () => setQuantity(Math.min(quantity + 1, 20));
  const decrement = () => setQuantity(Math.max(quantity - 1, 1));
  return (
    <main className="min-h-screen bg-black-50 p-8">
      <h1 className="mb-6 text-4xl font-bold text-green-800">
        New Item
      </h1>
      <div className = "flex items-center gap-4">
       <button
  onClick={decrement}
  disabled={quantity === 1}
  className="rounded bg-green-700 px-4 py-2 text-white disabled:cursor-not-allowed disabled:opacity-50"
>
  -
</button>
        <span>{quantity}</span>
        <button 
        onClick={increment} 
        disabled={quantity === 20}
        className="rounded bg-green-700 px-4 py-2 text-white disabled:cursor-not-allowed disabled:opacity-50"
        >
            +</button>

      </div>
    </main>
  );
}