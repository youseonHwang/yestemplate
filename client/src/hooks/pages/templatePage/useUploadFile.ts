import { useDispatch } from 'react-redux';
import * as actions from '../../../modules/postWrite/actions';

function useUploadFile(): {
  uploadFile: (file: File) => void;
} {
  const dispatch = useDispatch();
  const uploadFile = (file: File) => {
    const formData = new FormData();
    formData.append('uploadFile', file);
    dispatch(actions.uploadFileRequest({ formData }));
  };
  return {
    uploadFile
  };
}

export default useUploadFile;