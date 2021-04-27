import { useDispatch } from 'react-redux';
import * as actions from '../../../modules/postWrite/actions';

function useUploadFile(): {
  uploadFile: (file: File) => void;
} {
  const dispatch = useDispatch();
  // //? useSelector
  // const { location } = useSelector(
  //   ({ asyncResumeField }: { asyncResumeField: SaveEditResumeState }) => ({
  //     location: asyncResumeField.uploadImage.location,
  //   }),
  // );
  const uploadFile = (file: File) => {
    const formData = new FormData();
    console.log('hook의 file', file)
    formData.append('uploadFile', file);
    dispatch(actions.uploadFileRequest({ formData }));
  };
  return {
    uploadFile
  };
}

export default useUploadFile;