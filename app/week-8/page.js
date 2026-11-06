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
    setItems((prevItems) => [...prevItems, newItem]);
  }

  function handleItemSelect(item) {
    const cleanedName = item.name
      .split(",")[0]
      .replace(/[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}\u{FE0F}]/gu, "")
      .trim();
    setSelectedItemName(cleanedName);
  }

  return (
    <main className="min-h-screen bg-teal-50 px-4 py-10">
      <h1 className="mb-6 text-center text-3xl font-bold text-teal-900">
        Shopping List
      </h1>
      <div className="mx-auto flex max-w-4xl flex-col gap-6 md:flex-row md:items-start">
        <div className="flex w-full flex-col gap-6 md:w-1/2">
          <NewItem onAddItem={handleAddItem} />
          <ItemList items={items} onItemSelect={handleItemSelect} />
        </div>
        <div className="w-full md:w-1/2">
          <MealIdeas ingredient={selectedItemName} />
        </div>
      </div>
    </main>
  );
}
