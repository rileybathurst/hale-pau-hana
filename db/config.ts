import { defineDb, defineTable, column } from "astro:db";

const Activities = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    body: column.text(),
    distance: column.number({ optional: true }),
  },
});

const Projects = defineTable({
  columns: {
    work: column.text(),
    activitiesId: column.number({ references: () => Activities.columns.id }),
  },
});

// https://astro.build/db/config
export default defineDb({
  tables: { Activities, Projects },
});
