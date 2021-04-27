import * as React from "react";
{/* UI */ }
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';

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
  onChangeFile: (event: React.ChangeEvent<HTMLInputElement>) => void;
  fileName: Array<string | null>;
  etc: string;
  onChangeDocumentFields: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const ApplyDocument: React.FC<ApplyDocumentProps> = ({
  fileName,
  etc,
  onChangeFile,
  onChangeDocumentFields,
}) => {
  function onChangeFileFields(event: React.ChangeEvent<HTMLInputElement>) {
    onChangeFile(event)
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
            <Grid item xs={9}>
              <TextField
                id="input-with-icon-grid"
                label={fileName}
                disabled
                style={{ width: '100%' }} />
            </Grid>
            <Grid item xs={3}>
              <input
                style={{ display: "none" }}
                id="icon-button-file"
                multiple
                type="file"
                name="fileName"
                onChange={onChangeFileFields}
              />
              <label htmlFor="icon-button-file">
                <IconButton
                  color="primary"
                  aria-label="upload picture"
                  component="span"
                  style={{ float: 'left' }}>
                  <PhotoCamera />
                </IconButton>
              </label>
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