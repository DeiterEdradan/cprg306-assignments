"use client";
import { useState } from "react";
import Item from "./item";

export default function ItemList({ items }) {
    const [sortBy, setSortBy] = useState("name");
    let itemsCopy = [...items];

    if (sortBy == "name") {
        itemsCopy.sort((a, b) => {
            if (a.name < b.name) return -1;
            if (a.name > b.name) return 1;
            return 0;
        })
    }
    if (sortBy == "category") {
        itemsCopy.sort((a, b) => {
            if (a.category < b.category) return -1;
            if (a.category > b.category) return 1;
            return 0;
        })
    }

    return (
        <div>
            <ul>
                {itemsCopy.map((item) => (
                    <Item
                    key={item.id}
                    name={item.name}
                    quantity={item.quantity}
                    category={item.category}
                    />
                ))}
            </ul>

            <div className="flex">
                <button
                onClick={() => setSortBy("name")}
                className={`m-3 p-3 rounded ${sortBy === "name" ? "bg-yellow-500 text-white" : "bg-slate-700"}`}
                >Sort by Name</button>

                <button
                onClick={() => setSortBy("category")}
                className={`m-3 p-3 rounded ${sortBy === "category" ? "bg-yellow-500 text-white" : "bg-slate-700"}`}
                >Sort by Category</button>
            </div>
        </div>
    )
}
