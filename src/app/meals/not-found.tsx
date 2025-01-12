import Link from "next/link";
import React from "react";
import classes from "./page.module.css";

const NotFound = () => {
  return (
    <>
      <main className="not-found">
        <h1>Meal Not Found</h1>
        <p>Unfortunately, the meal you are looking for does not exist.</p>
        <p className={classes.cta}>
          <Link href="/meals">View all meals</Link>
        </p>
      </main>
    </>
  );
};

export default NotFound;
