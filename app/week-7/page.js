"use client";

import { useState } from "react";
import NewItem from "./new-item";
import ItemList from "./item-list";
import itemsData from "./items.json";

export default function Page() {
  const [items, setItems] = useState(itemsData);

  function handleAddItem(newItem) {
    setItems((prevItems) => [...prevItems, newItem]);
  }

  return (
    <main className="min-h-screen bg-teal-50 py-10">
      <h1 className="mb-6 text-center text-3xl font-bold text-teal-900">
        Shopping List
      </h1>
      <div className="flex flex-col gap-6">
        <NewItem onAddItem={handleAddItem} />
        <ItemList items={items} />
      </div>
    </main>
  );
}