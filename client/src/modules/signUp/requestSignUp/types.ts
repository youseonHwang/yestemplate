import { ActionType } from 'typesafe-actions';
import { signUpRequest, signUpSuccess, signUpFailure } from './actions';

export interface State {
  success: boolean | null;
  msg: string;
}

const actions = {
  signUpSuccess,
  signUpFailure,
  signUpRequest,
};

export type Actions = ActionType<typeof actions>;