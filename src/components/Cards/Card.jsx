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
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
