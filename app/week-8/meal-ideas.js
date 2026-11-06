"use client";
import { useState, useEffect } from "react";

async function fetchMealIdeas(ingredient) {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
    const data = await response.json();
    return data.meals;
}

export default function MealIdeas({ ingredient }) {
    const [meals, setMeals] = useState([]);
    const loadMealIdeas = async () => {
        const fetchedMeals = await fetchMealIdeas(ingredient);
        setMeals(fetchedMeals);
    };
    useEffect(() => {
        loadMealIdeas();
    }, [ingredient]);

    return (
        <div>
            <h2 className="text-xl font-bold mb-4">{`Meal ideas for "${ingredient}"`}</h2>
            {meals ? (
                <ul>
                    {meals.map((meal) => (
                        <li key={meal.idMeal} className="border-2 border-gray-400 p-2 mb-2 max-w-sm">
                            {meal.strMeal}
                        </li>))}
                </ul>
                ) : (
                <p>No meals found.</p>
            )}
        </div>
    );
}