import { drizzle, PostgresJsDatabase } from "drizzle-orm/postgres-js";

import postgres from "postgres";
const queryClient = postgres(process.env.NITRO_DB_URL);
export const db: PostgresJsDatabase = drizzle(queryClient, { logger: true });
