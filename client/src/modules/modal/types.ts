{/* login action type 지정 */ }
import { ActionType } from 'typesafe-actions';
import { openModal, hideModal } from './actions';

export interface State {
  modal: {
    visible: boolean;
    theme: string;
    msg: string;
  }
}

const actions = {
  openModal,
  hideModal
};
export type Actions = ActionType<typeof actions>;