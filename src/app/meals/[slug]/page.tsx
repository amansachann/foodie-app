import React from "react";

const MealDetailsPage = ({ params }: { params: { slug: string } }) => {
  return (
    <>
      <div>
        <h1>Dynamic Meal Page</h1>
        <p>{params.slug}</p>
      </div>
    </>
  );
};

export default MealDetailsPage;
