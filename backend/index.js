import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import path from "path";

import connerctDB from "./config/db.js";
//routes
import userRouter from "./routes/userRoutes.js";
import categoryRouter from "./routes/categoryRoutes.js";
import productRouter from "./routes/productRoutes.js";
import uploadRouter from "./routes/uploadRoutes.js";
import messageRouter from "./routes/messageRoutes.js";
import pubRouter from "./routes/pubRoutes.js";

dotenv.config();
const port = process.env.PORT || 3000;
//connection to database
connerctDB();

const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

app.use("/api/users", userRouter);
app.use("/api/categories", categoryRouter);
app.use("/api/products", productRouter);
app.use("/api/upload", uploadRouter);
app.use("/api/messages", messageRouter);
app.use("/api/pubs", pubRouter);

const __dirname = path.resolve();
app.use("/uploads", express.static(__dirname + "/uploads"));

app.listen(port, () => console.log("server listening on port " + port));
