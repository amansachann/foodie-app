import React from "react";

const MealDetailsPage = ({ params }: { params: { mealSlug: string } }) => {
  return (
    <>
      <div>
        <h1>Dynamic Meal Page</h1>
        <p>{params.mealSlug}</p>
      </div>
    </>
  );
};

export default MealDetailsPage;
