{/* login action type 지정 */}
import { ActionType } from 'typesafe-actions';
import { changeLoginField } from './actions';

export interface State {
  login: { 
    email: string; 
    password: string;
  }
}

export type Actions = ActionType<typeof changeLoginField>;