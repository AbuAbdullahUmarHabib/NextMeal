import React from "react";
import MealSection from "../MealSection/MealSection";

const Card = ({ meal }) => {
  return (
    <div className="card bg-base-100 shadow-sm">
      <figure>
        <img src={meal.strMealThumb} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{meal.strMeal}</h2>
        <p className="line-clamp-3">{meal.strInstructions}</p>
        <div className="flex gap-1 flex-wrap">
          <div className="badge badge-soft badge-warning border border-warning text-xs uppercase">
            {meal.strCategory}
          </div>
          <div className="badge badge-soft badge-info border border-info text-xs uppercase">
            {meal.strArea}
          </div>
        </div>
        <div className="grid grid-cols-12 gap-2 mt-4">
          <input type="number" placeholder="1" className="input col-span-2" />
          <button className="btn btn-primary col-span-10">Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
