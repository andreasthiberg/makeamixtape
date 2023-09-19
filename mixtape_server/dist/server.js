import express from "express";
import cors from "cors";
import { createHandler } from 'graphql-http/lib/use/express';
import schema from "./graphql/schema";
const PORT = process.env.PORT || 5000;
const app = express();
app.use(cors());
app.use(express.json());
app.use('/graphql', createHandler({ schema }));
// Start the Express server.
app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});
