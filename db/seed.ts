import { db, Activities } from "astro:db";

// https://astro.build/db/seed
export default async function seed() {
  await db.insert(Activities).values([
    {
      id: 1,
      body: "The humpback whales may treat you to a show anytime between December and April.",
    },
    {
      id: 2,
      body: `About 5 miles north of HPH is  outstanding windsurfing and t is where the giant green turtles come to lay their eggs. You may see yellow  road signs warning of turtle crossings. (they don't last long)!`,
      distance: 5,
    },
  ]);
}
