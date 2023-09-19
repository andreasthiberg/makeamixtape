import { ObjectId } from "mongodb";
import { db } from "./connect.js";
let mixtapeModel = {
    // Get data for specific mixtape from db using ID. 
    getMixtape: async function getMixtape(id) {
        const collection = db.collection("mixtapes");
        // Check for db error.
        try {
            const objectId = new ObjectId(id);
            const mixtape = await collection.findOne({ _id: objectId });
            if (mixtape) {
                return { success: true, data: mixtape };
            }
            else {
                return { success: false, message: "Mixtape not found" };
            }
        }
        catch (error) {
            console.error('Error fetching data from db:', error);
            throw error;
        }
    },
    // Get all mixtapes from databases.
    getAllMixtapes: async function getAllMixtapes() {
        const collection = db.collection("mixtapes");
        // Check for db error.
        try {
            const mixtapes = await collection.find({}).toArray();
            return mixtapes;
        }
        catch (error) {
            console.error('Error fetching data from db:', error);
            throw error;
        }
    },
    // Delete specific mixtape from database.
    deleteMixtapeByID: async function deleteMixtapeByID(id) {
        const collection = db.collection("mixtapes");
        // Check for db error.
        try {
            const objectId = new ObjectId(id);
            const result = await collection.deleteOne({ _id: objectId });
            // Check if a mixtape was deleted successfully.
            if (result.deletedCount === 1) {
                return { success: true, message: "Mixtape deleted successfully" };
            }
            else {
                return { success: false, message: "Mixtape not found" };
            }
        }
        catch (error) {
            console.error("Error deleting mixtape from the database:", error);
            throw error;
        }
    },
    // Add a new mixtape to database.
    createMixtape: async function createMixtape(mixtapeData) {
        const collection = db.collection("mixtapes");
        // Check for db error.
        try {
            const result = await collection.insertOne(mixtapeData);
            if (result.insertedCount === 1) {
                return { success: true, message: "Mixtape created successfully" };
            }
            else {
                return { success: false, message: "Mixtape creation failed" };
            }
        }
        catch (error) {
            console.error("Error inserting mixtape into database:", error);
            throw error;
        }
    }
};
export default mixtapeModel;
