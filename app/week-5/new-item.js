"use client";
import { useState } from "react";

export default function NewItem() {
    const [quantity, setQuantity] = useState(1);
    const [name, setName] = useState("");
    const [category, setCategory] = useState("produce");
    const increment = () => {
        if (quantity < 20) {
            setQuantity(quantity + 1);
        }
    };
    const decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const item = { name, quantity, category };
        console.log(item);
        alert(`Item added: ${name}, Quantity: ${quantity}, Category: ${category}`);
        setName("");
        setQuantity(1);
        setCategory("produce");
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white p-4 text-black">
            <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Item Name"
            className="border-2 border-gray-400 p-2"
            required
            />

            <div className="flex items-center gap-2 mt-3">
                <span className="border-2 border-gray-400 p-2 text-xl font-bold">{quantity}</span>
                <button
                    type="button"
                    onClick={decrement}
                    disabled={quantity ==1}
                    className="bg-blue-500 p-2 hover:bg-blue-700 text-white font-bold rounded disabled:bg-slate-400 disabled:cursor-not-allowed"
                    >
                        -
                </button>
                <button
                    type="button"
                    onClick={increment}
                    disabled={quantity ==20}
                    className="bg-blue-500 p-2 hover:bg-blue-700 text-white font-bold rounded disabled:bg-slate-400 disabled:cursor-not-allowed"
                    >
                        +
                </button>

                <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="border-2 border-gray-400 p-2"
                >
                    <option value="produce">Produce</option>
                    <option value="dairy">Dairy</option>
                    <option value="bakery">Bakery</option>
                    <option value="meat">Meat</option>
                    <option value="frozen_foods">Frozen Foods</option>
                    <option value="canned_goods">Canned Goods</option>
                    <option value="dry_goods">Dry Goods</option>
                    <option value="beverages">Beverages</option>
                    <option value="snacks">Snacks</option>
                    <option value="household">Household</option>
                    <option value="other">Other</option>
                </select>
            </div>
            <div className="flex justify-center">
                <button type="submit" className="bg-blue-500 p-2 hover:bg-blue-700 text-white font-bold rounded mt-3">
                    Add Item
                </button>
            </div>
            </form>
        );
    }
