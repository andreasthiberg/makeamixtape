import { MongoClient } from "mongodb";
import dotenv from "dotenv";
// Connect to MongoDB CLIENT.
dotenv.config();
const connectionString = process.env.ATLAS_URI || "";
const client = new MongoClient(connectionString);
let conn = null;
try {
    conn = await client.connect();
}
catch (e) {
    console.error(e);
}
// Get database from connection.
let db = null;
if (conn !== null) {
    db = conn.db("makeamixtape");
}
// Export database connection.
export { db };
