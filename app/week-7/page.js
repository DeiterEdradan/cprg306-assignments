"use client";

import { useState } from "react";
import NewItem from "./new-item";
import ItemList from "./item-list";
import itemsData from "./items.json";

export default function Page() {
  const [items, setItems] = useState(itemsData);

  function handleAddItem(newItem) {
    setItems((currentItems) => [...currentItems, newItem]);
  }

  return (
    <main className="min-h-screen bg-pink-50 px-4 py-10 text-pink-950">
      <div className="mx-auto max-w-md">
        <h1 className="mb-8 text-center text-4xl font-bold text-pink-700">
          Shopping List
        </h1>

        <NewItem onAddItem={handleAddItem} />
        <ItemList items={items} />
      </div>
    </main>
  );
}