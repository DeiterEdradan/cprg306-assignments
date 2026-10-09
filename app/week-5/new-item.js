"use client";
import { useState } from "react";
export default function NewItem() {
  const [quantity, setQuantity] = useState(1);
  const [name, setName] = useState("");
const [category, setCategory] = useState("produce");
  const increment = () => setQuantity(Math.min(quantity + 1, 20));
  const decrement = () => setQuantity(Math.max(quantity - 1, 1));
  const handleSubmit = (event) => {
  event.preventDefault();

  const item = { name, quantity, category };
  console.log(item);
  alert(`Name: ${name}, Quantity: ${quantity}, Category: ${category}`);

  setName("");
  setQuantity(1);
  setCategory("produce");
};
  const btn = "rounded bg-purple-600 px-4 py-2 text-white hover:bg-purple-700 disabled:cursor-not-allowed disabled:opacity-50";
  const field = "rounded border border-purple-300 p-2";

  return (
    <main className="p-8">
      <h1 className="mb-6 text-4xl font-bold text-purple-900">New Item</h1>
      <form
        onSubmit={handleSubmit}
        className="flex max-w-sm flex-col gap-4 rounded-xl bg-white p-6 shadow"
      >
        <label className="flex flex-col gap-1 font-medium">
          Item Name
          <input
            className={field}
            type="text"
            required
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </label>

        <label className="flex flex-col gap-1 font-medium">
          Category
          <select
            className={field}
            value={category}
            onChange={(event) => setCategory(event.target.value)}
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
        </label>

        <div className="flex items-center gap-4">
          <span className="font-medium">Quantity</span>
          <button type="button" onClick={decrement} disabled={quantity === 1} className={btn}>
            -
          </button>
          <span className="w-8 text-center">{quantity}</span>
          <button type="button" onClick={increment} disabled={quantity === 20} className={btn}>
            +
          </button>
        </div>

        <button type="submit" className={btn}>
          Add Item
        </button>
      </form>
    </main>
  );
}