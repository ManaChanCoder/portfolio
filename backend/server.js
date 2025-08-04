import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectionDB } from "./environment/connectionDB.js";

// components routes
import messageRoute from "./routes/messageRoute.js";

const app = express();
dotenv.config();

// middleware
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type"],
  })
);
app.use(express.json());

// routes
app.use("/contact", messageRoute);

const port = Number(process.env.PORT);

app.listen(port, () => {
  connectionDB();
  console.log(`Running connection at ${port}`);
});
