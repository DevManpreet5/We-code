import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import bcrypt from "bcrypt";

const server = express();
server.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
server.use(bodyParser.urlencoded({ extended: true }));

server.use(bodyParser.urlencoded({ extended: false }));

server.use(express.json());

mongoose
  .connect("mongodb://127.0.0.1:27017/we-chat", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const User = mongoose.model("User", userSchema);

server.get("/signup", (req, res) => {
  console.log("we");
});

server.post("/signup", async (req, res) => {
  let exist = await User.findOne({ email: req.body.email });
  let hashpw = await bcrypt.hash(req.body.pwd, 10);
  if (!exist) {
    await User.create({
      username: req.body.username,
      email: req.body.email,
      password: hashpw,
    });
  }

  res.send("hi");
});

const PORT = 8001;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
