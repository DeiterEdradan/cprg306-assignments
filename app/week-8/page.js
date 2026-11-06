"use client";

import { useState } from "react";
import MealIdeas from "./meal-ideas";
import NewItem from "./new-item";
import ItemList from "./item-list";
import itemsData from "./items.json";

export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [selectedIngredient, setSelectedIngredient] = useState("");

    const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  };

  const handleSelectIngredient = (ingredient) => {
    setSelectedIngredient(ingredient);
  };

  return (
    <main className="min-h-screen bg-green-50 p-8">
      <h1 className="mb-6 text-4xl font-bold text-green-800">Shopping List</h1>
      <NewItem onAddItem={handleAddItem} />
      <ItemList
  items={items}
  onSelectIngredient={handleSelectIngredient}
/>
      <MealIdeas ingredient={selectedIngredient} />
    </main>
  );
}   