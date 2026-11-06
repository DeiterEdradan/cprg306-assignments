"use client";

import { useState } from "react";
import Item from "./item";

export default function ItemList({ items, onItemSelect }) {
  const [sortBy, setSortBy] = useState("name");

  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === "category") {
      return (
        a.category.localeCompare(b.category) || a.name.localeCompare(b.name)
      );
    }
    return a.name.localeCompare(b.name);
  });

  function buttonClass(value) {
    return `rounded-md px-4 py-2 font-semibold ${
      sortBy === value
        ? "bg-teal-600 text-white"
        : "bg-white text-teal-800 ring-1 ring-teal-200"
    }`;
  }

  return (
    <div className="w-full">
      <div className="mb-4 flex gap-2">
        <button onClick={() => setSortBy("name")} className={buttonClass("name")}>
          Name
        </button>
        <button
          onClick={() => setSortBy("category")}
          className={buttonClass("category")}
        >
          Category
        </button>
      </div>
      <ul className="flex flex-col gap-2">
        {sortedItems.map((item) => (
          <Item
            key={item.id}
            name={item.name}
            quantity={item.quantity}
            category={item.category}
            onSelect={() => onItemSelect(item)}
          />
        ))}
      </ul>
    </div>
  );
}
