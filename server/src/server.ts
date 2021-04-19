import express from "express";
import connectDB from "../../config/database";
// import auth from "./routes/api/auth";
import user from "./routes/api/user";
import login from "./routes/api/login";
import cors from "cors";

const app = express();

//cors 설정
const corsOptions = {
  origin: ["http://localhost:8080"],
  Credential: true
}
app.use(cors(corsOptions));

// Express configuration
app.set("port", process.env.PORT || 5000);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect to MongoDB
connectDB();

// @route   GET /
// @desc    Test Base API
// @access  Public
app.get("/", (_req, res) => {
  res.send("API Running");
});

app.use("/api/user", user);
app.use("/api/login", login);

const port = app.get("port");
const server = app.listen(port, () =>
  console.log(`Server started on port ${port}`)
);

export default server;
