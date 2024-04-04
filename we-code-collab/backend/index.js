import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import bcrypt from "bcrypt";
import cookieParser from "cookie-parser";
import jwt from "jsonwebtoken";
const JWT_SECRET = "Manpreet123";

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
    required: false,
    unique: false,
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

server.post("/signup", async (req, res) => {
  let exist = await User.findOne({ email: req.body.email });
  let hashpw = await bcrypt.hash(req.body.pwd, 10);
  if (exist) {
    res.status(400).json({ message: "user already exists" });
  }
  if (!exist) {
    await User.create({
      username: req.body.username,
      email: req.body.email,
      password: hashpw,
    });
    const token = jwt.sign({ email: req.body.email }, JWT_SECRET);
    res
      .cookie("user", token, { httpOnly: false })
      .redirect("http://localhost:5173/");
  }
});

server.post("/login", async (req, res) => {
  let exist = await User.findOne({ email: req.body.email });

  if (!exist) {
    res.status(400).json({ message: "email id not registered " });
  }
  if (exist) {
    if (await bcrypt.compare(req.body.pwd, exist.password)) {
      const token = jwt.sign({ email: exist.email }, JWT_SECRET);
      res
        .cookie("user", token, { httpOnly: false })
        .redirect("http://localhost:5173/");
    } else {
      res.status(400).json({ message: "wrong password" });
    }
  }
});

server.get("/language", async (req, res) => {
  console.log("hmm done");
});
const PORT = 8001;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
