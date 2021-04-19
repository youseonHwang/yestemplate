import express from "express";
import connectDB from "../../config/database";
import auth from "./routes/api/auth";
import user from "./routes/api/user";
import profile from "./routes/api/profile";
import cors from "cors"

const app = express();

// cors설정
const corsOptions = {
  origin: ["http://localhost:8080"],
  credentials: true
}
app.use(cors(corsOptions));

app.set("port", process.env.PORT || 5000);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect to MongoDB
connectDB();

app.get("/", (_req, res) => {
  res.send("API Running");
});

app.use("/api/auth", auth);
app.use("/api/user", user);
//login으로 변경
app.use("/api/profile", profile);

const port = app.get("port");
const server = app.listen(port, () =>
  console.log(`Server started on port ${port}`)
);

export default server;
