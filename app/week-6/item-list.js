"use client";
import { useState } from "react";
import itemsData from "./items.json";
import Item from "./item";

export default function ItemList() {
   const [items, setItems] = useState(itemsData);
   const [sortBy, setSortBy] = useState("name");
   const [groupByCategory, setGroupByCategory] = useState(false);
   const sortedItems = [...items].sort((a, b) => {
    return a[sortBy].localeCompare(b[sortBy]);
   });
  const groupedItems = [...items]
  .sort((a, b) =>
    a.category.localeCompare(b.category) || a.name.localeCompare(b.name)
  )
  .reduce((groups, item) => {
  if (!groups[item.category]) {
    groups[item.category] = [];
  }

  groups[item.category].push(item);
  return groups;
}, {});
    return (
      <>
        <div className="mb-4 flex gap-2">
          <button
            onClick={() => setSortBy("name")}
            className={sortBy === "name" ? "rounded bg-blue-600 px-4 py-2 text-white" : "rounded bg-green-300 px-4 py-2"}
          >
            Sort by Name
          </button>
          <button
            onClick={() => setSortBy("category")}
            className={sortBy === "category" ? "rounded bg-blue-600 px-4 py-2 text-white" : "rounded bg-green-300 px-4 py-2"}
          >
            Sort by Category
          </button>
          <button
           onClick={() => setGroupByCategory(!groupByCategory)}
           className={groupByCategory ? "rounded bg-blue-600 px-4 py-2 text-white" : "rounded bg-green-300 px-4 py-2"}
>
  Group by Category
</button>
        </div>

        {groupByCategory ? (
          Object.entries(groupedItems).map(([category, items]) => (
            <div key={category} className="mb-4">
              <h2 className="text-lg font-bold capitalize text-green-900">{category}</h2>
              <ul className="space-y-3">
                {items.map((item) => (
                  <Item
                    key={item.id}
                    name={item.name}
                    quantity={item.quantity}
                    category={item.category}
                  />
                ))}
              </ul>
            </div>
          ))
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
      </>
    );
}