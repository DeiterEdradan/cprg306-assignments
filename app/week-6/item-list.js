"use client";

import { useState } from "react";
import Item from "./item";
import items from "./items.json";

export default function ItemList() {
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

  const groupedItems = sortedItems.reduce((groups, item) => {
    if (!groups[item.category]) {
      groups[item.category] = [];
    }

    groups[item.category].push(item);

    return groups;
  }, {});

  const categories = Object.keys(groupedItems).sort((a, b) =>
    a.localeCompare(b)
  );

  function buttonClass(value) {
    return `rounded-lg border border-pink-200 px-4 py-2 font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-700 ${
      sortBy === value
        ? "bg-pink-200 text-pink-900"
        : "bg-white text-pink-700 hover:bg-pink-50"
    }`;
  }

  return (
    <div>
      <div className="mb-6 flex flex-wrap items-center gap-3">
        <span className="font-semibold text-pink-950">
          Sort by:
        </span>

        <button
          type="button"
          onClick={() => setSortBy("name")}
          className={buttonClass("name")}
          aria-pressed={sortBy === "name"}
        >
          Name
        </button>

        <button
          type="button"
          onClick={() => setSortBy("category")}
          className={buttonClass("category")}
          aria-pressed={sortBy === "category"}
        >
          Category
        </button>

        <button
          type="button"
          onClick={() => setSortBy("group")}
          className={buttonClass("group")}
          aria-pressed={sortBy === "group"}
        >
          Group by Category
        </button>
      </div>

      {sortBy === "group" ? (
        <div className="space-y-6">
          {categories.map((category) => (
            <section key={category}>
              <h2 className="mb-3 text-2xl font-bold capitalize text-pink-700">
                {category}
              </h2>

              <ul className="space-y-3">
                {groupedItems[category].map((item) => (
                  <Item
                    key={item.id}
                    name={item.name}
                    quantity={item.quantity}
                    category={item.category}
                  />
                ))}
              </ul>
            </section>
          ))}
        </div>
      ) : (
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
      )}
    </div>
  );
}