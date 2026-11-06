"use client";

import { useState, useEffect } from "react";

// Fetch meal ideas from TheMealDB API
async function fetchMealIdeas(ingredient) {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?i=${encodeURIComponent(ingredient)}`
  );

  if (!response.ok) {
    throw new Error("Unable to retrieve meal ideas.");
  }

  const data = await response.json();

  return data.meals || [];
}

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!ingredient) {
      setMeals([]);
      return;
    }

    async function loadMealIdeas() {
      setLoading(true);
      setError("");

      try {
        const mealData = await fetchMealIdeas(ingredient);
        setMeals(mealData);
      } catch (err) {
        setError("Could not load meal ideas. Please try again.");
        setMeals([]);
      } finally {
        setLoading(false);
      }
    }

    loadMealIdeas();
  }, [ingredient]);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">
        Meal Ideas
      </h2>

      {!ingredient && (
        <p className="text-gray-600">
          Select an item from your shopping list to see meal ideas.
        </p>
      )}

      {loading && (
        <p>Loading meal ideas...</p>
      )}

      {error && (
        <p className="text-red-600">{error}</p>
      )}

      {!loading && !error && ingredient && meals.length === 0 && (
        <p>No meal ideas found for {ingredient}.</p>
      )}

      {!loading && meals.length > 0 && (
        <ul className="space-y-3">
          {meals.map((meal) => (
            <li
              key={meal.idMeal}
              className="rounded-lg bg-white p-3 text-black shadow-sm"
            >
              <p className="font-medium">
                {meal.strMeal}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
