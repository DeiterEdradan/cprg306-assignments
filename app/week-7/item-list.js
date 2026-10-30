"use client";

import { useState } from "react";
import Item from "./item";

export default function ItemList({ items }) {
  const [sortBy, setSortBy] = useState("name");

  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === "category") {
      return (
        a.category.localeCompare(b.category) ||
        a.name.localeCompare(b.name)
      );
    }

    return a.name.localeCompare(b.name);
  });

  return (
    <section>
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-xl font-semibold text-pink-800">
          Your items
        </h2>

        <span className="rounded-full bg-white px-3 py-1 text-sm text-pink-800">
          {items.length} items
        </span>
      </div>

      <div className="mb-5 flex flex-wrap gap-3">
        <button
          type="button"
          onClick={() => setSortBy("name")}
          aria-pressed={sortBy === "name"}
          className={`rounded-xl border px-4 py-2 font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600 ${
            sortBy === "name"
              ? "border-pink-300 bg-pink-200 text-pink-900"
              : "border-pink-200 bg-white text-pink-800 hover:bg-pink-100"
          }`}
        >
          Sort by Name
        </button>

        <button
          type="button"
          onClick={() => setSortBy("category")}
          aria-pressed={sortBy === "category"}
          className={`rounded-xl border px-4 py-2 font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600 ${
            sortBy === "category"
              ? "border-pink-300 bg-pink-200 text-pink-900"
              : "border-pink-200 bg-white text-pink-800 hover:bg-pink-100"
          }`}
        >
          Sort by Category
        </button>
      </div>

      <ul className="space-y-3">
        {sortedItems.map((item) => (
          <Item
            key={item.id}
            name={item.name}
            quantity={item.quantity}
            category={item.category}
          />
        ))}
      </ul>
    </section>
  );
}