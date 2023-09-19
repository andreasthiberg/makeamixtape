import { MongoClient, Db } from "mongodb";
import dotenv from "dotenv";

// Connect to MongoDB CLIENT.
dotenv.config()
const connectionString = process.env.ATLAS_URI || "";
const client = new MongoClient(connectionString);

let conn = await client.connect()

// Get database from connection.
let db: Db = conn.db("makeamixtape");

// Export database connection.
export { db };