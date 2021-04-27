import express from "express";
import cookieParser from 'cookie-parser';
import cors from "cors";
import connectDB from "../../config/database";

{/* apis */ }
import user from "./routes/api/user";
import login from "./routes/api/login";
import mypage from "./routes/api/mypage";
import template from "./routes/api/template";
import auth from './middleware/auth'
const app = express();

{/* cors설정 */ }
const corsOptions = {
  origin: ["http://localhost:8080"],
  credentials: true,
  exposedHeaders: ["set-cookie"],
}


app.use(cors(corsOptions));
app.use(cookieParser());

{/* 서버 설정 */ }
app.set("port", process.env.PORT || 5000);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

{/* mongoDB 연결 */ }
connectDB();

{/* routes */ }
app.use("/api/user", user);
app.use("/api/login", login);
app.use("/api/mypage", mypage);
app.use("/api/template", template);

{/* server listen */ }
const port = app.get("port");
const server = app.listen(port, () =>
  console.log(`Server started on port ${port}`)
);

export default server;
