import { ActionType } from 'typesafe-actions';
import { loginRequest, loginSuccess, loginFailure } from './actions';

export interface State {
  success: boolean | null;
  msg: string;
}
const actions = {
  loginRequest,
  loginSuccess,
  loginFailure,
};
export type Actions = ActionType<typeof actions>;