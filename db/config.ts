import { defineDb, defineTable, column } from "astro:db";

const Activities = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    body: column.text(),
    distance: column.number(),
  },
});

// https://astro.build/db/config
export default defineDb({
  tables: { Activities },
});
