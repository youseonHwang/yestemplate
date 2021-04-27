import config from "config";
import { Request, Response, NextFunction } from "express";
import HttpStatusCodes from "http-status-codes";
import jwt from "jsonwebtoken";
import Payload from "../types/Payload";

{ /* 권한 체크 */ }
export default function (req: Request, res: Response, next: NextFunction) {
  // 헤더에서 토큰 추출
  const token = req.cookies.token

  console.log('auth미들웨어의', token)

  // 토큰이 없을 경우
  if (!token) {
    return res
      .status(HttpStatusCodes.UNAUTHORIZED)
      .json({ msg: "No token, authorization denied" });
  }
  // verify
  try {
    const payload: Payload | any = jwt.verify(token, config.get("jwtSecret"));
    req.body('userId', payload.userId)
    console.log('auth미들웨어의', payload.userId)
    next();
  } catch (err) {
    res
      .status(HttpStatusCodes.UNAUTHORIZED)
      .json({ msg: "Token is not valid" });
  }
}
