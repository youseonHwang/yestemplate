import { ActionType } from 'typesafe-actions';

//* import redux state types
import { ApplicantState } from '../../modules/writeChange/applicant/types';
import { DocumentState } from '../../modules/writeChange/applyDocument/types';
import { ApplyInfoState } from '../../modules/writeChange/applyInfo/types';

import {
  saveTemplateFieldRequest,
  saveTemplateFieldSuccess,
  saveTemplateFieldFailure
} from './actions';

export interface SaveEditTemplateState {
  saveTemplate: {
    success: boolean | null;
    msg: null | string;
  };
  editTemplate: {
    template: null | {
        applicant: ApplicantState[];
        applyInfo: ApplyInfoState[];
        applyDocument: DocumentState[];
    };
    msg: null | string;
  };
  updateTemplate: {
    isEdited: null | boolean;
    newTemplate: null | {
        applicant: ApplicantState[];
        applyInfo: ApplyInfoState[];
        applyDocument: DocumentState[];
    };
  };
  uploadImage: { location: null | string; isUpload: null | boolean };
  deleteTemplate: { isDeleted: boolean; msg: string | null };
}

const actions = {
  saveTemplateFieldRequest,
  saveTemplateFieldSuccess,
  saveTemplateFieldFailure
};

export type Actions = ActionType<typeof actions>;
