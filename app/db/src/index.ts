import  { drizzle } from "drizzle-orm/postgres-js"
import postgres from "postgres"
import * as schema from "./schema"


let _db: ReturnType<typeof drizzle> | null = null;

function getDb(){
    if(!process.env.DATABASE_URL){
        throw new Error(`the database is not set`)
    }

    if(!_db){
        const client = postgres(process.env.DATABASE_URL )
        _db = drizzle(client, {schema})
    }
    

    return _db;
}

export const db = new Proxy({} as ReturnType<typeof drizzle>, {
get(target, prop){
return getDb()[prop as keyof typeof _db];
}
})

export * from "./schema";

export {
  eq,
  and,
  or,
  not,
  isNull,
  isNotNull,
  inArray,
  notInArray,
  exists,
  notExists,
  sql,
} from "drizzle-orm"