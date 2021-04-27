import React, { useEffect, useState, useRef } from 'react';
import { useLocation } from "react-router";
import { stateType } from '../../../../containers/pages/writePage/applicant/ApplicantContainer'
import { withRouter } from 'react-router-dom';

import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';

{/* container를 불러와야 component를 가져올 수 있음 */ }
import ApplicantContainer from '../../../../containers/pages/writePage/applicant/ApplicantContainer';
import ApplyDocumentContainer from '../../../../containers/pages/writePage/applyDocument/ApplyDocumentContainer';
import ApplyInfoContainer from '../../../../containers/pages/writePage/applyInfo/ApplyInfoContainer';
{/*hooks */ }
import useSaveTemplate from '../../../../hooks/pages/templatePage/useSaveTemplate'
import useInitTemplateField from '../../../../hooks/pages/templatePage/useInitTemplateField';
import useEditTemplateField from '../../../../hooks/pages/templatePage/useEditTemplate';
import useUploadFile from '../../../../hooks/pages/templatePage/useUploadFile'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      width: '95%',
      padding: theme.spacing(2),
      marginBottom: theme.spacing(5),
      textAlign: 'center',
    }
  }));

function Write() {
  const classes = useStyles();
  const [file, setFile] = useState<File[]>([]);
  const [isEdit, setIsEdit] = useState(false)
  const [templateId, setTemplateId] = useState('')
  const { state } = useLocation<stateType>();
  useEffect(() => {
    if (state) {
      if (state.isEdit) {
        setIsEdit(state.isEdit)
      }
      if (state.template._id) {
        setTemplateId(state.template._id)
      }
    }
  }, [])

  {/* 저장하는 hook */ }
  const { saveRequest } = useSaveTemplate();
  {/* 리덕스 초기화 hook */ }
  const { initRequest } = useInitTemplateField();
  {/* 수정하는 hook */ }
  const { editRequest } = useEditTemplateField();
  {/* 파일 업로드 hook */ }
  const { uploadFile } = useUploadFile();
  {/*파일 선택 반환 */ }
  const onChangeFile = ({ currentTarget: { files } }: React.ChangeEvent<HTMLInputElement>) => {
    if (files) {
      setFile(existing => existing.concat(Array.from(files)));
    }
  }

  function onClickSaveOrEdit() {
    if (isEdit) {
      editRequest(templateId)
      uploadFile(file[0])
      initRequest()
    } else {
      saveRequest()
      uploadFile(file[0])
      initRequest()
    }
  }
  return (
    <Paper className={classes.paper}>
      <div style={{ overflow: "scroll", height: '800px' }}>
        <ApplicantContainer />
        <ApplyInfoContainer />
        <ApplyDocumentContainer onChangeFile={onChangeFile} />
        <Button
          variant="contained"
          color="primary"
          size="large"
          startIcon={<SaveIcon />}
          onClick={onClickSaveOrEdit}
        >
          임시저장
      </Button>
      </div>
    </Paper>
  )
}


export default withRouter(Write);
