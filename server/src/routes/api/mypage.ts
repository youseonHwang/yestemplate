import express, { Router, Response } from "express";
import HttpStatusCodes from "http-status-codes";
import Request from "../../types/Request";

{/* Models */ }
import User, { IUser } from "../../models/User";
import Template, { ITemplate } from '../../models/Template';

const router: Router = Router();

{/* myPage에 template 임시 저장 */ }
router.post("/:id",
  async (req: Request, res: Response) => {
    const _id = req.params.id
    const templateFields = {
      userFrom: '607e3447f3990d3b44758e15',
      applicant: {
        belong: '222',
        position: '2222',
        name: '2222',
        etc: '2222',
      },
      applyInfo: {
        applyContent: '2222',
        respondent: {
          resName: '2222',
          resJUmin: '2222',
          relation: '2222',
        },
        applyAmount: 3000,
      },
    }

    try {
      let template: ITemplate = new Template(templateFields);
      await template.save();
    } catch (err) {
      console.error(err.message);
      res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).send("Server Error");
    }
  }
)

{/* 현재 로그인 된 user의 mypage 정보 조회 */ }
router.get("/:id",
  async (req: Request, res: Response) => {

    //예시
    //607d291bfbf12476cc972aec
    //607e3447f3990d3b44758e15
    const _id = req.params.id

    if (!_id) {
      return res.status(HttpStatusCodes.BAD_REQUEST).json({
        errors: [
          {
            msg: "User not exists"
          }
        ]
      });
    }


    try {
      let user: IUser = await User.findById({ _id });
      console.log(user)
      if (!user) {
        return res.status(HttpStatusCodes.BAD_REQUEST).json({
          errors: [
            {
              msg: "유저가 존재하지 않습니다."
            }
          ]
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
