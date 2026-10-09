"use client";

import { useState } from "react";

const categories = [
  "Produce",
  "Dairy",
  "Bakery",
  "Meat",
  "Frozen Foods",
  "Canned Goods",
  "Dry Goods",
  "Beverages",
  "Snacks",
  "Household",
  "Other",
];

export default function NewItem() {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

  function increment() {
    setQuantity((prev) => (prev < 20 ? prev + 1 : prev));
  }

  function decrement() {
    setQuantity((prev) => (prev > 1 ? prev - 1 : prev));
  }

  function handleSubmit(event) {
    event.preventDefault();
    const item = { name, quantity, category };
    console.log(item);
    alert(`Name: ${name}\nQuantity: ${quantity}\nCategory: ${category}`);
    setName("");
    setQuantity(1);
    setCategory("produce");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto flex w-full max-w-sm flex-col gap-4 rounded-lg bg-white p-6 shadow-sm ring-1 ring-teal-100"
    >
      <h2 className="text-lg font-semibold text-teal-900">New Item</h2>

      <input
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
        placeholder="Item name"
        required
        className="rounded-md border border-slate-300 px-3 py-2 text-slate-800 focus:border-teal-600 focus:outline-none"
      />

      <div className="flex items-center justify-between">
        <span className="font-medium text-slate-800">Quantity</span>
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={decrement}
            disabled={quantity === 1}
            className="h-8 w-8 rounded-full bg-teal-600 text-lg font-bold text-white disabled:bg-slate-300"
          >
            -
          </button>
          <span className="w-6 text-center text-slate-800">{quantity}</span>
          <button
            type="button"
            onClick={increment}
            disabled={quantity === 20}
            className="h-8 w-8 rounded-full bg-teal-600 text-lg font-bold text-white disabled:bg-slate-300"
          >
            +
          </button>
        </div>
      </div>

      <select
        value={category}
        onChange={(event) => setCategory(event.target.value)}
        className="rounded-md border border-slate-300 px-3 py-2 text-slate-800 focus:border-teal-600 focus:outline-none"
      >
        {categories.map((cat) => (
          <option key={cat} value={cat.toLowerCase()}>
            {cat}
          </option>
        ))}
      </select>

      <button
        type="submit"
        className="rounded-md bg-teal-600 px-4 py-2 font-semibold text-white hover:bg-teal-700"
      >
        Add Item
      </button>
    </form>
  );
}