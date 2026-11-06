"use client";

import { useEffect, useState } from "react";

async function fetchMealIdeas(ingredient) {
  const name = ingredient.replaceAll(" ", "_");
  const url = "https://www.themealdb.com/api/json/v1/1/filter.php?i=";
  const response = await fetch(url + encodeURIComponent(name));

  if (!response.ok) {
    throw new Error("Could not load meal ideas.");
  }

  const data = await response.json();
  return data.meals || [];
}

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);
  const [message, setMessage] = useState("Loading meal ideas...");

  useEffect(() => {
    if (!ingredient) return;

    let active = true;

    async function loadMealIdeas() {
      try {
        const results = await fetchMealIdeas(ingredient);
        if (!active) return;

        setMeals(results);
        setMessage(results.length ? "" : "No meal ideas found.");
      } catch {
        if (active) {
          setMessage("Could not load meal ideas.");
        }
      }
    }

    loadMealIdeas();

    return () => {
      active = false;
    };
  }, [ingredient]);

  return (
    <section className="flex-1 self-start rounded-2xl bg-white p-6 shadow-sm">
      <h2 className="mb-3 text-2xl font-bold text-pink-800">Meal Ideas</h2>

      <p aria-live="polite">
        {ingredient ? message : "Select an item to see meal ideas."}
      </p>

      <ul className="list-disc pl-5">
        {meals.map((meal) => (
          <li key={meal.idMeal}>{meal.strMeal}</li>
        ))}
      </ul>
    </section>
  );
}
