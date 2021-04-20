import { Document, Model, model, Schema } from "mongoose";

export interface IUser extends Document {
  _id: string;
  name: string;
  email: string;
  password: string;
  role: number;
  token: string;
  tokenExp: number;
}

const userSchema: Schema = new Schema({
  name: {
    type: String,
    maxlength: 50,
    required: true,
  },
  email: {
    type: String,
    trim: true,
    unique: 1,
    required: true,
  },
  password: {
    type: String,
    minglength: 5,
    required: true,
  },
  role: {
    type: Number,
    default: 0
  },
  token: {
    type: String,
  },
  tokenExp: {
    type: Number
  },

});

const User: Model<IUser> = model("User", userSchema);

export default User;
