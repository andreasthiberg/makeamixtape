import { ObjectId, Collection } from "mongodb";
import { db } from "./connect.js"

let userModel = {

    // Get data for specific user from db using ID. 
    getUser: async function getUser (id: number) {
        const collection : Collection = db.collection("users");

        // Check for db error.
        try {
            const objectId = new ObjectId(id);
            const user = await collection.findOne({ _id: objectId });
            if (user) {
                return { success: true, data: user };
            } else {
                return { success: false, message: "User not found" };
            }

        } catch (error) {
            console.error('Error fetching data from db:', error);
            throw error;
        }
    },

    // Get all users from databases.
    getAllUsers: async function getAllUsers () {
        const collection = db.collection("users");

        // Check for db error.
        try {
            const users = await collection.find({}).toArray();
            return users;

        } catch (error) {
            console.error('Error fetching data from db:', error);
            throw error;
        }

    },
    
    // Delete specific user from database.
    deleteUserByID: async function deleteUserByID(id: number) {
        const collection = db.collection("users");

        // Check for db error.
        try {
            const objectId = new ObjectId(id);
            const result = await collection.deleteOne({ _id: objectId });

            // Check if a user was deleted successfully.
            if (result.deletedCount === 1) {
            return { success: true, message: "User deleted successfully" };
            } else {
            return { success: false, message: "User not found" };
            }
        } catch (error) {
            console.error("Error deleting user from the database:", error);
            throw error;
        }
    },

    // Add a new user to database.
    createUser: async function createUser(userData: {username: string; password: string}) {
        const collection  = db.collection("users");

        // Check for db error.
        try {
            const result = await collection.insertOne(userData);
            if (result.acknowledged) {
                return { success: true, data: userData };
            } else {
                return { success: false, data: userData };
            }
        } catch (error) {
            console.error("Error inserting user into database:", error);
            throw error;
        }
    }
}

export default userModel;
