"use client";
import { useState } from "react";

export default function NewItem() {
    const [quantity, setQuantity] = useState(1);
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
    return (
        <div className="bg-white p-4 flex items-center gap-2 text-black">
            <span className="border-2 border-gray-400 p-2 text-xl font-bold">{quantity}</span>
            <button
                onClick={decrement}
                disabled={quantity ==1}
                className="bg-blue-500 p-2 hover:bg-blue-700 text-white font-bold rounded disabled:bg-slate-400 disabled:cursor-not-allowed"
                >
                    -
            </button>
            <button
                onClick={increment}
                disabled={quantity ==20}
                className="bg-blue-500 p-2 hover:bg-blue-700 text-white font-bold rounded disabled:bg-slate-400 disabled:cursor-not-allowed"
                >
                    +
            </button>
        </div>
    );
}