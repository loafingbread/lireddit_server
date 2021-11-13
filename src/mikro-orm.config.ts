import path from "path";
import { Options } from "@mikro-orm/core";
import { Post } from "./entities/Post";
import { __prod__ } from "./constants";

const config: Options = {
  migrations: {
    path: path.join(__dirname, "migrations"), // path to the folder with migrations
    pattern: /^[\w-]+\d+\.[tj]s$/, // regex pattern for the migration files
  },
  entities: [Post],
  dbName: "lireddit",
  user: "postgres",
  password: "postgres",
  type: "postgresql",
  debug: !__prod__,
};

export default config;
