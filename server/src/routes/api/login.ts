//user 이용해서 로그인하는 걸로 바꾸기
import { Router, Response } from "express";
import { check, validationResult } from "express-validator/check";
import HttpStatusCodes from "http-status-codes";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import Payload from "../../types/Payload";
import Request from "../../types/Request";
import User, { IUser } from "../../models/User";
import config from 'config';

const router: Router = Router();

{/* user 로그인 */ }
router.post("/",
  [
    check("email", "Please include a valid email").isEmail(),
    check("password", "Password is required").exists()
  ],
  async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res
        .status(HttpStatusCodes.BAD_REQUEST)
        .json({ errors: errors.array() });
    }

    const { email, password } = req.body;
    try { //유저 이메일 조회
      let user: IUser = await User.findOne({ email });

      if (!user) {
        return res.status(HttpStatusCodes.BAD_REQUEST).json({
          errors: [
            {
              msg: "Invalid Email"
            }
          ]
        });
      }

      //유저 비밀번호 조회: 암호화된 비밀번호와 일치하는지 확인
      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        return res.status(HttpStatusCodes.BAD_REQUEST).json({
          errors: [
            {
              msg: "Invalid Password"
            }
          ]
        });
      }

      const payload: Payload = {
        userId: user.id
      };

      //jwt.sign(payload, 비밀키 값) -> 출력 결과로는 .으로 이어진 인코딩 문자열 나옴
      jwt.sign(
        payload,
        config.get("jwtSecret"),
        { expiresIn: config.get("jwtExpiration") },
        (err, token) => {
          if (err) throw err;

          
          res.status(HttpStatusCodes.OK).json({ token, isLoginSuccessed: true });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).send("Server Error");
    }
  }
);

export default router;
