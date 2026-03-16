import React from "react";

const Tabs = () => {
  return (
    <div className="flex gap-2 p-4 bg-white-100 shadow rounded-md">
      <button className="btn text-white bg-orange-500 hover:bg-orange-600 border border-orange-500">
        Meals
      </button>
      <button className="btn border border-orange-300">Desserts</button>
      <button className="btn border border-orange-300">Drinks</button>
      <button className="btn border border-orange-300">Snacks</button>
    </div>
  );
};

export default Tabs;
