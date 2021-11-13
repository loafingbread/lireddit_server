import { MikroORM } from "@mikro-orm/core";
import { Post } from "./entities/Post";
import { __prod__ } from "./constants";
import microConfig from "./mikro-orm.config";

const main = async () => {
  const orm = await MikroORM.init(microConfig);
  await orm.getMigrator().up();
//   const post = orm.em.create(Post, { title: "my first post" });
//   orm.em.persistAndFlush(post);
  console.log("----------sql 2-----------");

//   const posts = await orm.em.find(Post, {});
//   console.log("posts: ", posts);
};

main().catch((error) => {
  console.error("main() errror: ", error);
});
