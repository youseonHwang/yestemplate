import express, { Router, Response } from "express";
import HttpStatusCodes from "http-status-codes";
import Request from "../../types/Request";

{/* Models */ }
import Template, { ITemplate } from '../../models/Template';

const router: Router = Router();

{/* 현재 작성중인 template 임시 저장 */ }
// test methods = post
// test url = http://localhost:5000/api/template/save
router.post("/save",
  async (req: Request, res: Response) => {

    console.log(req.body)
    const userId = req.body.userFrom;

    if (!userId) {
      return res.status(HttpStatusCodes.BAD_REQUEST).json({
        msg: "유저의 아이디가 유효하지 않습니다."
      })
    }

    const templateFields = req.body;

    try {
      let template: ITemplate = new Template(templateFields);
      template = await template.save();

      if (!template) {
        return res.status(HttpStatusCodes.BAD_REQUEST).json({
          msg: "저장에 실패하였습니다. 입력란을 확인해주세요."
        })
      }

      res.status(HttpStatusCodes.OK).json({ success: true, template });

    } catch (err) {
      console.error(err.message);
      res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).send("Server Error");
    }
  }
)

{/* 템플릿 수정 */ }
// test methods = put
// test url = http://localhost:5000/api/template/607e3447f3990d3b44758e15
router.put("/edit/:templateId",
  async (req: Request, res: Response) => {

    const templateId = req.params.templateId
    const templateFields = req.body

    if (!templateId || !templateFields) {
      return res.status(HttpStatusCodes.BAD_REQUEST).json({
        msg: "유저의 아이디 혹은 템플릿의 정보가 유효하지 않습니다."
      })
    }

    try {
      let template = await Template.findOneAndUpdate(
        { _id: templateId },
        templateFields,
        { upsert: true }
      ).exec();
      console.log(template)
      if (!template) {
        return res.status(HttpStatusCodes.BAD_REQUEST).json({
          msg: "수정에 실패하였습니다."
        });
      }
      res.status(HttpStatusCodes.OK).json({ success: true, template });
    } catch (err) {
      console.error(err.message);
      res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).send("Server Error");
    }
  }
)

{/* 1개의 템플릿 정보 가져오기 */ }
// test methods = get
// test url = http://localhost:5000/api/template/607e6d442f1afc14d4abdc43
router.get("/:templateId",
  async (req: Request, res: Response) => {

    const templateId = req.params.templateId

    if (!templateId) {
      return res.status(HttpStatusCodes.BAD_REQUEST).json({
        msg: "템플릿의 번호가 유효하지 않습니다."
      })
    }

    try {
      let template: ITemplate = await Template.findById({ _id: templateId }).exec();

      if (!template) {
        return res.status(HttpStatusCodes.BAD_REQUEST).json({
          msg: "수정에 실패하였습니다."
        });
      }

      res.status(HttpStatusCodes.OK).json({ success: true, template });

    } catch (err) {
      console.error(err.message);
      res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).send("Server Error");
    }
  }
)

{/* 템플릿 수정 */ }
// test methods = delete
// test url = http://localhost:5000/api/template/delete/템플릿아이디
router.delete("/delete/:templateId",
  async (req: Request, res: Response) => {

    const templateId = req.params.templateId

    if (!templateId) {
      return res.status(HttpStatusCodes.BAD_REQUEST).json({
        msg: "템플릿의 번호가 유효하지 않습니다."
      })
    }

    try {
      const response = await Template.findByIdAndDelete({ _id: templateId }).exec();
      if (!response) {
        return res.status(HttpStatusCodes.BAD_REQUEST).json({
          msg: "삭제에 실패하였습니다."
        });
      }
      res.status(HttpStatusCodes.OK).json({ success: true });
    } catch (err) {
      console.error(err.message);
      res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).send("Server Error");
    }
  }
)


export default router;