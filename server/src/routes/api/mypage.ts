import express, { Router, Response } from "express";
import HttpStatusCodes from "http-status-codes";
import Request from "../../types/Request";

import auth from '../../middleware/auth';
{/* Models */ }
import User, { IUser } from "../../models/User";
import Template, { ITemplate } from '../../models/Template';

const router: Router = Router();


{/* 현재 로그인 된 user의 mypage 정보 조회 */ }
router.get("/:id",
  async (req: Request, res: Response) => {
    const token = req.cookies.token
    console.log(token)
    //test url = http://localhost:5000/api/mypage/607e3447f3990d3b44758e15
    const _id = req.params.id

    if (!_id) {
      return res.status(HttpStatusCodes.BAD_REQUEST).json({

        msg: "유저가 존재하지 않습니다."
      });
    }

    try {
      let user: IUser = await User.findById({ _id });
      console.log(user)
      if (!user) {
        return res.status(HttpStatusCodes.BAD_REQUEST).json({
          msg: "유저가 존재하지 않습니다."
        });
      }

      let templates: Array<any> = await Template.find({ userFrom: _id })
      res.status(HttpStatusCodes.OK).send(templates);

    } catch (err) {
      console.error(err.message);
      res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).send("Server Error");
    }
  }
);

export default router;