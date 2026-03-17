import React, { use, useState } from "react";
import Card from "../Cards/Card";
import Cart from "../Cart/Cart";
import { ToastContainer, toast } from "react-toastify";

const MealSection = ({ foodData }) => {
  const allMealData = use(foodData);
  const meals = allMealData.meals;

  const [cart, setCart] = useState([]);
  const addToCart = (mealData) => {
    setCart([...cart, mealData]);
  };
  const handleOrder = () => {
    setCart([]);
    alert("Thanks for your order");
    toast.success("Order Completed");
  };

  const removeCart = (mealId) => {
    setCart(cart.filter((meal) => meal.idMeal !== mealId));
  };
  return (
    <section className="grid grid-cols-12">
      <div className="col-span-8">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 p-4 rounded-md">
          {meals.map((meal) => (
            <Card key={meal.idMeal} addToCart={addToCart} meal={meal}></Card>
          ))}
        </div>
      </div>
      <div className="col-span-4 p-4">
        <div className="card bg-base-100 shadow">
          <div className="card-body">
            <h2 className="card-title">Cart</h2>
            <Cart
              removeCart={removeCart}
              handleOrder={handleOrder}
              cart={cart}
            ></Cart>
          </div>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
};

export default MealSection;
