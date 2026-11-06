"use client";

import { useEffect, useState } from "react";

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);
  useEffect(() => {
    if (!ingredient) {
      setMeals([]);
      return;
    }

    const searchIngredient = ingredient
      .split(",")[0]
      .trim()
      .toLowerCase()
      .replace(/s$/, "");

    const fetchMeals = async () => {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?i=${encodeURIComponent(searchIngredient)}`
      );
      const data = await response.json();
      setMeals(data.meals || []);
    };

    fetchMeals();
  }, [ingredient]);

    return (
    <div className="text-gray-900">
      <h2 className="text-2xl font-bold text-gray-900">Meal Ideas</h2>

      {ingredient && meals.length === 0 && (
        <p>No meal ideas found.</p>
      )}

      <div>
        {meals.map((meal) => (
          <div key={meal.idMeal}>
            <img
              src={meal.strMealThumb}
              alt={meal.strMeal}
              width="200"
            />
            <h3 className="font-semibold text-gray-900">{meal.strMeal}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}