
"use client";

import { useState } from "react";
import Item from "./item";
import items from "./items.json";

export default function ItemList() {
  const [sortBy, setSortBy] = useState("name");

  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    }

    return a.category.localeCompare(b.category);
  });

return (
    <section><div className="mb-4 flex flex-wrap gap-3">
        <button
        onClick={() => setSortBy("name")}
        className={`rounded-md px-4 py-2 font-medium text-white ${sortBy === "name"
        ? "bg-blue-700"
        : "bg-gray-500 hover:bg-gray-600"}`}>Sort by Name</button>

        <button
          onClick={() => setSortBy("category")}
          className={`rounded-md px-4 py-2 font-medium text-white ${sortBy === "category"
          ? "bg-blue-700"
          : "bg-gray-500 hover:bg-gray-600"}`}>Sort by Category</button></div>

    <ul>
{sortedItems.map((item) => (

<Item

    key={item.id}
    name={item.name}
    quantity={item.quantity}
    category={item.category}/>))}</ul></section>
  );
}
