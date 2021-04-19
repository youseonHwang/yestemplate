import { ActionType } from 'typesafe-actions';
import { loginPostRequest, loginPostSuccess, loginPostFailure } from './actions';

export interface State {
  isLoginSuccessed: boolean | null;
  message: string;
}
const actions = {
  loginPostRequest,
  loginPostSuccess,
  loginPostFailure,
};
export type Actions = ActionType<typeof actions>;