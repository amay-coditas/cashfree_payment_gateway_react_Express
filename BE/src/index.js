import express from "express";
import cors from "cors"; 
import { apiRouter } from "./routers/api/index.js";
import dotenv from 'dotenv';

dotenv.config();

const PORT = 3002;

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

// Routers
app.use("/api", apiRouter);

app.listen(PORT, () => {
  console.log(`Cashfree API app listening at http://localhost:${PORT}`);
});

