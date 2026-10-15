"use client";

import { useState } from "react";
import Item from "./item";
import items from "./items.json";

export default function ItemList() {
  const [sortBy, setSortBy] = useState("name");

  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === "category") {
      return (
        a.category.localeCompare(b.category) || a.name.localeCompare(b.name)
      );
    }
    return a.name.localeCompare(b.name);
  });

  const grouped = items.reduce((groups, item) => {
    if (!groups[item.category]) {
      groups[item.category] = [];
    }
    groups[item.category].push(item);
    return groups;
  }, {});

  const groupedCategories = Object.keys(grouped).sort();

  function buttonClass(value) {
    return `rounded-md px-4 py-2 font-semibold ${
      sortBy === value
        ? "bg-teal-600 text-white"
        : "bg-white text-teal-800 ring-1 ring-teal-200"
    }`;
  }

  return (
    <div className="mx-auto w-full max-w-md px-4">
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
        <button
          onClick={() => setSortBy("group")}
          className={buttonClass("group")}
        >
          Grouped
        </button>
      </div>

      {sortBy === "group" ? (
        groupedCategories.map((category) => (
          <section key={category} className="mb-4">
            <h2 className="mb-2 text-lg font-semibold capitalize text-teal-900">
              {category}
            </h2>
            <ul className="flex flex-col gap-2">
              {[...grouped[category]]
                .sort((a, b) => a.name.localeCompare(b.name))
                .map((item) => (
                  <Item
                    key={item.id}
                    name={item.name}
                    quantity={item.quantity}
                    category={item.category}
                  />
                ))}
            </ul>
          </section>
        ))
      ) : (
        <ul className="flex flex-col gap-2">
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