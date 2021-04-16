import { ActionType } from 'typesafe-actions';
import {
  signUpRequest,
  signUpSuccess,
  signUpFailure,
  signUpFieldChange
} from './actions';

export interface State {
  userInfo: {
    name: string;
    email: string;
    password: string;
  }
  success: boolean | null;
  msg: string;
}

const actions = {
  signUpRequest,
  signUpSuccess,
  signUpFailure,
  signUpFieldChange,
};

export type Actions = ActionType<typeof actions>;