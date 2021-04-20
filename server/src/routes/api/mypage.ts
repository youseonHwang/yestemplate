import express, { Router, Response } from "express";
import HttpStatusCodes from "http-status-codes";
import Request from "../../types/Request";

{/* Models */ }
import User, { IUser } from "../../models/User";
import Template, { ITemplate } from '../../models/Template';

const router: Router = Router();

{/* 현재 로그인 된 user의 mypage 정보 조회 */ }
router.get("/:id",
  async (req: Request, res: Response) => {
    const _id = req.params.id
    //607d291bfbf12476cc972aec
    //607e3447f3990d3b44758e15
    console.log('_id', _id)

    const templateFields = {
      userFrom: '607e3447f3990d3b44758e15',
      applicant: {
        belong: 'test',
        position: 'test',
        name: 'testName',
        etc: 'testEtc',
      },
      applyInfo: {
        applyContent: 'testContent',
        respondent: {
          resName: 'testresName',
          resJUmin: 'testJumin',
          relation: 'testRelation',
        },
        applyAmount: 50000000,
      },
    }

    try {

      let template: ITemplate = new Template(templateFields);
      await template.save();
      let templates: Array<any> = await Template.find({ userFrom: '607e3447f3990d3b44758e15' })
      // 가져온 email을 가지고 User가 이미 존재하는지 확인
      console.log(templates)
      let user: IUser = await User.findById({ _id });
      console.log(user)
      res.status(HttpStatusCodes.OK).send("ok");
      if (!user) {
        return res.status(HttpStatusCodes.BAD_REQUEST).json({
          errors: [
            {
              msg: "유저가 존재하지 않습니다."
            }
          ]
        });
      }
    } catch (err) {
      console.error(err.message);
      res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).send("Server Error");
    }
  }
);

export default router;
