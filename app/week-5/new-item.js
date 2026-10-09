
"use client";

import { useState } from "react";

export default function NewItem() {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

  const increment = () => {
    if (quantity < 20) {
      setQuantity(quantity + 1);
    }
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const item = {
      name: name,
      quantity: quantity,
      category: category,
    };

    console.log(item);

    alert(
      `Item: ${name}\nQuantity: ${quantity}\nCategory: ${category}`
    );

    setName("");
    setQuantity(1);
    setCategory("produce");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto bg-white p-8 rounded-3xl shadow-lg border border-sky-100"
    >
      <h2 className="text-3xl font-bold text-sky-400 mb-2 text-center">
        Add New Item
      </h2>

      <p className="text-center text-sky-400 mb-8">
        Add something to your shopping list
      </p>

      <label
        htmlFor="item-name"
        className="block text-lg font-semibold text-sky-600 mb-2"
      >
        Item Name
      </label>

      <input
        id="item-name"
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
        required
        placeholder="Enter item name"
        className="w-full p-3 mb-6 rounded-xl border-2 border-sky-100 bg-sky-50 text-gray-700 focus:outline-none focus:border-sky-300"
      />

      <label className="block text-lg font-semibold text-sky-600 mb-3">
        Quantity
      </label>

      <div className="flex items-center gap-4 mb-6">
        <span className="px-5 py-3 text-xl font-bold rounded-xl bg-sky-50 border border-sky-200 text-sky-700">
          {quantity}
        </span>

        <button
          type="button"
          onClick={decrement}
          disabled={quantity === 1}
          className="px-5 py-3 rounded-xl bg-sky-200 text-sky-800 font-bold hover:bg-sky-300 disabled:bg-gray-100 disabled:text-gray-400 transition"
        >
          -
        </button>

        <button
          type="button"
          onClick={increment}
          disabled={quantity === 20}
          className="px-5 py-3 rounded-xl bg-sky-200 text-sky-800 font-bold hover:bg-sky-300 disabled:bg-gray-100 disabled:text-gray-400 transition"
        >
          +
        </button>
      </div>

      <label
        htmlFor="category"
        className="block text-lg font-semibold text-sky-600 mb-2"
      >
        Category
      </label>

      <select
        id="category"
        value={category}
        onChange={(event) => setCategory(event.target.value)}
        className="w-full p-3 mb-8 rounded-xl border-2 border-sky-100 bg-sky-50 text-gray-700 focus:outline-none focus:border-sky-300"
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
        className="w-full bg-sky-200 hover:bg-sky-300 text-sky-900 font-bold text-lg py-4 rounded-xl shadow-sm transition"
      >
        Add Item
      </button>
    </form>
  );
}
