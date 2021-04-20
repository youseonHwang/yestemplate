import { Document, Model, model, Schema } from "mongoose";

export interface ITemplate extends Document {
  userFrom: string,
  applicant: {
    belong: string | null,
    position: string | null,
    name: string | null,
    etc: string | null
  },
  applyInfo: {
    applyContent: string | null,
    respondent: {
      resName: string | null,
      resJumin: string | null,
      relation: string | null,
    },
    applyAmount: number | null,
  },
  applyDocument: {
    fileName: Array<string | null>
  },
}

const templateSchema: Schema = new Schema({
  userFrom: {
    type: Schema.Types.ObjectId, // user모델의 objectId를 가지고만 ref가능
    ref: 'User' // 'User' 모델 참조
  },
  applicant: {
    belong: {
      type: String,
    },
    position: {
      type: String,
    },
    name: {
      type: String,
    },
    etc: {
      type: String,
    },
  },
  applyInfo: {
    applyContent: {
      type: String,
    },
    respondent: {
      resName: {
        type: String,
      },
      resJUmin: {
        type: String,
      },
      relation: {
        type: String,
      },
    },
    applyAmount: {
      type: Number,
    },
  },
  applyDocument: {
    fileName: [{ type: String }]
  },


}, { timestamps: true })

const Template: Model<ITemplate> = model("Template", templateSchema);

export default Template;
