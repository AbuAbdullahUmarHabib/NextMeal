import { CircleX } from "lucide-react";
import React from "react";

const Cart = ({ cart, handleOrder }) => {
  return (
    <div className="mb-8">
      {cart.map((item) => (
        <ul className="list bg-base-100 rounded-box shadow mb-4">
          <li className="list-row">
            <div>
              <img className="size-10 rounded-box" src={item.strMealThumb} />
            </div>
            <div>
              <div>{item.strMeal}</div>
              <div className="text-xs uppercase font-semibold opacity-60">
                A recipe from {item.strArea}
              </div>
            </div>

            <button className="btn btn-square btn-ghost">
              <CircleX color="#d0d0d2" />
            </button>
          </li>
        </ul>
      ))}
      <button onClick={handleOrder} className="btn btn-success w-full">
        Place Order
      </button>
    </div>
  );
};

export default Cart;
