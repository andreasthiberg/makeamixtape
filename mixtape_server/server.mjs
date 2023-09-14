import express from "express";
import cors from "cors";
import "./loadEnvironment.mjs";
import mixtape from "./routes/mixtape.mjs"

const PORT = process.env.PORT || 5000;
const app = express();

global.access_token = ''

app.use(cors());
app.use(express.json());

app.use("/mixtape", mixtape);

// Start the Express server.
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});