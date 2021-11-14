import { IDatabaseDriver, Connection } from "@mikro-orm/core";
import { EntityManager } from "@mikro-orm/knex";

export type MyContext {
    em: EntityManager<IDatabaseDriver<Connection>>;
}
