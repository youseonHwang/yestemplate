import * as React from "react";
import { useState } from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import useUploadFile from '../../../../../hooks/pages/templatePage/useUploadFile';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      width: '95%',
      padding: theme.spacing(2),
      marginBottom: theme.spacing(5),
      textAlign: 'center',
    }
  }));

interface ApplyDocumentProps {
  fileName: Array<string | null>;
  etc: string;
  onChangeDocumentFields: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const ApplyDocument: React.FC<ApplyDocumentProps> = ({
  fileName,
  etc,
  onChangeDocumentFields,
}) => {
  const { uploadFile} = useUploadFile()
  function onChangeFile(event: React.ChangeEvent<HTMLInputElement>) {
    if (event.target.files != null) {
      const selectedFile = event.target.files[0];
      console.log(selectedFile)
      uploadFile(selectedFile)
    }
    onChangeDocumentFields(event)
  }
  const classes = useStyles();
  return (
    <Paper className={classes.paper}>
      <Grid item xs={12}>
        <h1 style={{ fontSize: '20px', fontWeight: 'bold', textAlign: 'left' }} >증빙자료 첨부</h1>
        <div style={{ marginBottom: '3%' }}>
          <Grid
            container direction="row"
            alignItems="flex-end">
            <Grid item >
              <InsertDriveFileIcon />
            </Grid>
            <Grid item>
              <TextField id="input-with-icon-grid" label={fileName} disabled />
            </Grid>
            <Grid item >
              <input
                type="file"
                placeholder="파일첨부"
                name="fileName"
                onChange={onChangeFile}
              />
            </Grid>
          </Grid>
        </div>
        <Grid item xs={12}>
          <h1 style={{ fontSize: '20px', fontWeight: 'bold', textAlign: 'left', marginBottom: '3%' }} >기타</h1>
          <TextField
            variant="outlined"
            required
            fullWidth
            id="etc"
            label="기타 사항"
            name="etc"
            autoComplete="etc"
            value={etc}
            onChange={onChangeDocumentFields}
          />
        </Grid>
      </Grid>
    </Paper>
  );
}

export default ApplyDocument;