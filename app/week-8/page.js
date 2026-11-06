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
    setItems((currentItems) => [...currentItems, newItem]);
  }

  function handleItemSelect(item) {
    const name = item.name
      .split(",")[0]
      .replace(/[\p{Extended_Pictographic}\p{Regional_Indicator}\p{Emoji_Modifier}\u200d\ufe0f]/gu, "")
      .trim()
      .toLowerCase();
    setSelectedItemName(name === "chicken breasts" ? "chicken breast" : name);
  }

  return (
    <main className="min-h-screen bg-pink-50 px-4 py-10 text-pink-950">
      <div className="mx-auto max-w-5xl">
        <h1 className="mb-8 text-center text-4xl font-bold text-pink-700">
          Shopping List
        </h1>

        <div className="flex flex-col gap-8 md:flex-row">
          <div className="min-w-0 flex-1">
            <NewItem onAddItem={handleAddItem} />
            <ItemList items={items} onItemSelect={handleItemSelect} />
          </div>
          <MealIdeas key={selectedItemName} ingredient={selectedItemName} />
        </div>
      </div>
    </main>
  );
}
