"use client";

import { useState } from "react";
import NewItem from "./new-item";
import itemsData from "./items.json";
import ItemList from "./item-list";
export default function Page() {
    const [items, setItems] = useState(itemsData);
    const handleAddItem = (newItem) => {
        setItems([...items, newItem]);
    };
    return (
        <main>
            <div className="mx-auto max-w-md">
                <h1 className="text-4xl font-bold text-white ">Shopping List</h1>
                <NewItem onAddItem={handleAddItem} />
                <ItemList items={items}/>
            </div>
        </main>
    );
}