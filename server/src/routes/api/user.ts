import bcrypt from "bcryptjs";
import { Router, Response } from "express";
import { check, validationResult } from "express-validator/check";
import HttpStatusCodes from "http-status-codes";
import jwt from "jsonwebtoken";
import Request from "../../types/Request";
import User, { IUser } from "../../models/User";

const router: Router = Router();

{ /* user 회원가입 */ }
router.post("/signup",
  [
    check("name", "이름을 작성해주세요").isLength({ min: 1 }),
    check("email", "유효한 이메일 주소를 작성해주세요").isEmail(),
    check("password", "비밀번호는 최소 6글자 이상 입력해주세요").isLength({ min: 6 })
  ],

  async (req: Request, res: Response) => {

    // check 결과 에러 여부 확인
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res
        .status(HttpStatusCodes.BAD_REQUEST)
        .json({ errors: errors.array() });
    }

    const { name, email, password } = req.body;

    try {
      // 가져온 email을 가지고 User가 이미 존재하는지 확인
      let user: IUser = await User.findOne({ email });

      if (user) {
        return res.status(HttpStatusCodes.BAD_REQUEST).json({
          msg: "User already exists"
        });
      }

      // 기존 User가 없다면 가져온 password로 암호화
      const salt = await bcrypt.genSalt(10);
      const hashed = await bcrypt.hash(password, salt);

      // Build user object based on IUser
      const userFields = {
        name,
        email,
        password: hashed,
        role: 0,
      };

      // 필드로 userSchema생성
      user = new User(userFields);
      if (!user) {
        return res.status(HttpStatusCodes.BAD_REQUEST).json({
          msg: "정보가 유효하지 않습니다."
        });
      }

      // User 저장
      user = await user.save({});
      if (!user) {
        return res.status(HttpStatusCodes.BAD_REQUEST).json({
          msg: "회원가입에 실패하였습니다."
        });
      }

      res.json({ user, success: true });

    } catch (err) {
      res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).send("Server Error");
    }
  }
);

export default router;
