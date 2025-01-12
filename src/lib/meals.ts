import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";
import fs from "node:fs";

const db = sql("meals.db");

export type Meal = {
  id?: string;
  slug?: string;
  title: string;
  image: File | string;
  summary: string;
  creator: string;
  creator_email: string;
  instructions: string;
};

export type StoredMeal = {
  id: string;
  slug: string;
  title: string;
  image: string;
  summary: string;
  creator: string;
  creator_email: string;
  instructions: string;
};

export async function getMeals(): Promise<StoredMeal[]> {
  // await new Promise((resolve) => setTimeout(resolve, 2000));
  return db.prepare("SELECT * FROM meals").all() as StoredMeal[];
}

export function getMeal(slug: string): StoredMeal | undefined {
  return db
    .prepare("SELECT * FROM meals WHERE slug = ?")
    .get(slug) as StoredMeal;
}

export async function saveMeal(meal: Meal) {
  meal.slug = slugify(meal.title, { lower: true });
  meal.instructions = xss(meal.instructions);

  if (!(meal.image instanceof File)) {
    throw new Error("Image must be a file");
  }
  const extension = meal.image.name.split(".").pop();
  const fileName = `${meal.slug}.${extension}`;

  const stream = fs.createWriteStream(`public/images/${fileName}`);
  const bufferedImage = await meal.image.arrayBuffer();
  stream.write(Buffer.from(bufferedImage), (error) => {
    if (error) {
      throw new Error("Error saving image");
    }
  });
  meal.image = `/images/${fileName}`;
  // const finalMeal = { ...meal, image: `/images/${fileName}` };
  db.prepare(
    "INSERT INTO meals (title, slug, image, summary, instructions, creator, creator_email) VALUES (@title, @slug, @image, @summary, @instructions, @creator, @creator_email)"
  ).run(meal);
}
