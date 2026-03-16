import { useState } from "react";
import "./App.css";
import Nav from "./components/Nav/Nav";
import Tabs from "./components/Tabs/Tabs";
import MealSection from "./components/MealSection/MealSection";
import { Suspense } from "react";

const foodData = fetch(
  "https://www.themealdb.com/api/json/v1/1/search.php?f=a",
).then((res) => res.json());

function App() {
  return (
    <section className="w-11/12 mx-auto">
      <Nav></Nav>
      <section>
        <div>
          <Tabs></Tabs>
        </div>
      </section>
      <section className="grid grid-cols-12 gap-8">
        <div className="col-span-8">
          <Suspense
            fallback={
              <h1 className="flex h-screen items-center justify-center">
                <span className="loading loading-ring loading-xl"></span>
              </h1>
            }
          >
            <MealSection foodData={foodData}></MealSection>
          </Suspense>
        </div>
        <div className="col-span-4">
          <div className="card bg-base-100 shadow-sm">
            <div className="card-body">
              <h2 className="card-title">Cart</h2>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

export default App;
