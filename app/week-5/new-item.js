"use client";

import { useState } from "react";

export default function NewItem() {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

  function increment() {
    if (quantity < 20) {
      setQuantity(quantity + 1); }

  }

  function decrement() {
    if (quantity > 1) {
      setQuantity(quantity - 1); }

  }

  function handleSubmit(event) { event.preventDefault();
    const item = {
      name: name,
      quantity: quantity,
      category: category
    };

    console.log(item);

    alert(
      "Item Name: " + name +
      "\nQuantity: " + quantity +
      "\nCategory: " + category
    );

    setName("");
    setQuantity(1);
    setCategory("produce"); }

  return ( <form onSubmit={handleSubmit}
  className="mx-auto mt-8 max-w-md space-y-5 rounded-lg bg-white p-6 shadow-lg" >
  <h2 className="text-2xl font-bold text-gray-800">Add New Item</h2>

{/* Item Name */}
<div><label htmlFor="name" className="mb-1 block">Item Name</label> 

<input
  id="name"
  type="text"
  value={name}
  onChange={(event) => setName(event.target.value)} required
  className="w-full rounded border p-2 text-gray-900"/> </div>

      {/* Quantity */}

      <div><label className="mb-2 block">Quantity </label>

      <div className="flex items-center gap-4"> 
        <button
        type="button"
        onClick={decrement}
        disabled={quantity === 1}
        className="rounded bg-red-500 px-4 py-2 text-white
      hover:bg-red-600 disabled:cursor-not-allowed disabled:bg-gray-400">-</button>

      <span className="text-xl font-bold text-gray-900">{quantity}</span> 
       <button
      type="button"
      onClick={increment}
      disabled={quantity === 20}
      className="rounded bg-green-500 px-4 py-2text-white 
      hover:bg-green-600 disabled:cursor-not-allowed disabled:bg-gray-400">+</button></div>
      </div>

      {/* Category */}

      <div><label htmlFor="category" className="mb-1 block">Category</label>
       <select
       id="category"
       value={category}
       onChange={(event) => setCategory(event.target.value)}
       className="w-full rounded border p-2 text-gray-900">

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
        </select></div>

      {/* Submit Button */}
      <button type="submit"
      className="w-full rounded bg-blue-600 p-2 font-semibold 
      text-white hover:bg-blue-700"> Add Item </button></form>);
}