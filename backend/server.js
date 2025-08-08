import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectionDB } from "./environment/connectionDB.js";

// components routes
import messageRoute from "./routes/messageRoute.js";

const app = express();
dotenv.config();

// middleware
const allowedOrigins = [
  "portfolio-mwal8e50r-manachancoders-projects.vercel.app",
  "http://localhost:5173", // optional: local dev
];

app.use(
  cors({
    origin: function (origin, callback) {
      // Allow requests with no origin (like mobile apps or curl)
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use(express.json());

// routes
app.use("/contact", messageRoute);

const port = Number(process.env.PORT) || 3000;

app.listen(port, () => {
  connectionDB();
  console.log(`Running connection at ${port}`);
});
