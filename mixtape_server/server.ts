
import express from "express";
import expressPlaygroundDefault from "graphql-playground-middleware-express";
import cors from "cors";
import { createHandler } from 'graphql-http/lib/use/express';
import schema from "./graphql/schema.js";

const PORT = process.env.PORT || 5000;
const app = express();

const expressPlayground = expressPlaygroundDefault.default;

app.use(cors());
app.use(express.json());

app.use('/graphql', createHandler({ schema }));
app.get('/playground', expressPlayground({ endpoint: '/graphql' }))

// Start the Express server.
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
