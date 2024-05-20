import { db, Activities, Projects } from "astro:db";

// https://astro.build/db/seed
export default async function () {
  await db.insert(Activities).values([
    { id: 1, body: "Hope you like Astro DB!" },
    { id: 2, body: "Enjoy!", distance: 8 },
  ]);

  await db.insert(Projects).values([
    { activitiesId: 1, work: "hey" },
    { activitiesId: 1, work: "now!" },
  ]);
}
