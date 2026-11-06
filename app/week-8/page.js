"use client";

import { useState } from "react";
import NewItem from "./new-item";
import itemsData from "./items.json";
import ItemList from "./item-list";
import MealIdeas from "./meal-ideas";

export default function Page() {
    const [items, setItems] = useState(itemsData);
    const [selectedItemName, setSelectedItemName] = useState("");
    const handleAddItem = (newItem) => {
        setItems([...items, newItem]);
    };

    const handleItemSelect = (item) => {
        let cleanedName = item.name.split(",")[0];
        cleanedName = cleanedName.replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, '').trim();
        setSelectedItemName(cleanedName);
    };

    return (
        <main className="p-8">
            <h1 className="text-4xl font-bold mb-6">Shopping List + Meal Ideas</h1>
            <div className="flex gap-8">

                <div className="flex-1">
                <NewItem onAddItem={handleAddItem} />
                <ItemList items={items} onItemSelect={handleItemSelect} />
                </div>

                <div className="flex-1">
                    {selectedItemName && <MealIdeas ingredient={selectedItemName} />}
                    {!selectedItemName && <p>Choose an item to see ideas.</p>}
                </div>
                
            </div>
        </main>
    );
}
