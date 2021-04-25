import { ActionType } from 'typesafe-actions';
import {
  signUpFieldChange
} from './actions';

export interface State {
  userInfo: {
    name: string;
    email: string;
    password: string;
  }
}

export type Actions = ActionType<typeof signUpFieldChange>;