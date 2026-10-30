"use client";

import { useState } from "react";

export default function NewItem({ onAddItem }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

  function increment() {
    setQuantity((current) => Math.min(20, current + 1));
  }

  function decrement() {
    setQuantity((current) => Math.max(1, current - 1));
  }

  function handleSubmit(event) {
    event.preventDefault();

    const trimmedName = name.trim();
    if (!trimmedName) return;

    onAddItem({
      id: crypto.randomUUID(),
      name: trimmedName,
      quantity,
      category,
    });

    setName("");
    setQuantity(1);
    setCategory("produce");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mb-8 rounded-2xl border border-pink-200 bg-white p-6 shadow-sm"
    >
      <h2 className="mb-5 text-xl font-semibold text-pink-800">
        Add a new item
      </h2>

      <label
        htmlFor="item-name"
        className="mb-2 block font-medium text-pink-900"
      >
        Item name
      </label>

      <input
        id="item-name"
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
        placeholder="What do you need?"
        required
        className="w-full rounded-xl border border-pink-200 bg-white p-3 text-pink-950 placeholder:text-pink-400 focus:outline-none focus:ring-2 focus:ring-pink-300"
      />

      <div className="mt-5">
        <span className="mb-2 block font-medium text-pink-900">
          Quantity
        </span>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={decrement}
            disabled={quantity === 1}
            aria-label="Decrease quantity"
            className="h-10 w-10 rounded-xl bg-pink-100 font-bold text-pink-800 hover:bg-pink-200 focus-visible:outline-2 focus-visible:outline-pink-600 disabled:cursor-not-allowed disabled:opacity-40"
          >
            -
          </button>

          <span
            aria-live="polite"
            className="min-w-10 text-center text-lg font-semibold text-pink-900"
          >
            {quantity}
          </span>

          <button
            type="button"
            onClick={increment}
            disabled={quantity === 20}
            aria-label="Increase quantity"
            className="h-10 w-10 rounded-xl bg-pink-100 font-bold text-pink-800 hover:bg-pink-200 focus-visible:outline-2 focus-visible:outline-pink-600 disabled:cursor-not-allowed disabled:opacity-40"
          >
            +
          </button>
        </div>
      </div>

      <label
        htmlFor="item-category"
        className="mb-2 mt-5 block font-medium text-pink-900"
      >
        Category
      </label>

      <select
        id="item-category"
        value={category}
        onChange={(event) => setCategory(event.target.value)}
        className="w-full rounded-xl border border-pink-200 bg-white p-3 text-pink-950 focus:outline-none focus:ring-2 focus:ring-pink-300"
      >
        <option value="produce">Produce</option>
        <option value="dairy">Dairy</option>
        <option value="bakery">Bakery</option>
        <option value="meat">Meat</option>
        <option value="frozen foods">Frozen Foods</option>
        <option value="canned goods">Canned Goods</option>
        <option value="dry goods">Dry Goods</option>
        <option value="beverages">Beverages</option>
        <option value="snacks">Snacks</option>
        <option value="household">Household</option>
        <option value="other">Other</option>
      </select>

      <button
        type="submit"
        className="mt-6 w-full rounded-xl bg-pink-200 p-3 font-semibold text-pink-900 transition-colors hover:bg-pink-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600"
      >
        + Add Item
      </button>
    </form>
  );
}