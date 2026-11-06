"use client";

import { useEffect, useState } from "react";

async function fetchMealIdeas(ingredient) {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?i=${encodeURIComponent(ingredient)}`
  );
  const data = await response.json();
  return data.meals || [];
}

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    async function loadMealIdeas() {
      const results = await fetchMealIdeas(ingredient);
      setMeals(results);
    }
    if (ingredient) {
      loadMealIdeas();
    }
  }, [ingredient]);

  return (
    <div className="w-full rounded-lg bg-white p-6 shadow-sm ring-1 ring-teal-100">
      <h2 className="mb-4 text-lg font-semibold text-teal-900">Meal Ideas</h2>
      {!ingredient ? (
        <p className="text-slate-600">Select an item to see meal ideas.</p>
      ) : (
        <>
          <p className="mb-3 text-slate-600">
            Meals with <span className="font-semibold capitalize">{ingredient}</span>
          </p>
          {meals.length === 0 ? (
            <p className="text-slate-600">No meal ideas found.</p>
          ) : (
            <ul className="flex flex-col gap-2">
              {meals.map((meal) => (
                <li
                  key={meal.idMeal}
                  className="rounded-md bg-teal-50 px-3 py-2 text-slate-800"
                >
                  {meal.strMeal}
                </li>
              ))}
            </ul>
          )}
        </>
      )}
    </div>
  );
}
