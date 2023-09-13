import express from "express";
import { ObjectId } from "mongodb";
import db from "../db/connect.mjs"

const router = express.Router();

// Get all mixtape data.
router.get("/", async (req, res) => {
  let collection = await db.collection("mixtapes");
  let results = await collection.find({}).toArray();
  res.send(results).status(200);
});

export default router;