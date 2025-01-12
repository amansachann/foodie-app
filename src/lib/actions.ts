"use server";

import { redirect } from "next/navigation";
import { Meal, saveMeal } from "./meals";
import { revalidatePath } from "next/cache";

function isInvalidText(text: string) {
  return !text || text.trim() === "";
}

type ShareMealState = {
  message: string | null;
};

export async function shareMeal(prevState: ShareMealState, formData: FormData) {
  const meal: Meal = {
    title: formData.get("title") as string,
    summary: formData.get("summary") as string,
    instructions: formData.get("instructions") as string,
    image: formData.get("image") as File,
    creator: formData.get("name") as string,
    creator_email: formData.get("email") as string,
  };
  // Validate the input
  if (
    isInvalidText(meal.title) ||
    isInvalidText(meal.summary) ||
    isInvalidText(meal.instructions) ||
    !meal.image ||
    !meal.creator ||
    !meal.creator_email ||
    !meal.creator_email.includes("@") ||
    (meal.image instanceof File && meal.image.size === 0)
  ) {
    return { message: "Invalid input" };
  }
  await saveMeal(meal);
  revalidatePath("/meals");
  redirect("/meals");
}
