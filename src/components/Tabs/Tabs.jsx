import React from "react";

const Tabs = () => {
  return (
    <div className="flex gap-2 p-4 bg-white-100 shadow rounded-md">
      <button className="btn btn-soft btn-primary">Meals</button>
      <button className="btn btn-soft btn-primary">Desserts</button>
      <button className="btn btn-soft btn-primary">Drinks</button>
      <button className="btn btn-soft btn-primary">Snacks</button>
    </div>
  );
};

export default Tabs;
