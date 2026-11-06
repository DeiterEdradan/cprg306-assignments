"use client";

import { useState } from "react";
import NewItem from "./new-item";
import ItemList from "./item-list";
import MealIdeas from "./meal-ideas";
import itemsData from "./items.json";

export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");

  function handleAddItem(newItem) {
    setItems([...items, newItem]);
  }

  function handleItemSelect(item) {
    // Remove size information after the comma
    let cleanedName = item.name.split(",")[0].trim();

    // Remove emojis and special characters
    cleanedName = cleanedName.replace(
      /[^\p{L}\p{N}\s-]/gu,
      ""
    ).trim();

    setSelectedItemName(cleanedName);
  }

  return (
    <main className="p-4">
      <h1 className="text-3xl font-bold mb-5">
        Shopping List
      </h1>

      <div className="flex flex-col md:flex-row gap-8">

        {/* Shopping List Section */}
        <div className="w-full md:w-1/2">

          <NewItem onAddItem={handleAddItem} />

          <ItemList
            items={items}
            onItemSelect={handleItemSelect}
          />

        </div>

        {/* Meal Ideas Section */}
        <div className="w-full md:w-1/2">

          <MealIdeas ingredient={selectedItemName} />

        </div>

      </div>
    </main>
  );
}
