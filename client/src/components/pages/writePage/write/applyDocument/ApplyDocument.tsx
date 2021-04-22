import * as React from "react";
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

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
    onChangeDocumentFields: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const ApplyDocument: React.FC<ApplyDocumentProps> = ({
    fileName,
    onChangeDocumentFields,
}) => {
    const classes = useStyles();
    return (
        <Paper className={classes.paper}>
            <Grid item xs={12}>
                    <h1 style={{ fontSize: '20px', fontWeight: 'bold', textAlign: 'left', marginBottom: '3%' }} >증빙자료 첨부</h1>
                        <input
                            
                            type="file"
                            placeholder="파일첨부"
                            name="fileName"
                            onChange={onChangeDocumentFields}
                        />
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
                        // value={etc}
                        onChange={onChangeDocumentFields}
                        />
                </Grid>
            </Grid>
        </Paper>
    );
}

export default ApplyDocument;