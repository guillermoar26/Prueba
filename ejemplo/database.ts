import { MongoClient, ObjectID } from "mongo";
import { config } from "dotenv";
import { CarSchema } from "./schemas";

const env = config();
if (!env.MONGO_USR || !env.MONGO_PWD) {
    throw new Error("Missing MONGO_USR or MONGO_PWD");
}

const dbName = "Cabify";

const client = new MongoClient();
// Connecting to a Mongo Atlas Database
await client.connect(
    // crear base de datos en mongo
    //`mongodb+srv://${env.MONGO_USR}:${env.MONGO_PWD}@cluster
);

const db = client.database("test");
console.info(`Mongo DB ${dbName} connected`);

export const carsCollection = db.collection<CarSchema>("Cars");