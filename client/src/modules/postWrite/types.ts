import { ActionType } from 'typesafe-actions';

//* import redux state types
import { ApplicantState } from '../../modules/writeChange/applicant/types';
import { DocumentState } from '../../modules/writeChange/applyDocument/types';
import { ApplyInfoState } from '../../modules/writeChange/applyInfo/types';

import {
  saveResumeFieldRequest,
  saveResumeFieldSuccess,
  saveResumeFieldFailure,
  editResumeFieldRequest,
  editResumeFieldSuccess,
  editResumeFieldFailure,
  updateResumeFieldRequest,
  updateResumeFieldSuccess,
  updateResumeFieldFailure,
  onUploadImageRequest,
  onUploadImageSuccess,
  onUploadImageFailure,
  deleteResumeFieldRequest,
  deleteResumeFieldSuccess,
  deleteResumeFieldFailure,
} from './actions';

export interface SaveEditResumeState {
  saveResume: {
    save: boolean | null;
    message: null | string;
  };
  editResume: {
    resume: null | {
        applicant: ApplicantState[];
        applyInfo: ApplyInfoState[];
        applyDocument: DocumentState[];
    };
    message: null | string;
  };
  updateResume: {
    isEdited: null | boolean;
    newResume: null | {
        applicant: ApplicantState[];
        applyInfo: ApplyInfoState[];
        applyDocument: DocumentState[];
    };
  };
  uploadImage: { location: null | string; isUpload: null | boolean };
  deleteResume: { isDeleted: boolean; message: string | null };
}

const actions = {
  saveResumeFieldRequest,
  saveResumeFieldSuccess,
  saveResumeFieldFailure,
  editResumeFieldRequest,
  editResumeFieldSuccess,
  editResumeFieldFailure,
  updateResumeFieldRequest,
  updateResumeFieldSuccess,
  updateResumeFieldFailure,
  onUploadImageRequest,
  onUploadImageSuccess,
  onUploadImageFailure,
  deleteResumeFieldRequest,
  deleteResumeFieldSuccess,
  deleteResumeFieldFailure,
};
export type Actions = ActionType<typeof actions>;
