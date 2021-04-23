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

interface ApplicantProps {
    belong: string;
    position: string;
    name: string;
    onChangeApplicantFields: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Applicant: React.FC<ApplicantProps> = ({
    belong,
    position,
    name,
    onChangeApplicantFields,
}) => {
    const classes = useStyles();
    return (
        <Paper className={classes.paper}>
            <Grid item xs={12} >
                <h1 style={{ fontSize: '20px', fontWeight: 'bold', textAlign: 'left', marginBottom: '3%' }} >신청인</h1>
                    <TextField
                        style={{ marginBottom: '3%' }} 
                        variant="outlined"
                        required
                        fullWidth
                        id="belong"
                        label="소속"
                        name="belong"
                        autoComplete="belong"
                        value={belong}
                        onChange={onChangeApplicantFields}
                    />
                    <TextField 
                        style={{ marginBottom: '3%' }} 
                        variant="outlined"
                        required
                        fullWidth
                        id="position"
                        label="직위"
                        name="position"
                        autoComplete="position"
                        value={position}
                        onChange={onChangeApplicantFields}
                    />
                    <TextField
                        variant="outlined"
                        required
                        fullWidth
                        id="name"
                        label="성명"
                        name="name"
                        autoComplete="name"
                        value={name}
                        onChange={onChangeApplicantFields}
                    />
            </Grid>
        </Paper>
    );
}

export default Applicant;