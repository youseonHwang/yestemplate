import { ActionType } from 'typesafe-actions';

//* import redux state types
import { ApplicantState } from '../../modules/writeChange/applicant/types';
import { DocumentState } from '../../modules/writeChange/applyDocument/types';
import { ApplyInfoState } from '../../modules/writeChange/applyInfo/types';

import {
  saveTemplateFieldRequest,
  saveTemplateFieldSuccess,
  saveTemplateFieldFailure,

  editTemplateFieldFailure,
  editTemplateFieldSuccess,
  editTemplateFieldRequest,

  uploadFileFailure,
  uploadFileRequest,
  uploadFileSuccess
} from './actions';

export interface SaveEditTemplateState {
  saveTemplate: {
    success: boolean | null;
    msg: null | string;
  };
  editTemplate: {
    template: null | {
      userFrom: string,
      applicant: ApplicantState[];
      applyInfo: ApplyInfoState[];
      applyDocument: DocumentState[];
    };
    msg: null | string;
  };
  uploadFile: { isUpload: null | boolean };
  deleteTemplate: { isDeleted: boolean; msg: string | null };
}

const actions = {
  saveTemplateFieldRequest,
  saveTemplateFieldSuccess,
  saveTemplateFieldFailure,
  editTemplateFieldFailure,
  editTemplateFieldSuccess,
  editTemplateFieldRequest,
  uploadFileFailure,
  uploadFileRequest,
  uploadFileSuccess
};

export type Actions = ActionType<typeof actions>;
