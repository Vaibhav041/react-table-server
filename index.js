import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import Food from "./DB/Food.js";
const app = express();

const corsConfig = {
  origin: true, //included origin as true
  credentials: true, //included credentials as true
};

app.use(express.json());
app.use(cors(corsConfig));
dotenv.config();

mongoose.connect(process.env.MONGO, { useNewUrlParser: true }).then(() => {
  console.log("db");
});

app.get("/get-data", async (req, res) => {
  try {
    let data = await Food.find({});
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
});

const PORT = process.env.PORT || 9000;

app.listen(PORT, () => {
  console.log("connected");
});
