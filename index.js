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

const connectDB = async() => {
  try {
    const conn = await mongoose.connect(process.env.MONGO, { useNewUrlParser: true });
    console.log("db");
    
  } catch (error) {
    console.log(error);
  }
}

app.get("/get-data", async (req, res) => {
  try {
    let data = await Food.find({});
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
});

const PORT = process.env.PORT || 9000;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("connected");
  });
})


// https://react-table-server.onrender.com/get-data