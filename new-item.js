"use client";

import { useState } from "react";

export default function NewItem() {
  const [quantity, setQuantity] = useState(1);

  function increment() {
    setQuantity((prev) => (prev < 20 ? prev + 1 : prev));
  }

  function decrement() {
    setQuantity((prev) => (prev > 1 ? prev - 1 : prev));
  }

  return (
    <div className="mx-auto flex w-full max-w-sm flex-col gap-4 rounded-lg bg-white p-6 shadow-sm ring-1 ring-teal-100">
      <h2 className="text-lg font-semibold text-teal-900">New Item</h2>
      <div className="flex items-center justify-between">
        <span className="font-medium text-slate-800">Quantity</span>
        <div className="flex items-center gap-3">
          <button
            onClick={decrement}
            disabled={quantity === 1}
            className="h-8 w-8 rounded-full bg-teal-600 text-lg font-bold text-white disabled:bg-slate-300"
          >
            -
          </button>
          <span className="w-6 text-center text-slate-800">{quantity}</span>
          <button
            onClick={increment}
            disabled={quantity === 20}
            className="h-8 w-8 rounded-full bg-teal-600 text-lg font-bold text-white disabled:bg-slate-300"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}
