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

interface ApplyInfoProps {
  applyContent: string;
  resName: string;
  resJumin: string;
  relation: string;
  applyAmount: number;
  onChangeApplyInfoFields: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const ApplyInfo: React.FC<ApplyInfoProps> = ({
  applyContent,
  resName,
  resJumin,
  relation,
  applyAmount,
  onChangeApplyInfoFields,
}) => {
  const classes = useStyles();
  return (
    <Paper className={classes.paper}>
      <Grid item xs={12}>
        <h1 style={{ fontSize: '20px', fontWeight: 'bold', textAlign: 'left', marginBottom: '3%' }} >신청사항</h1>
        <TextField
          variant="outlined"
          required
          fullWidth
          id="applyContent"
          label="내용"
          name="applyContent"
          autoComplete="applyContent"
          value={applyContent}
          onChange={onChangeApplyInfoFields}
        />
        <h1 style={{ fontSize: '20px', fontWeight: 'bold', textAlign: 'left', marginBottom: '3%', marginTop: '3%' }} >피신청인</h1>
        <TextField
          style={{ marginBottom: '3%' }}
          variant="outlined"
          required
          fullWidth
          id="resName"
          label="성명"
          name="resName"
          autoComplete="resName"
          value={resName}
          onChange={onChangeApplyInfoFields}
        />
        <TextField
          style={{ marginBottom: '3%' }}
          variant="outlined"
          required
          fullWidth
          id="resJumin"
          label="주민등록번호"
          name="resJumin"
          autoComplete="resJumin"
          value={resJumin}
          onChange={onChangeApplyInfoFields}
        />
        <TextField
          variant="outlined"
          required
          fullWidth
          id="relation"
          label="신청인과의 관계"
          name="relation"
          autoComplete="relation"
          value={relation}
          onChange={onChangeApplyInfoFields}
        />
        <h1 style={{ fontSize: '20px', fontWeight: 'bold', textAlign: 'left', marginBottom: '3%', marginTop: '3%' }} >신청금액</h1>
        <TextField
          variant="outlined"
          required
          fullWidth
          id="applyAmount"
          label="신청금액"
          name="applyAmount"
          autoComplete="applyAmount"
          value={applyAmount}
          onChange={onChangeApplyInfoFields}
        />
      </Grid>
    </Paper>
  );
}

export default ApplyInfo;