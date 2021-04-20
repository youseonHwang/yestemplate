import express from "express";
import connectDB from "../../config/database";
import user from "./routes/api/user";
import login from "./routes/api/login";
import cookieParser from 'cookie-parser';
import cors from "cors";

const app = express();

//cors 설정
const corsOptions = {
  origin: ["http://localhost:8080"],
  credentials: true,
  exposedHeaders: ["set-cookie"],
}

app.use(cors(corsOptions));

app.set("port", process.env.PORT || 5000);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Connect to MongoDB
connectDB();

app.use("/api/user", user);
app.use("/api/login", login);

const port = app.get("port");
const server = app.listen(port, () =>
  console.log(`Server started on port ${port}`)
);

export default server;
