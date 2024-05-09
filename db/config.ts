import { defineDb, defineTable, column } from "astro:db";

const Activities = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    body: column.text(),
    distance: column.number({ optional: true }),
  },
});

// https://astro.build/db/config
export default defineDb({
  tables: { Activities },
});
