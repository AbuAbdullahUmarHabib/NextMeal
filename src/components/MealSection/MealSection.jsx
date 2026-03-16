import React, { use } from "react";
import Card from "../Cards/Card";

const MealSection = ({ foodData }) => {
  const allMealData = use(foodData);
  const meals = allMealData.meals;
  console.log(meals);
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-8 p-4 rounded-md">
      {meals.map((meal) => (
        <Card meal={meal}></Card>
      ))}
    </div>
  );
};

export default MealSection;
