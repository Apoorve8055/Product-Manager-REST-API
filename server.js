import express, { application } from "express";
import dotenv from "dotenv";
import cors from "cors";
import dbConnection from "./database/connection.js";
import productRouter from "./routes/productRoutes.js";
import userRouter from "./routes/userRoutes.js";

dotenv.config();

const app = express();

// mongodb database connection
dbConnection();

// Built-in middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Third-party middlewares
app.use(cors());

// Error handling middlewares
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send({
    status: 500,
    message: err.message,
    body: {},
  });
});

// application-level middleware
app.use("/api/v1/product", productRouter);
app.use("/api/v1/", userRouter);

// Route
app.get("/", (req, res) => {
  res.send("Hi");
});

// create server
const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
